$(document).ready(function() {
   
    $('#loginForm').submit(function(event) {
      event.preventDefault(); 
  
      
      var username = $('#username').val();
      var password = $('#password').val();
  
      if (username === 'JOAO' && password === 'Joao0102') {
       
        window.location.href = 'home.html';
      } else {
        
        alert('Credenciais inválidas. Tente novamente.');
      }
    });
  });