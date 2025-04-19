/*Main java */
function searchclick()
{
	if (window.matchMedia("(max-width: 800px)").matches) 
	{
		var x=document.getElementById("main-header");
		x.style.display="none";
		var y=document.getElementById("header-mid-min");
		y.style.display="flex";
		
	}
}	
function hidesearchclick()
{
	if (window.matchMedia("(max-width: 800px)").matches) 
	{
		var y=document.getElementById("header-mid-min");
		y.style.display="none";
		var x=document.getElementById("main-header");
		x.style.display="flex";		
	}
}