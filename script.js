// シンプルな送信完了アラート
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("お問い合わせありがとうございました！");
});


const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});