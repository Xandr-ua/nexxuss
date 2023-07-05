const video = document.querySelector('.top__video');
const play = document.querySelector('.top__video-play');
const pause = document.querySelector('.top__video-stop');

if (video) {
  play.onclick = function () {
    video.play();
    play.style.display = 'none';
    pause.style.display = 'block';
  };

  pause.onclick = function () {
    video.pause();
    play.style.display = 'block';
    pause.style.display = 'none';
  };
}

const titles = document.querySelectorAll('.help__subtitle');
const contents = document.querySelectorAll('.help__text');

titles.forEach((item) =>
  item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
      activeContent.classList.remove('active');
      item.classList.remove('active');
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach((element) => {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });

      titles.forEach((element) => element.classList.remove('active'));

      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  }),
);

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}