profile = document.getElementById('profile');
interests = document.getElementById('interests');
projects = document.getElementById('projects');
skills = document.getElementById('skills');
tech = document.getElementById('tech');
certs = document.getElementById('certs');
content = document.getElementById('content');
overlay = document.getElementById('overlay');
close = document.getElementById('close');

console.log(data);

profile.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = data.profile.replace("\n", "<br>").replace("\t", "&emsp;");
});

interests.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
});

projects.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
});

skills.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
});

tech.addEventListener('click', function() {
	overlay.style.top = "5vh";
	content.innerHTML = "Hello!";
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