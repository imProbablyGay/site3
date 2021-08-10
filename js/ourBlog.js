if (window.innerWidth >= 576) {
    let clickElem = document.querySelectorAll('.our-blog__card');
    let rightElem;
    let leftElem;
    // output
    let leftOut = document.querySelector('.our-blog__card_left');
    let rightOut = document.querySelector('.our-blog__cards-right');

    clickElem.forEach(el => {
        el.onclick = () => {
            if (el.classList.contains('our-blog__card_active')) {
                return;
            }

            // get elems
            leftElem = document.querySelector('.our-blog__card_active');
            rightElem = el;

            leftElem.querySelector('img').style.display = 'none';
            rightElem.querySelector('img').style.display = 'block';
            leftElem.classList.remove('our-blog__card_active');
            rightElem.classList.add('our-blog__card_active');

            // show em
            leftOut.appendChild(rightElem);
            rightOut.appendChild(leftElem)

        };
    });
}