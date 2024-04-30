const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  console.log("Email:", email);
  console.log("Senha:", password);
});
