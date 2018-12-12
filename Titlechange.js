/*
	TITLEBUTTON
	This code will, on load, assign code to a button with the id"button".
	It will then assign a listner to that button that on click,takes the active tab's Title and changes it to "This is the new page title"
	*/
document.getElementById('button').addEventListener('click', function() {
	
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
		//chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
		chrome.tabs.executeScript(activeTabs[0].id, { code:'document.title = "This is the new  page title.";'});
    });
});
/*
	FONTBUTTON
	This code will, on load, assign code to a button with the id"fontbutton".
	It will then assign a listner to that button that on click, takes the popout's content's form's fontsize and fonttype
	value, and then assigns the style of all a active document's text to the set values

*/
/*
document.getElementById('fontbutton').addEventListener('click', function() {
	
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
		var fonttype=document.values.fonttype.value;
		var fontsize=document.values.fontsize.value;
		chrome.tabs.executeScript(activeTabs[0].id, { code:"var fontype1 = " + fontttype + "; var fontsize1 = " + fontsize},function(){
			document.*.style.fontSize=fontype1 +"px;";
			document.*.style.fontFamily=fontype1;
			
		});
    });s
});
*/
var fonttypeo=document.getElementById("fonttype");
var fontTypeDoubleO=fonttypeo.options[fonttypeo.selectedIndex].text;
document.getElementById('fontbutton').addEventListener('click', function() {
	
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
		//chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
		chrome.tabs.executeScript(activeTabs[0].id, { code:'document.title=(string)fontTypeDoubleO;'});
    });
});