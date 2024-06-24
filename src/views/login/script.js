const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
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
      console.log('Usuario logado com sucesso:');
      showSuccessToast('Usuario logado com sucesso');

      localStorage.setItem('token', data.token);
      window.location.href = '../home';
    });
});
