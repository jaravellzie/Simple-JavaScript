<!doctype html>
<html>
<head>
	<title>Responsive Design</title>
	<script type="text/javascript" language="javascript" src="index-script-1.js"></script>
</head>
<body>

	<form name="formOne">
		<input type="text" id="txtName" placeholder="Enter your name "/>
		<input type="button" value="click" onclick="hello()"/>
		<input type="button" value="Say Hi!" onclick="hi()"/>
		
		<br><br>
		<input type="text" id="txtNum1" placeholder="Enter number One"/><br>
		<input type="text" id="txtNum2" placeholder="Enter number Two"/><br>
		<input type="button" value="Add This two Boxes!" onclick="compute()"/>

		<br><br>
		<input type="text" id="txtNum3" placeholder="Enter number One"/><br>
		<input type="text" id="txtNum4" placeholder="Enter number Two"/><br>
		<input type="button" value="Add This two Boxes!" onclick="compare()"/>
		<br><br>
		<input type="text" id="toDisableTxt"/>
		<input type="checkbox" id="disableCheckBox" onclick="disable()">Enable / Disable
		<br>
		<input type="checkbox" id="StatusCheck" onclick="statusCheck()">Checked / Un-Checked
		<br>

		<select id="colors">
			<option>Red</option>
			<option>Green</option>
			<option>Blue</option>
		</select>
		<input type="button" value="Selected" onclick="selectedColors()"/>

	</form>

</body>
</html>