function myFunction() {
  document.body.style.background = "#19191e";
  document.getElementById('navBar').style.background = "black";
  // document.getElementById('introduction').style.background = "gray";
}
function collapse(colName){
	var coll = document.getElementsByClassName("collapsible-"+colName);
	var i;
	for (i = 0; i < coll.length; i++) {
	    coll[i].classList.toggle("active-collapsible");
	    var content = coll[i].nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	}
}