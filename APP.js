const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const downloadBtn = document.getElementById("download-cv-btn");
downloadBtn.addEventListener("click", ()=>{
	const fileUrl ="https://drive.google.com/file/d/1LWj7DzLfVOhm3q-gW5Wf01KE5s8BJqgZ/view?usp=share_link";
	const downloadLink = document.createElement("a");
	downloadLink.href = fileUrl;
	downloadLink.download = "cv.pdf";
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);

});
