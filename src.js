

function shwsrc()
{
	var x = document.getElementById("srch")
	if(x.style.top === "0px")
	{
		x.style.top = "-500px";
	}
	else
	{
		x.style.top = "0px";
  		document.getElementById("src-box").focus();
  		document.getElementById("flw").style.top = "-500px";
  		document.getElementById("shr").style.top = "-500px";
	}
}

function hidesrc()
{
	var x = document.getElementById("srch")
	if(x.style.top === "0px")
	{
		x.style.top = "-500px";
	}
}

