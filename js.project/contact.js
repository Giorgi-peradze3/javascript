document.getElementById('contactForm').addEventListener('submit', function(event) {
 
  event.preventDefault(); 

  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusMsg = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  
  if (name === "" || email === "" || message === "") {
    statusMsg.className = "status-msg error";
    statusMsg.textContent = "გთხოვთ, შეავსოთ ყველა ველი!";
    return;
  }

  
  submitBtn.textContent = "იგზავნება...";
  submitBtn.disabled = true;

  setTimeout(() => {
    
    statusMsg.className = "status-msg success";
    statusMsg.textContent = `მადლობა ${name}, შეტყობინება წარმატებით გაიგზავნა!`;
    
    
    document.getElementById('contactForm').reset();
    
    
    submitBtn.textContent = "გაგზავნა";
    submitBtn.disabled = false;
  }, 1500); 
});