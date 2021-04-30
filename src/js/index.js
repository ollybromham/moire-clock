const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

function getTime(noTransition){
  let d = new Date();
  let h = (d.getHours() % 12);
  let m = d.getMinutes();

  if (!noTransition) {
    hour.classList.add('transition')
    minute.classList.add('transition')
  }

  hour.style.transform = 'rotate(' + (h * 30) + 'deg)';
  minute.style.transform = 'rotate(' + (m * 6) + 'deg)';
}

window.addEventListener('DOMContentLoaded', () => {
  getTime(true);
  setInterval(getTime, 5000);
});
