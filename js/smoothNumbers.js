var setValue = function(elem, value, shift, speed){
    var interval = false; 
    interval = setInterval(function(){
        if (elem.innerHTML*1+shift >= value) {
            elem.innerHTML = value;
            clearInterval(interval);
        } else {
            elem.innerHTML = elem.innerHTML*1+shift;
        }
    }, speed);   
};
    

function start() {
	var result = document.getElementById("smooth-item-1");
	setValue(result, 000, 1, 458);

	result = document.getElementById("smooth-item-2");
	setValue(result, 346, 1, 796);

	result = document.getElementById("smooth-item-3");
	setValue(result, 676, 1, 1000);

	result = document.getElementById("smooth-item-4");
	setValue(result, 174, 1, 500);
}

window.addEventListener('scroll' , (e) => {
	let a = Math.abs(document.querySelector('body').getBoundingClientRect().top - window.innerHeight + 100);
	console.log(a);
	let elem = document.querySelector('.smooth-numbers').offsetTop;
	console.log(elem);

	if (a >= elem) {
		start();
	}
});