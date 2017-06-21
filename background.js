// alphaTabs, a Chrome extension.
// 2017 Diana Ko. Based on rainbowTabs by Nagisa Day.
// tab icon downloaded from thenounproject.com 

var alphaTabs = function() {

    var run = function() {
        tabTitleLookUp = {};
        faviconsLoaded = 0;
        chrome.tabs.query({ currentWindow: true }, function (tabs) {
            tabCount = tabs.length;
            console.log(tabs);
            myTabs = tabs;
            var newPosition = 0;
            var sortedTabs = tabs.sort(function (a,b) {
                return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
            }).map(function(tab){
                chrome.tabs.move(tab.id, { index: newPosition++ });
            });
        });
    };
    return run;
};

chrome.browserAction.onClicked.addListener(alphaTabs());























