var t = new Date()
thours = t.getHours()
var ampm = t.getHours() >= 12 ? "PM" : "AM";
var tcom = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " " + ampm
document.querySelector("#headtimer").innerHTML = tcom;
go()
setInterval(go, 6000)

function go(){
	var itext = document.querySelector(".image-text");
	itext.innerHTML = timeOfDay(thours);
	// alert("g");
}


function timeOfDay(hrs){
	var t = ""
	if(hrs >= 3 & hrs <12) {
		t = "GOOD MORNING";
	} else if(hrs>=12 & hrs < 16) {
		t = "GOOD AFTERNOON";
	} else if(hrs >= 16 & hrs <22) {
		t = "GOOD EVENING";
	} else {
		t = "GOOD NIGHT";
	}
	return t;
}

function runit(){
	var i = document.querySelector("#mimage")
	var b = document.querySelector("#butt")

	var fname = "file:///C:/Users/neelo/Dropbox/Documents/Alok/Business/DataMining_Science/RealLifeProjects/projectTBD/projectTestJs/lolcat/LOL-Cat/pic01.jpg"

	if(i.src === fname){
		i.src = "pic12.jpg";

	} else {
		i.src = "pic01.jpg";

	}
	// alert(b.style.backgroundColor)

	if(b.style.backgroundColor == "red"){
		b.style.backgroundColor = "blue";
		b.innerHTML = "PARTY TIME"
		// alert("1")
	} else {
		b.style.backgroundColor = "red";
		b.innerHTML = "PARTY OVER"
		// alert("2")
	}
}