var augments = (function () {
	var borderAdd = document.getElementsByClassName("carCard");
	var focusElChange;

	return {
		border: function (datColor) {
			
			for (var i = 0; i < datColor.length; i++) {
				borderAdd[i].style.borderColor = datColor[i];
				}
			},
		borderBgChange: function (x, y) {
			x.className += " borderCard";
			x.style.background = y;		
		}

	}
})();