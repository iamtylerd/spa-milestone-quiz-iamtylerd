var augments = (function () {
	var borderAdd = document.getElementsByClassName("carCard");

	return {
		border: function (datColor) {
			
			for (var i = 0; i < datColor.length; i++) {
				borderAdd[i].style.borderColor = datColor[i];
				
				}
			}
		}
})();