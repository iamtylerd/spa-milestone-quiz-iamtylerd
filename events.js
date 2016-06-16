var activeEvents = (function () {
			var focusDiv = document.getElementsByClassName("carCard");
			var textInput = document.getElementById("inputText");
			var buttonInput = document.getElementById("buttonText");
			var focusEl;	

	return {
			focus: function () {
				for (var i = 0; i < focusDiv.length; i++) {
					focusDiv[i].addEventListener("click", function () {
						focusEl = this.getElementsByClassName("description")[0]
						textInput.value = "";
						textInput.focus();
						});
						textInput.addEventListener("keyup", function () {
							focusEl.innerText = textInput.value;
					})
				}
			}
	}
	
}());



// addEventListener("click", function () {
// 					this.style.borderColor = "yellow";