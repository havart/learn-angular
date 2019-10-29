const fs = require('fs');

throw new Error(`
--------------------------------------------------------------------------------------
Файл предназначен для быстрого и удобного доступа к коду модификации файла tslint.json
Для использования скрипта:
 * файл необходимо временно скопировать в свой проект
 * проставить указатели на расположения файлов
 * удалить throw new Error
 * запустить и получать удовольствие!
 --------------------------------------------------------------------------------------
`);

const currentTsLintPath = 'YOUR TSLINT FILE'; // example: `../tslint`
const newTsLintPath = 'NEW TSLINT FILE'; // example `tslint.new.json` - отличается от currentTsLintPath
const currentTslint = require(currentTsLintPath);

const baseTsLintPath = '@tcrm/configurations/tslint/base.tslint';
const baseTslint = require(baseTsLintPath);
const baseRulesKeys = Object.keys(baseTslint.rules);

const newRules = Object.keys(currentTslint.rules)
    .sort()
    .reduce(
        (accumulator, ruleName) => {
            if (!baseRulesKeys.includes(ruleName)) {
                accumulator[ruleName] = currentTslint.rules[ruleName];
            }

            return accumulator;
        },
        {},
    );

console.log(JSON.stringify(newRules, null, 2));

const newTsLintData = {
    ...currentTslint,
    rulesDirectory: [],
    extends: ["@tcrm/configurations/tslint/base.tslint.json"],
    rules: newRules,
};

fs.writeFileSync(newTsLintPath, JSON.stringify(newTsLintData, null, 2));
console.log(`Clean tslint was written in './${newTsLintPath}'`);
