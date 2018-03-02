var output;

function CreateDebt(){
 var Date1 = date();
 alert(Date1);
 var Name = document.getElementById("First_Name");
 var EndebtedTo = document.getElementById("Endebted1");
 var Debt_Amount = document.getElementById("Debt_Amount");
 var Interest_Rate = document.getElementById("Interest_Rate");
 var Interest_Period = document.getElementById("Interest_Period");
}

function date(){
	var d = new Date();

	return(d.getYear()*365 + d.getDate());

}