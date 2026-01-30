// frontend/js/utils.js
export function showLoader(show = true) {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = show ? "block" : "none";
}

export function showAlert(msg, type = "success") {
  alert(msg); 
}
