function sayhello(){

	var name=document.getElementById("name").value;
	var message="<h4>Hey "+name+" !<p> <p> Here is something for you</p></h4>";
	 document.getElementById("title").innerHTML = "Welcome to my website "+ name;
	document.getElementById("con").innerHTML=message;	
	

	document.getElementById("count").style.display="block";
};

function changeImage(){
	var image=document.getElementById("myImage");
	image.src = "on.gif";

	document.getElementById("hide").style.display="block";

	
  
}