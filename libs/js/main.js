function btn1() {
	document.getElementById('results1').className = 'visible'
	document.getElementById('results2').className = 'hidden'
	document.getElementById('results3').className = 'hidden'
}
function btn2() {
	document.getElementById('results2').className = 'visible'
	document.getElementById('results1').className = 'hidden'
	document.getElementById('results3').className = 'hidden'
}
function btn3() {
	document.getElementById('results3').className = 'visible'
	document.getElementById('results1').className = 'hidden'
	document.getElementById('results2').className = 'hidden'
}