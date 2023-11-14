export function loggerBuilder(prefix: string) {
    return (txt: string) => console.log(`${prefix}[customized functional logging]: ${txt}`);
}

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
