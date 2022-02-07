// get element 
const header = document.querySelectorAll(`.header`);

header.forEach(item => {

    item.addEventListener(`click`, function () {
        
        header.forEach(item => {
            item.nextElementSibling.classList.remove(`active`);
            item.lastElementChild.style.transform = `rotate(0deg)`;
        });
        item.nextElementSibling.classList.add(`active`);
        item.lastElementChild.style.transform = `rotate(90deg)`;
    })
});