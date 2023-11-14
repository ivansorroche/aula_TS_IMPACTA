"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerBuilder = void 0;
function loggerBuilder(prefix) {
    return (txt) => console.log(`${prefix}[customized functional logging]: ${txt}`);
}
exports.loggerBuilder = loggerBuilder;
// export class Logger {
//     constructor(prefix) {
//         this._prefix = prefix;
//     }
//     log(message) {
//         console.log(this._prefix + "[customized oo logging]: " + message);
//     }
//     get prefix() {
//         return this._prefix
//     }
//     set prefix(newPrefix) {
//         if (newPrefix === this._prefix) {
//             console.log('useless setter invocation, skipping...')
//             return;
//         }
//         this._prefix = newPrefix
//     }
// }
//# sourceMappingURL=logger.js.map