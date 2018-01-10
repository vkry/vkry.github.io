// Get the modal
const modal = document.getElementById('myModal');


var rules_hover = document.getElementById('rules_hover');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
    }
}

// When the user clicks the button, open the modal
function openModal() {
    modal.style.visibility = "visible";
}