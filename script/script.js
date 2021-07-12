window.onload = function () {
  const $body = document.body;
  const $preloader = $body.querySelector('.preloader');
  function afterTransition() {
    $body.classList.add('loaded');
    $body.classList.remove('loaded_hiding');
    $preloader.removeEventListener('transitionend', afterTransition);
  }
  $body.classList.add('loaded_hiding');
  $preloader.addEventListener('transitionend', afterTransition);
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});


$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Show") {
      $("#toggle").text("Hide");
      $("#text").slideDown();
    } else {
      $("#toggle").text("Show");
      $("#text").slideUp();
    }
  });
});


