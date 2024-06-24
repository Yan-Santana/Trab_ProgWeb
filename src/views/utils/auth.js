const token = localStorage.getItem('token');
if (!token) {
  window.location.href = '../login';
}

fetch('http://localhost:3000/api/users/token-is-valid', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).catch((error) => {
  window.location.href = '../login';
});
