import { logger } from './logger.js';

function dieke() {
    logger("heuj", "log");
}

document.getElementById("buton").addEventListener("click", dieke);