function createTab() {
  chrome.windows.getAll({"populate":true}, function(windows) {
    chrome.tabs.getSelected(null,function(tab) {
      var url = "http://tbertelsen.dk/castdr/?url=";
      var drUrl = tab.url;    
      var tablink = encodeURIComponent(drUrl);
      chrome.tabs.create({"url":url +tablink, "selected":true});
    });

  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  createTab();
});
