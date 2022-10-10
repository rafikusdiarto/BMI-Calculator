var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "masukkan angka yang valid";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " +"<b>"+ bmi + "</b>"+ " which means " + "you are <b>Underweight</b>";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + "<b>" +bmi + "</b>" +" which means " + "You are <b>Normal</b>";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " +"<b>"+ bmi + "</b>"+" which means " + "You are <b>Overweight</b>";
	} else if (bmi >= 30) {
		measure = "Your BMI is " +"<b>"+ bmi + "</b>" + " which means " + "You are <b>Obese</b>";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = alert(error);
	} else if (height === 0){
		document.getElementById("results").innerHTML =  alert(error);
	}
	 else {
		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}