$(document).ready(function() {
    var myFirebaseRef = new Firebase("https://devfest-newsletter.firebaseio.com/");
    var form = $("#mc-embedded-subscribe-form");

  form.on('submit', function(event) {
    var email = $("#mce-EMAIL").val();
    if (email) {
      myFirebaseRef.push({email: email});
      $(form).html('Obrigado, em breve entraremos em contato!');
    }
    event.preventDefault();
  });    
});


