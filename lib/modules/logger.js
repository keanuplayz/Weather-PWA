/* eslint-disable no-redeclare */

/**
 * Custom logger module for use on the webpage.
 *
 * @exports logger
 * @param {*} content The content that you want to log.
 * @param {string} [type="log"] The type of log you want to use.
 * @example <caption>Example usage of the logger.</caption>
 * import { logger } from 'logger.js'
 * logger("Test!", "log");
 */
export function logger(content, type = "log") {
    switch (type) {
        case "log": {
            var css = "background: #6495ED;";
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "warn": {
            var css = "background: #FF6600; color: black;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "error": {
            var css = "background: #FF0066"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "debug": {
            var css = "color: #66FF00;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "cmd": {
            var css = "background: #FFFFFF; color: black;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "ready": {
            var css = "background: #66FF00; color: black;"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
        case "disconnect": {
            var css = "background: #FF0066"
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
    }
}