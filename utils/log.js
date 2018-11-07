//    _____ __             __   ____ ___  _____       __
//   / ___// /_____ ______/ /__/ __ \__ \|__  /      / /___  ____ _____ ____  _____
//   \__ \/ __/ __ `/ ___/ //_/ /_/ /_/ / /_ <______/ / __ \/ __ `/ __ `/ _ \/ ___/
//  ___/ / /_/ /_/ / /__/ ,< / _, _/ __/___/ /_____/ / /_/ / /_/ / /_/ /  __/ /
// /____/\__/\__,_/\___/_/|_/_/ |_/____/____/     /_/\____/\__, /\__, /\___/_/
//                                                        /____//____/
// TBD: bundle logger in package @stackr/logger
//
import chalk    from 'chalk'

const isProduction = process.env.NODE_ENV === 'production'

// no arrow function -> preserve context!
const chalkExt = function (parts, ...substitutions) {
    let rawResults      = [],
        cookedResults   = [],
        chalkParts

    parts.forEach((v, i) => {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])
        if (i < substitutions.length) {
            rawResults.push(substitutions[i])
            cookedResults.push(substitutions[i])
        }
    })
    chalkParts      = [cookedResults.join('')]
    chalkParts.raw  = [rawResults.join('')]

    return chalk(chalkParts)
}

export const errorMsg = (str, ...args) => {
    console.error(chalkExt`\n{bgRed {bold [ERROR]} ${str}}`, ...args)
}

export const debugMsg = (str, ...args) => {
    if (!isProduction) {
        console.log(chalkExt`\n{yellowBright {bold [INFO]} ${str}}`, ...args)
    }
}

export default {
    error:  errorMsg,
    debug:  debugMsg
}
