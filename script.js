(() => {
    'use strict'
    
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  function invalidEmails (a, b) {

    a = a.trim();
    b = b.trim();
    if (!a || !b) return "Missing email"; 
    
 
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const enterEmail = re.test(a);
    const confirmEmail = a === b;
    
    if      (!enterEmail) return "Invalid email";
    else if (!confirmEmail) return "Emails do not match";
  }
  
  function formSubmitHandler (evt) {
    const is_emails_invalid = invalidEmails(this.enterEmail.value, this.confirmEmail.value);
    if (is_emails_invalid) {
      evt.preventDefault();      
      alert(is_emails_invalid);  
    }
  }
  
  document.querySelector("#form").addEventListener("submit", formSubmitHandler);