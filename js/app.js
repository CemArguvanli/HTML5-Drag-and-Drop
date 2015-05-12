
/**
*
* javaScript drag and drop
*
*/

window.addEventListener("load", setDrag, false);

function setDrag(){
	pic = document.getElementById("dexter");

	// Step 1 prevent default
	rightBox = document.getElementById("rightbox");
	rightBox.addEventListener("dragenter", cancel, false);
	rightBox.addEventListener("dragover", cancel, false);



	// Setup drag events
	rightBox.addEventListener("dragstart", startDrag, false);
	rightBox.addEventListener("drop", endDrag, false);
}

function startDrag(e){
	// Store the content
	var content = pic.innerHTML;
	e.dataTransfer.setData('text/html', content);
}

function endDrag(e){
	e.preventDefault();
	this.innerHTML = e.dataTransfer.getData('text/html');
}

function cancel(e){
	if (e.preventDefault) {
		e.preventDefault();
	}
	return false;
}


/**
*
* jQueryUI drag and drop
*
*/
$(document).ready(function() {
	$("#dexter").draggable();

	$(".box").droppable({
		drop: function(event, ui){
			$(this).css('border', '3px dotted red');
		}
	});
});