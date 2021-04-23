const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

function getTime(noTransition){
  let d = new Date();
  let h = (d.getHours() / 2);
  let m = d.getMinutes();

  if (!noTransition) {
    if (h === 0) {
      hour.classList.remove('transition')
    } else {
      hour.classList.add('transition')
    }

    if (m === 0) {
      minute.classList.remove('transition')
    } else {
      minute.classList.add('transition')
    }
  }

  hour.style.transform = 'rotate(' + (h * 30) + 'deg)';
  minute.style.transform = 'rotate(' + (m * 6) + 'deg)';
}

window.addEventListener('DOMContentLoaded', (event) => {
  for(i=0;i<275;i++){
    hour.appendChild(document.createElement('li'))
    minute.appendChild(document.createElement('li'))
  }

  getTime(true);
  setInterval(getTime, 100);
});
