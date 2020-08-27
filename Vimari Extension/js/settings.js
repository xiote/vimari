function getSettings() {
    return {
        'modifier': undefined,
        'excludedUrls': '',

        'hintToggle': 'f',
        'newTabHintToggle': 'shift+f',
        'linkHintCharacters': 'asdfjklqwerzxc',
        'detectByCursorStyle': false,

        'scrollUp': 'k',
        'scrollDown': 'j',
        'scrollLeft': 'h',
        'scrollRight': 'l',
        'scrollSize': 50,
        'scrollUpHalfPage': 'shift+k',
        'scrollDownHalfPage': 'shift+j',
        'goToPageTop': 'g g',
        'goToPageBottom': 'shift+g',

        'goBack': '[',
        'goForward': ']',
        'reload': 'r',
        'tabForward': 'w',
        'tabBack': 'q',
        'closeTab': 'd',
        'closeTabReverse': 'u',

        'openTab': 't',
    };
}

window.getSettings = getSettings;
