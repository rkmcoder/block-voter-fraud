function remove_fraud() { 
	var arr = document.getElementsByClassName("css-1dbjc4n r-1g94qm0");
	for(e of arr){
		e.innerHTML = ""; 
	}
}

const targetNode = document.body;
 
const config = { attributes: false, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    remove_fraud();
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

