let control = document.querySelectorAll('.testimonials__control');
let slide = document.querySelectorAll('.testimonials__slider-slide');

for (let key in control) {
    control[key].onclick = () => {
        if (control[key].classList.contains('testimonials__control_active')) {return false}
        control.forEach(el => {el.classList.remove('testimonials__control_active')})
        control[key].classList.add('testimonials__control_active')

        slide.forEach(el => {el.classList.remove('testimonials__slider-slide_active')})
        setTimeout(() => {
            slide[key].classList.add('testimonials__slider-slide_active')
        }, 300);
    }
}