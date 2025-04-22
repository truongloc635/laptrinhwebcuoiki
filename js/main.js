/*Main java */
function searchclick()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var x=document.getElementById("main-header");
		x.style.display="none";
		var y=document.getElementById("header-mid-min");
		y.style.display="flex";
		
	}
}	
function hidesearchclick()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var y=document.getElementById("header-mid-min");
		y.style.display="none";
		var x=document.getElementById("main-header");
		x.style.display="flex";		
	}
}
function barmenu()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var y=document.getElementById("header-bottom");
		y.style.display="block";	
		var huy=document.getElementById("huy");
		huy.style.display="block";	
	}
}	
function hidebarmenu()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var y=document.getElementById("header-bottom");
		y.style.display="none";	
		var huy=document.getElementById("huy");
		huy.style.display="none";	
	}	
}
window.addEventListener('scroll',function(){
	var x=document.getElementById("fixed");
	if(window.scrollY<150)	
	{
		x.style.position="static";
	}
	else
	{
		x.style.position="fixed";
		x.style.bottom="50px";
	    x.style.right="0px";
	}	
});	