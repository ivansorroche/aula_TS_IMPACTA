"use strict";
// Ferramentas
// node, npm, nvm
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
function main() {
    console.log('main is running...');
    // Dynamic types
    // const text = 'text'
    // const integerNumber = 10
    // const decimalNumber = 10.3
    // const arr = []
    // const dictionary = {}
    // console.log(typeof (text))
    // console.log(typeof (integerNumber))
    // console.log(typeof (decimalNumber))
    // console.log(typeof (arr))
    // console.log(typeof (dictionary))
    // console.log(Object.getPrototypeOf(arr).constructor.name)
    // console.log(Object.getPrototypeOf(dictionary).constructor.name)
    // console.log(arr instanceof Array)
    // using a builder function
    (0, logger_1.loggerBuilder)('[funny logs]')('business message...');
    // const logger = new Logger('[funny logs]')
    // logger.log('business message...')
    // logger.prefix = '[funny logs]'
    // logger.log('business message...')
    // console.log(logger.prefix);
}
main();
//# sourceMappingURL=main.js.map