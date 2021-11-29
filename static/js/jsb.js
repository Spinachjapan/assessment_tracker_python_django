const confirm_dialog = (text, send=false, add_or_edit=null) =>
{

	if (send == true)
	{

	const title = document.getElementById(add_or_edit + "_title").value


	if (!title.trim())
	{
		alert("Please input title.")
		return false
	}

	
	const year = document.getElementById(add_or_edit + "_year").value

	if (year.trim().length != 4 || !String(year).match(/^\d+$/))
	{
		alert("Please input year correctly.")
		return false
	}


	

	}






	var confirm_post = confirm(text)

	if (confirm_post == false)
	{
	  return false;
	}





}