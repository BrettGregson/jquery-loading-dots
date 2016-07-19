# jQuery Loading Dots

"Animated" jQuery loading dots. Works with centered text without changing the centered texts position as the dots appear.

![Alt text](http://i.imgur.com/CXv1R2y.gif "Loading")


Useage:

<pre>
var dots = $("#loading").dots({
	"speed"			: 50,
	"numberOfDots"	: 10,
	"loadingWord"	: "Loading",
	"dotCharacter"	: ".",
});
</pre>


Methods:

<pre>
dots.stopDots(); // stops the dots animation (clears the interval)
<pre>