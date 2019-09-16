var name;
function hello(){
	name=document.getElementById("txtName").value;
	alert("Hello "+name);
}

function hi(){
	alert("Hi "+name);
}

function compute(){
	var sum,num1,num2;
	num1=parseInt(document.getElementById("txtNum1").value);
	num2=parseInt(document.getElementById("txtNum2").value);

	sum=num1+num2;

	alert(sum);
}

function compare(){
	var num3,num4;
	num3=parseInt(document.getElementById("txtNum3").value);
	num4=parseInt(document.getElementById("txtNum4").value);

	if(num3 > num4)
	{
		alert("Number 1 is greater than Number 2");
	}
	else if(num3 < num4)
	{
		alert("Number 1 is lesser than Number 2");
	}
	else if(num3 == num4)
	{
		alert("They are both equal");
	}
	else
	{
		alert("Not a number");
	}
}

function disable(){
	var disableCheckBox,toDisableTxt;

	toDisableTxt=document.getElementById("toDisableTxt");
	disableCheckBox=document.getElementById("disableCheckBox");

	if(disableCheckBox.checked==true)
	{
		toDisableTxt.disabled=true;
	}
	else
	{
		toDisableTxt.disabled=false;
	}
}

function statusCheck(){
	var status;
	status=document.getElementById("StatusCheck");

	if(status.checked==true){
		alert("Checkbox is Checked");
	}
	else{
		alert("Checkbox isn't checked");
	}

}

function selectedColors(){
	var colors;

	colors=document.getElementById("colors");

	if(colors.selectedIndex==0){
		alert("Color is Red");
	}
	else if(colors.selectedIndex==1){
		alert("Color is Green");
	}
	else if(colors.selectedIndex==2){
		alert("Color is Blue");
	}



}