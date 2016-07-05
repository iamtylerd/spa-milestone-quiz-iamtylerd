var activeEvents = (function () {
			var focusDiv = document.getElementsByClassName("carCard");
			var textInput = document.getElementById("inputText");
			var buttonInput = document.getElementById("buttonText");
			var focusEl;	
			var lastClickedEl;
			var defaultBackground = "white";	

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
			},
			listenerForChange: function () {
				for (let i = 0; i < focusDiv.length; i++) {
					focusDiv[i].addEventListener("click", function () {
							let color = "tomato";
							if (lastClickedEl) {
								lastClickedEl.classList.remove("borderCard");
								lastClickedEl.style.background = defaultBackground;
							}

							lastClickedEl = focusDiv[i];
							console.log("lastClickedEl", lastClickedEl);
							augments.borderBgChange(focusDiv[i], color);
						});
				}
			}
	}
	
}());



// addEventListener("click", function () {
// 					this.style.borderColor = "yellow";