profile = document.getElementById('profile');
interests = document.getElementById('interests');
projects = document.getElementById('projects');
skills = document.getElementById('skills');
tech = document.getElementById('tech');
certs = document.getElementById('certs');
content = document.getElementById('content');
overlay = document.getElementById('overlay');
close = document.getElementById('close');

contentDisplayed = 'none';

profile.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = data.profile.replace(/\n/g, "<br>").replace(/\t/g, "&emsp;");
	contentDisplayed = 'profile';
});

interests.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "";
	for(i in data.interests) {
		interest = data.interests[i];
		console.log(interest);
		content.innerHTML += '<div class="listItem"><div class="listBG"></div>'+interest+'<div>';
	}
	contentDisplayed = 'interests';
	resizeElements();
});

projects.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
	contentDisplayed = 'projects'
});

skills.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
	contentDisplayed = 'skills'
});

tech.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
	contentDisplayed = 'tech';
});

certs.addEventListener('click', function() {
	overlay.style.top = "5vh";
	certsData = '<table class="table table-hover table-striped table-bordered">';
	certsData += '<col width="33%"><col width="33%"><col width="33%"';
	certsData += '<thead><tr><th>Certification</th><th>Authorizing Organization</th><th>Link</th></tr></thead><tbody>';
	for(cert in data.certs) {
		console.log(data.certs[cert]);
		certsData += '<tr><td>'+data.certs[cert].certification+'</td><td>'+data.certs[cert].auth+'</td><td><a href="'+data.certs[cert].link+'" rel="noopener noreferrer" target="_blank">View <i class="material-icons">tab</i></a></td></tr>';
	}
	certsData += '</tbody></table>';
	content.innerHTML = certsData;
	contentDisplayed = 'certs';
});

close.addEventListener('click', function() {
	overlay.style.top = "100%";
	content.innerHTML = "";
});

document.addEventListener('keydown', function(evt) {
	evt = evt || window.event;
	if(evt.keyCode == 27) {
		overlay.style.top = "100%";
		content.innerHTML = "";
	}
});

resizeElements = function() {
	vh = window.innerHeight;
	vw = window.innerWidth;
	if(vh > vw) {
		if(contentDisplayed == 'interests') {
			listItems = document.querySelectorAll(".listItem");
			listItems.forEach((listItem) => {
				listItem.style.width = "28vw";
			});
			listItemsBefore = document.querySelectorAll(".listBG");
			listItemsBefore.forEach((i) => {
				i.style.width = "26vw";
			});
		}
	} else {
		if(contentDisplayed == 'interests') {
			listItems = document.querySelectorAll(".listItem");
			listItems.forEach((listItem) => {
				listItem.style.width = "21vw";
			});
			listItemsBefore = document.querySelectorAll(".listBG");
			listItemsBefore.forEach((i) => {
				i.style.width = "19vw";
			});
		}
	}
}

window.onresize = resizeElements;