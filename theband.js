let nav = document.querySelector('#nav');

document.querySelector('#btn').onclick = () => {
    nav.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('.searchbutton').onclick = () =>{
    searchForm.classList.toggle('active');
    nav.classList.remove('active');
}