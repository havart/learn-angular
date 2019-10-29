"use strict";
/*
    Please keep implementation in .ts file. To apply changes just complile it with tsc
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("tslint/lib");
var ngWalker_1 = require("codelyzer/angular/ngWalker");
var basicTemplateAstVisitor_1 = require("codelyzer/angular/templates/basicTemplateAstVisitor");
var ORDER_CONFIG = [
    "references" /* REFERENCE */,
    "directives" /* DIRECTIVES */,
    "inputs" /* INPUTS */,
    "outputs" /* OUTPUTS */,
    "attrs" /* ATTRIBUTES */,
];
var FAILURE_STRING = 'Attributes must be placed in the correct order';
var TemplateVisitorCtrl = /** @class */ (function (_super) {
    __extends(TemplateVisitorCtrl, _super);
    function TemplateVisitorCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateVisitorCtrl.prototype.visitElement = function (ast, context) {
        this.validateElement(ast);
        _super.prototype.visitElement.call(this, ast, context);
    };
    TemplateVisitorCtrl.prototype.validateElement = function (element) {
        var isValid = this.isValidAttributes(element);
        if (isValid) {
            return;
        }
        var _a = element.sourceSpan, endOffset = _a.end.offset, startOffset = _a.start.offset;
        this.addFailureFromStartToEnd(startOffset, endOffset, FAILURE_STRING);
    };
    TemplateVisitorCtrl.prototype.isValidAttributes = function (element) {
        var _this = this;
        return ORDER_CONFIG.every(function (propType) { return _this.isPropInRightOrder(element, propType); });
    };
    TemplateVisitorCtrl.prototype.isPropInRightOrder = function (element, propType) {
        var _this = this;
        var propTypes = element[propType];
        if (!propTypes.length) {
            return true;
        }
        return propTypes.every(function (validatedProp) {
            var isAfterPropsCorrectPosition = true;
            var isBeforePropsCorrectPosition = true;
            var htmlElementPropsAfter = [];
            var htmlElementPropsBefore = [];
            var validatedPropIndex = ORDER_CONFIG.findIndex(function (prop) { return prop === propType; });
            var propsBefore = ORDER_CONFIG.slice(0, validatedPropIndex);
            var propsAfter = ORDER_CONFIG.slice(validatedPropIndex + 1);
            propsAfter.forEach(function (propAfter) {
                if (!!element[propAfter].length) {
                    htmlElementPropsAfter = htmlElementPropsAfter.concat(element[propAfter]);
                }
            });
            propsBefore.forEach(function (propBefore) {
                if (!!element[propBefore].length) {
                    htmlElementPropsBefore = htmlElementPropsBefore.concat(element[propBefore]);
                }
            });
            if (!!htmlElementPropsAfter.length) {
                isAfterPropsCorrectPosition = htmlElementPropsAfter.every(function (elementProp) {
                    return _this.isPositionFurther(validatedProp, elementProp);
                });
            }
            if (!!htmlElementPropsBefore.length) {
                isBeforePropsCorrectPosition = htmlElementPropsBefore.every(function (elementProp) {
                    return _this.isPositionFurther(elementProp, validatedProp);
                });
            }
            return isAfterPropsCorrectPosition && isBeforePropsCorrectPosition;
        });
    };
    TemplateVisitorCtrl.prototype.isPositionFurther = function (shouldBeEarlier, shouldBeFurther) {
        return shouldBeEarlier.sourceSpan.start.line < shouldBeFurther.sourceSpan.start.line ||
            (shouldBeEarlier.sourceSpan.start.line === shouldBeFurther.sourceSpan.start.line &&
                shouldBeEarlier.sourceSpan.start.col <= shouldBeFurther.sourceSpan.start.col);
    };
    return TemplateVisitorCtrl;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walkerConfig = { templateVisitorCtrl: TemplateVisitorCtrl };
        var walker = new ngWalker_1.NgWalker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: 'attributes-order',
        type: 'maintainability',
        description: "Ensures that attributes are placed in the right order",
        options: null,
        optionsDescription: 'Not configurable',
        rationale: "Placing attributes in the correct order makes template more maintainable",
        typescriptOnly: true,
    };
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
