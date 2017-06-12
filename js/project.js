var ruPaulImage = '<img src="https://media.giphy.com/media/xTiTnCf8IJvjldRaxi/giphy.gif">';


function calculateFtoC() {
	var startingF = document.getElementById("inputFtoC").value;
	startingF = (startingF - 32) * 5/9;
	var answerFtoC = startingF + "&deg;C"
	document.getElementById("solutionFtoC").innerHTML = answerFtoC;

	if (true) {
		document.getElementById("complete").innerHTML = ruPaulImage;
	}
}

function calculateCtoF () {
	var startingC = document.getElementById("inputCtoF").value;
	startingC = (startingC * 9/5) + 32;
	var answerCtoF = startingC + "&deg;F"
	document.getElementById("solutionCtoF").innerHTML = answerCtoF;

	if (true) {
		document.getElementById("complete").innerHTML = ruPaulImage;
	}
}

document.getElementById("convertFtoC").onclick = calculateFtoC;
document.getElementById("convertCtoF").onclick = calculateCtoF;