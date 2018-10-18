$("#button-email").click(function(){
	var text = document.getElementById("yourEmail");
	if (text.value === "") {
		$("#hiddenText").html("testo vuoto").css("display", "block").css("color", "red").css("font-size", "59px");
	} else {
		$("#hiddenText").html("bravo").css("display", "block").css("color", "green").css("font-size", "59px");
	}
});