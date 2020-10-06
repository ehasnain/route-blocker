export function isValidString(stringVariable: string): boolean {
    if (stringVariable && !containsSpaces(stringVariable)) {
        return true;
    }
    return false;
}

function containsSpaces(stringVariable: string): boolean {
    return stringVariable.indexOf(" ") !== -1;
}
