$(document).ready(function() {
	console.log("ready");
	
	var errorStr = "Error";
	var ans = errorStr;
	
	// Handle numbers and braces
	$(".input-key").click(function () {
		if ($("#calculator-display").val() == ans) {
			// If the current answer is displayed and we have pressed an input key, clear the answer
			$("#calculator-display").val("");
		}
		// Add the input to the display
		$("#calculator-display").val($("#calculator-display").val() + $(this).val());
	});
	
	// Handle operators
	$(".operator").click(function () {
		if ($("#calculator-display").val() == errorStr) {
			// If the current display is the errorStr, clear it			
			$("#calculator-display").val("");
		}
		// Add the operator to the display
		$("#calculator-display").val($("#calculator-display").val() + $(this).val());
	});
	 
	 // Clear the input field when the clear key is pressed
	$("#clear-key").click(function () {
		//console.log("clicked clear");
		$("#calculator-display").val("");
	});
	
	// Calculate when the = key is pressed
	$("#equal-key").click(function () {
		try {
			$("#calculator-display").val(eval($("#calculator-display").val()));
			ans = eval($("#calculator-display").val());
		} catch(error) {
			$("#calculator-display").val(errorStr);
			ans = errorStr;
		}
	});
});

