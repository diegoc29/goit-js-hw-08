
function saveToLocalStorage(data) {
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
  }

  function loadFromLocalStorage() {
    const storedData = localStorage.getItem("feedback-form-state");
    return storedData ? JSON.parse(storedData) : { email: "", message: "" };
  }
  function updateFormFields(data) {
    document.querySelector('input[name="email"]').value = data.email;
    document.querySelector('textarea[name="message"]').value = data.message;
  }

  function clearStorageAndForm() {
    localStorage.removeItem("feedback-form-state");
    updateFormFields({ email: "", message: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    const formData = { email, message };
  
    console.log(formData); 
  
    clearStorageAndForm();
  }
  
  
  const form = document.querySelector(".feedback-form");
  form.addEventListener(
    "input",
    _.throttle(() => {
      const email = form.elements.email.value;
      const message = form.elements.message.value;
      const formData = { email, message };
      saveToLocalStorage(formData);
    }, 500)
  );
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const storedData = loadFromLocalStorage();
    updateFormFields(storedData);
  
    form.addEventListener("submit", handleSubmit);
  });