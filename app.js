// const button = document.querySelector('.but1');
// const navs = document.querySelector('#navbarNavAltMarkup');
// button.addEventListener('click', () => {
//     navs.classList.toggle('links');
// })

const butt = document.querySelector('#butt');
// search = document.querySelector('.searchButton');
// but = document.createElement('input');
// butt.addEventListener('click', () => {

//     search.classList.toggle('searchButtonActive');
//     search.classList.toggle('searchButton');
// })

// const but = document.createElement('input');
const below = document.querySelector('#searching')
butt.addEventListener('click', () => {
    below.innerHTML = '<input type="text" placeholder="Search"></input>';
    below.style.marginLeft = '25px';
})

// window.addEventListener('resize', function() {
    // if (window.pageYOffset > 70) {
    //   navs.style.position = "fixed";
    //   navs.style.top = "0";
    // } else {
    //     navs.style.position = "";
    //     navs.style.top = "";
    // }

    // navs.style.position = 'fixed';
    // navs.style.top = '0';
    // navs.style.backgroundColor = 'black';
    // navs.style.width = '100vw'
    // // navs.style.height = '100px';
    // navs.style.marginTop = '0';
    // navs.style.paddingTop = '25px';

    // navs.style.display = 'none';
// })

// const button = document.querySelector('#butt');
// button.addEventListener('click', () => {
//     alert('You clicked me nigga!')