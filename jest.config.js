module.exports = {
    "roots": [
        "<rootDir>/__test__"
    ],
    "setupFiles": [
        "<rootDir>/__test__/test-shim.js",
        "<rootDir>/__test__/test-setup.js"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
    },
    "moduleNameMapper": {
        "\\.(scss)$": "jest-css-modules"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],

}