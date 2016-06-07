// This JS file uses AJAX to retrieve the contents of a file, and then sends the data to a "dosomething" function in your own code.
// You need to define a function in the calling page called dosomething(data) { }
// Whatever is in that function will be done with the data retrieved from this file.

function getFileAJAX(file) {
	// Use AJAX to get the file
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			var data = xmlhttp.responseText;
			doSomething(data);
		}
	}
	xmlhttp.open("GET",file,true);
	xmlhttp.send();
}