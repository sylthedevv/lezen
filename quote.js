// quotes, skidding my own code for ts

document.addEventListener('DOMContentLoaded', function () {
	function changeSub(num) {
		document.getElementById("quotes").innerText = tell[num];
	}

	var tell = [
		"pay attention during school",
		"im sylving it so good rn omggggggggggggggggg",
        "also check out latte",
        "also check out nightmarex",
        "also join discord.gg/unblock",
        "made by sylv!!",
        "yeah."
	];

	var howmany = tell.length;
	var randomIndex = Math.floor(Math.random() * howmany);

	document.getElementById("quotes").innerText = tell[randomIndex];

	function changeSplash(num) {
		var sub = "Set current splash to splash " + num + ", " + tell[num];
		document.getElementById("quotes").innerText = tell[num];
		return sub;
	}