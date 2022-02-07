// get element 
const header = document.querySelectorAll(`.header`);

header.forEach(item => {

    item.addEventListener(`click`, function () {
        
        header.forEach(item => {
            if ( item != this ) {
                item.nextElementSibling.classList.remove(`active`);
                item.lastElementChild.classList.remove(`onclick`);
            }
        });
        item.nextElementSibling.classList.toggle(`active`);
        item.lastElementChild.classList.toggle(`onclick`);
    })
});