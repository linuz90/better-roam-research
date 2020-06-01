chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create({
        url: 'https://fabriziorinaldi.com/better-roam-research/welcome',
        active: true
    });

    return false;
});
