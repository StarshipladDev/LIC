/**
CHANGETEXT
Changetext is code that is runs after a varialbe initalzing line in 'Titlechange.js'.
Using those variables passed, 'changetext' will run as a continuation of the line.
the paramaneters passed are stored in the array 'textchange'.
currently the indexi are:
0--- Family string of font seelected in popout.html
1--- Font size text selected in popup.html

**/
document.title = "" +textchange[0] + " "+textchange[1];
var divs = document.getElementsByTagName("div");
var i=0;
while(i < divs.length){
	divs[i].style.fontFamily=("" + textchange[0]);
	divs[i].style.fontSize=("" + textchange[1]);
	i++;
}



