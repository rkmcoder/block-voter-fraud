function remove_fraud() { 
	var a = document.getElementsByTagName("a");
	for(e of a){
		if(e.href.indexOf("/i/events/") > -1) {
			e.innerHTML = ""; 
		}
	}
}

const targetNode = document.body;
 
const config = { attributes: true, childList: true, subtree: true , characterData: true};

const callback = function(mutationsList, observer) {
    remove_fraud();
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);