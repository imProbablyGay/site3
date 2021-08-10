let toggleItems = document.querySelectorAll('.our-team__slider-toggler');
let items = document.querySelectorAll('.our-team__slider-item');
let itemsBefore = document.querySelectorAll('.our-team__slider-figure');

for (let key in toggleItems) {
    toggleItems[key].onclick = () => {

        // if screen <768px
        toggleItems.forEach(el3 => {
            el3.classList.remove('our-team__slider-item_active-tablet')
        });
        toggleItems[key].classList.add('our-team__slider-item_active-tablet');

        // remove active class
        items.forEach(el => {
            el.classList.remove('our-team__slider_active');
        });

        itemsBefore.forEach(el2 => {
            el2.classList.remove('our-team__slider_active')
        })

        itemsBefore[key].classList.add('our-team__slider_active')
        items[key].classList.add('our-team__slider_active');
    };
};