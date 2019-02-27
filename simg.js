
window.onscroll = function() {myScroll()};

function myScroll()
{
	var i;
	for (i = 0; i < 800; i++)
	{
  		if (document.body.scrollTop > 6*i || document.documentElement.scrollTop > 6*i)
  		{
    		document.getElementById("myP").style.top = (-2*i)  +50+ "px";
  		}
  	}

  	for (i = 0; i < 800; i++)
	{
  		if (document.body.scrollTop > 6*i || document.documentElement.scrollTop > 6*i)
  		{
    		document.getElementById("maintxt").style.backgroundPosition = '0px ' + (-2*i) + 'px';
  		}
  	}

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