


var fonttypeo=document.getElementById("fonttype");
var fontTypeDoubleO= fonttypeo.options[fonttypeo.selectedIndex].text;
var fontsizeo=document.getElementById("fontsize");
var fontSizeDoubleO= fontsizeo.options[fontsizeo.selectedIndex].value;
	/*
	GETVALUES
	This function will initalize variables to their most recent values, as the begining of this code auto-runs with the 
	selected values at the time, not once they are required

fonts
	*/
function getValues(){
	fonttypeo=document.getElementById("fonttype");
	fontTypeDoubleO= fonttypeo.options[fonttypeo.selectedIndex].value;
	fontsizeo=document.getElementById("fontsize");
	fontSizeDoubleO= fontsizeo.options[fontsizeo.selectedIndex].value;
	
}
	/*
	FONTBUTTON
	This code will, on load, assign code to a button with the id"fontbutton".
	It will then assign a listner to that button that on click, takes the popout's content's form's fontsize and fonttype
	value, and then assigns the style of all a active document's text to the set values

*/
document.getElementById('fontbutton').addEventListener('click', function() {
	getValues();
	chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
		chrome.tabs.executeScript(activeTabs[0].id, {
			code: 'var textchange= ['+ JSON.stringify(fontTypeDoubleO)+","+JSON.stringify(fontSizeDoubleO)+']'}, 
			function() {
				chrome.tabs.executeScript(activeTabs[0].id, {file: 'changetext.js'});
			});
	});
});


/*
	TITLEBUTTON
	This code will, on load, assign code to a button with the id"button".
	It will then assign a listner to that button that on click,takes the active tab's Title and changes it to "This is the new page title"
	*/
document.getElementById('button').addEventListener('click', function() {
	getValues();
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
		//chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
		chrome.tabs.executeScript(activeTabs[0].id, { code:'document.title = "This is the new  page title.";'});
    });
});


