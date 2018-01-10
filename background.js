chrome.webNavigation.onCommitted.addListener(function(details){
    chrome.tabs.executeScript(details.tabId, {
        file:'inject.js'
    })
})