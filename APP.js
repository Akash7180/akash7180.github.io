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

downloadBtn.addEventListener("click", () => {
    const fileUrl = "https://github.com/Akash7180/akash7180.github.io/blob/master/Akash-Thiruveedula-Resume%20(2).pdf"; // Replace with the actual URL of your PDF
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "Akash-Thiruveedula-Resume.pdf"; // The name you want the downloaded file to have
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});


});
