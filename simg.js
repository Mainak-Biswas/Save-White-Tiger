
window.onscroll = function() {myScroll()};

function myScroll()
{
 	document.getElementById("myP").style.top = (-0.3*window.pageYOffset)  +50+ "px";

  	if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55)
		{
			document.getElementById("srch").style.position = "fixed";
			document.getElementById("flw").style.position = "fixed";
			document.getElementById("shr").style.position = "fixed";
		}
	else
		{
			document.getElementById("srch").style.position = "";
			document.getElementById("flw").style.position = "";
			document.getElementById("shr").style.position = "";
		}
}

