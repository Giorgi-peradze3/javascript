document.getElementById('loginForm').addEventListener('submit', function(event) {
  
  event.preventDefault();

  
  const emailValue = document.getElementById('userEmail').value.trim();
  const passwordValue = document.getElementById('userPassword').value;

  
  console.log("შეყვანილი ფოსტა:", emailValue);
  console.log("შეყვანილი პაროლი:", passwordValue);

 

  
  
});