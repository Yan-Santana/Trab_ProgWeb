document.getElementById('userRegistrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirmation = document.getElementById('passwordConfirmation').value;

  fetch('https://5c57-170-80-35-17.ngrok-free.app/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const { error } = await response.json();
        showErrorToast(error);
        throw new Error(error);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Usuario Cadastrado com sucesso:');
      showSuccessToast('Usuario Cadastrado com sucesso');
    });
});
