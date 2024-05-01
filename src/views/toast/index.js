/**
 * @param {string} message
 */
function showErrorToast(message) {
  showToast(message, 'errorToast');
}

/**
 * @param {string} message
 */
function showSuccessToast(message) {
  showToast(message, 'successToast');
}

/**
 * @param {string} message
 * @param {'errorToast' | 'successToast'} type
 **/
function showToast(message, type) {
  const toastId = `toast-${Date.now()}-${Math.random()}`;

  const toastComponent = document.createElement('div');
  toastComponent.classList.add('toastContainer', type);
  toastComponent.id = toastId;

  const toastMessage = document.createElement('a');
  toastMessage.innerHTML = message;

  toastComponent.appendChild(toastMessage);

  const container = document.getElementById('container');
  container.appendChild(toastComponent);

  setTimeout(() => {
    const toast = document.getElementById(toastId);
    toast.remove();
  }, 6000);
}
