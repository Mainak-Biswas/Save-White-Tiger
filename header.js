document.getElementById("main").onclick = function() {hidehdr(); hideshr(); hidesrc(); hideflw();}
function hidehdr()
{
	var x = document.getElementById("nav");
	if(x.checked === true)
		{x.checked = false;}
}
