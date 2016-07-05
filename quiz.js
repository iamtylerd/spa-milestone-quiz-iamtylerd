var carLot = (function () {
	var preCars = [];
	var carRow = document.getElementById("rowForCars");

	return {
	
		loadInventory: function (callback) {
			var carLoader = new XMLHttpRequest();

			carLoader.addEventListener("load", function () {
				var allCarColors = [];
				var data = JSON.parse(this.responseText);
				var listOfCars = data.cars;
				for (let i = 0; i < listOfCars.length; i++) {
		          var currentCar = {
		            "car": listOfCars[i]
		          };
		          var carProperties = {
		          	"make": currentCar.car.make,
		          	"model": currentCar.car.model,
		          	"year": currentCar.car.year,
		          	"price": currentCar.car.price,
		          	"color": currentCar.car.color,
		          	"purchased": currentCar.car.purchased,
		          	"description": currentCar.car.description
		          }

		          allCarColors.push(carProperties.color)
	           	  preCars.push(carProperties)

		          	var newCol = document.createElement("div"); 
		          	newCol.className += "col-sm-4 carCard";
	           		for (var property in carProperties) {
						var para = document.createElement('p');
						para.className = `${property}`
			          	para.appendChild(document.createTextNode(`${property}: ${carProperties[property]}`));
			          	newCol.appendChild(para);
	           			
	           		}
		          	carRow.appendChild(newCol);
		          }

		          
				augments.border(allCarColors);
				activeEvents.focus();
				activeEvents.listenerForChange();
				
			});
			carLoader.open("GET", "inventory.json");
			carLoader.send();
		},
		getInventory: function () {
			return preCars;
		}
	};
})();

carLot.loadInventory();