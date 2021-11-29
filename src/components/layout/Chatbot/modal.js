// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function Answer(answer){
  answer_div = document.getElementById("answer-text");
  if(answer == 1){
    answer_div.innerHTML = "Juan B Justo 4287";
  }
  if(answer == 2){
    answer_div.innerHTML = "+telefono";
  }
  if(answer == 3){
    answer_div.innerHTML = "Para revisar los horarios de tu curso entrá a esta página: " + `<a href="">a</a>`;
  }
}

export default answer();