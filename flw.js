document.getElementById("flws").onclick = shwflw;

function shwflw()
{
	var x = document.getElementById("flw")
	if(x.style.top === "0px")
	{
		x.style.top = "-500px";
	}
	else
	{
		x.style.top = "0px";
  		document.getElementById("srch").style.top = "-500px";
  		document.getElementById("shr").style.top = "-500px";
	}
}

function hideflw()
{
	var x = document.getElementById("flw")
	if(x.style.top === "0px")
	{
		x.style.top = "-500px";
	}
}
