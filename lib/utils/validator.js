"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidString = void 0;
function isValidString(stringVariable) {
    if (stringVariable && !containsSpaces(stringVariable)) {
        return true;
    }
    return false;
}
exports.isValidString = isValidString;
function containsSpaces(stringVariable) {
    return stringVariable.indexOf(" ") !== -1;
}
