const header = document.getElementById('header-container');
const body = document.querySelector('body');
const urgentDivs = document.getElementsByClassName('emergency-tasks');
const urgentHeadings = document.querySelectorAll('.emergency-tasks h3');

header.style.backgroundColor = 'rgb(0,176,105)';
body.style.backgroundColor = 'rgb(243,243,243)';

for (let index = 0; index < urgentDivs.length; index += 1) {
    urgentDivs[index].style.backgroundColor = 'rgb(255,159,132)'
 }

 for (let index = 0; index < urgentHeadings.length; index += 1) {
    urgentHeadings[index].style.backgroundColor = 'rgb(165,0,243)'
 }