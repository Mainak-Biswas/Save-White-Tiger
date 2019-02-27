
function shwshr()
{
	var x = document.getElementById("shr")
	if(x.style.top === "0px")
	{
		x.style.top = "-500px";
	}
	else
	{
		x.style.top = "0px";
  		document.getElementById("flw").style.top = "-500px";
  		document.getElementById("srch").style.top = "-500px";
	}
}

function hideshr()
{
	var x = document.getElementById("shr")
	if(x.style.top === "0px")
	{
		x.style.top = "-500px";
	}
}

