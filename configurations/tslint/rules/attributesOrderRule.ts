/*
    Please keep implementation in .ts file. To apply changes just complile it with tsc
*/

import { ElementAst, AttrAst, BoundEventAst, BoundElementPropertyAst, DirectiveAst, ReferenceAst } from '@angular/compiler';
import { IRuleMetadata, RuleFailure, Rules } from 'tslint/lib';
import { SourceFile } from 'typescript/lib/typescript';
import { NgWalker, NgWalkerConfig } from 'codelyzer/angular/ngWalker';
import { BasicTemplateAstVisitor } from 'codelyzer/angular/templates/basicTemplateAstVisitor';

const enum ElementComparedProps {
    OUTPUTS = 'outputs',
    INPUTS = 'inputs',
    DIRECTIVES = 'directives',
    ATTRIBUTES = 'attrs',
    REFERENCE = 'references',
}

type ValidatedHtmlElementPropType = AttrAst | BoundElementPropertyAst | BoundEventAst | DirectiveAst | ReferenceAst;

const ORDER_CONFIG: ElementComparedProps[] = [
    ElementComparedProps.REFERENCE,
    ElementComparedProps.DIRECTIVES,
    ElementComparedProps.INPUTS,
    ElementComparedProps.OUTPUTS,
    ElementComparedProps.ATTRIBUTES,
];
const FAILURE_STRING = 'Attributes must be placed in the correct order';

class TemplateVisitorCtrl extends BasicTemplateAstVisitor {
    visitElement(ast: ElementAst, context: any): void {
        this.validateElement(ast);
        super.visitElement(ast, context);
    }

    validateElement(element: ElementAst): void {
        const isValid = this.isValidAttributes(element);
        if (isValid) {
            return;
        }
        const {
            sourceSpan: {
                end: { offset: endOffset },
                start: { offset: startOffset },
            },
        } = element;

        this.addFailureFromStartToEnd(startOffset, endOffset, FAILURE_STRING);
    }

    isValidAttributes(element: ElementAst): boolean {
        return ORDER_CONFIG.every((propType: ElementComparedProps) => this.isPropInRightOrder(element, propType));
    }

    private isPropInRightOrder(element: ElementAst, propType: ElementComparedProps): boolean {
        const propTypes: ValidatedHtmlElementPropType[] = element[propType];

        if (!propTypes.length) {
            return true;
        }

        return propTypes.every((validatedProp: ValidatedHtmlElementPropType) => {
            let isAfterPropsCorrectPosition = true;
            let isBeforePropsCorrectPosition = true;

            let htmlElementPropsAfter: ValidatedHtmlElementPropType[] = [];
            let htmlElementPropsBefore: ValidatedHtmlElementPropType[] = [];

            const validatedPropIndex = ORDER_CONFIG.findIndex((prop: ElementComparedProps) => prop === propType);
            const propsBefore = ORDER_CONFIG.slice(0, validatedPropIndex);
            const propsAfter = ORDER_CONFIG.slice(validatedPropIndex + 1);

            propsAfter.forEach((propAfter: ElementComparedProps) => {
                if (!!element[propAfter].length) {
                    htmlElementPropsAfter = [...htmlElementPropsAfter, ...element[propAfter]];
                }
            });

            propsBefore.forEach((propBefore: ElementComparedProps) => {
                if (!!element[propBefore].length) {
                    htmlElementPropsBefore = [...htmlElementPropsBefore, ...element[propBefore]];
                }
            });

            if (!!htmlElementPropsAfter.length) {
                isAfterPropsCorrectPosition = htmlElementPropsAfter.every((elementProp: ValidatedHtmlElementPropType) =>
                    this.isPositionFurther(validatedProp, elementProp),
                );
            }

            if (!!htmlElementPropsBefore.length) {
                isBeforePropsCorrectPosition = htmlElementPropsBefore.every((elementProp: ValidatedHtmlElementPropType) =>
                    this.isPositionFurther(elementProp, validatedProp),
                );
            }

            return isAfterPropsCorrectPosition && isBeforePropsCorrectPosition;
        });
    }

    private isPositionFurther(shouldBeEarlier: ValidatedHtmlElementPropType, shouldBeFurther: ValidatedHtmlElementPropType): boolean {
        return shouldBeEarlier.sourceSpan.start.line < shouldBeFurther.sourceSpan.start.line ||
            (
                shouldBeEarlier.sourceSpan.start.line === shouldBeFurther.sourceSpan.start.line &&
                shouldBeEarlier.sourceSpan.start.col <= shouldBeFurther.sourceSpan.start.col
            );
    }
}

export class Rule extends Rules.AbstractRule {
    static readonly metadata: IRuleMetadata = {
        ruleName: 'attributes-order',
        type: 'maintainability',
        description: `Ensures that attributes are placed in the right order`,
        options: null,
        optionsDescription: 'Not configurable',
        rationale: `Placing attributes in the correct order makes template more maintainable`,
        typescriptOnly: true,
    };

    apply(sourceFile: SourceFile): RuleFailure[] {
        const walkerConfig: NgWalkerConfig = { templateVisitorCtrl: TemplateVisitorCtrl };
        const walker = new NgWalker(sourceFile, this.getOptions(), walkerConfig);

        return this.applyWithWalker(walker);
    }
}
