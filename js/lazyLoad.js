window.addEventListener('load' , lazyLoad);
window.addEventListener('scroll' , lazyLoad);

let activeClass;
let lazyItem = document.querySelectorAll('.lazy-load');//get all lazyload elem 

function lazyLoad() {

	//every elem with lazy-load class can do it
	for (let item of lazyItem) {
		activeClass = item.dataset.lazyClass;

		if (item.classList.contains('lazy-load_onload')) {
			item.classList.add(activeClass);
			item.classList.remove('lazy-load');

			continue
		};
        	
		//if current height = elem height
		if (window.pageYOffset > item.offsetTop - 600) {
			item.classList.add(activeClass);
			item.classList.remove('lazy-load');
		}
	};


	if (lazyItem.length == 0) {
		window.removeEventListener('scroll' , lazyLoad);
	}
};

