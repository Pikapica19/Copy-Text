const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", copyText);

function copyText(e) {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 99999);
  document.execCommand("copy");

  btn.textContent = "Copied!!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);

}