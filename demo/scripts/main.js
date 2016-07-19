"use strict";
function calculate(){
	var doc = document;
	var amount = doc.getElementById("amount"),
		apr = doc.getElementById("apr"),
		years = doc.getElementById("years"),
		zipcode = doc.getElementById("zipcode"),
		payment = doc.getElementById("payment"),
		total = doc.getElementById("total"),
		totalinterest = doc.getElementById("totalinterest");



		var principal = parseFloat(amount.value),
			interest = parseFloat(apr.value) /100 /12,
			payments = parseFloat(years.value) *12;

		var x = Math.pow(1+interest, payments),
			monthly = (principal * x * interest) / (x - 1);
		if(isFinite(monthly)){
			payment.innerHTML = monthly.toFixed(2);
			total.innerHTML = (monthly * payments).toFixed(2);
			totalinterest.innerHTML = ((monthly * payments) -principal).toFixed(2);
			save(amount.value,apr.value,years.value,zipcode.value);
		}
};