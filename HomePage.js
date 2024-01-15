var display = 1;
const ham = document.querySelector('.hamburger1');
function hideshow(){
    if(display == 1) {
        ham.style.display = 'flex';
        display = 0;
    }
    else {
        ham.style.display = 'none';
        display = 1;
    }
}