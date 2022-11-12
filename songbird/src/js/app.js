// CHANGE ACTIVE NAV BUTTONS
const navBtns = document.querySelectorAll('.menu-header__item');
const section = document.querySelectorAll('.page__section');

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener('click', () => {
    for (let i = 0; i < navBtns.length; i++) {
      navBtns[i].classList.remove('active');
      section[i].classList.remove('section-active');
      section[i + 1].classList.remove('section-active');
    }
    if (i === 2) {
      navBtns[i].classList.add('active');
      section[i + 1].classList.add('section-active');
      // window.scrollTo(0, 0);
    } else {
      navBtns[i].classList.add('active');
      section[i].classList.add('section-active');
      // window.scrollTo(0, 0);
    }
  });
}

export const galleryApp = () => {
  const audio = new Audio();
  let isPlay = false;
  audio.volume = 0.5;
  let currentSound = 0;
  let currentLevelVolume = audio.volume;

  const playBtn = document.querySelectorAll('.play-birds');
  const playAudio = document.querySelectorAll('.birds__audio');
  const progressBarCurrent = document.querySelectorAll('.progress__current');
  const progressDuration = document.querySelectorAll('.progress__duration');
  const timeTrack = document.querySelectorAll('.progress__track');
  const mute = document.querySelector('.birds-volume__mute');
  const volumeLevel = document.querySelector('.birds-volume__level');

  let massiv = new Array(playBtn.length).fill(0);

  const playTrack = () => {
    if (!isPlay) {
      audio.play();
      isPlay = true;
      playBtn[currentSound].classList.add('pause');
    } else {
      audio.pause();
      isPlay = false;
      playBtn[currentSound].classList.remove('pause');
    }

    progressDuration[currentSound].addEventListener('click', (value) => {
      const progressWidth = window.getComputedStyle(progressDuration[currentSound]).width;
      const duration = (value.offsetX / parseInt(progressWidth)) * audio.duration;
      audio.currentTime = duration;
    });
  };

  setInterval(() => {
    if (progressBarCurrent[currentSound].style.width === '100%') {
      isPlay = false;
      playBtn[currentSound].classList.remove('pause');
      progressBarCurrent[currentSound].style.width = '0%';
      audio.currentTime = 0;
    }
    if (isPlay) {
      console.log(audio.currentTime);
      const curentDuration = audio.duration;

      let audioDuration;

      if (isNaN(audio.duration)) {
        audioDuration = '00:00';
      } else {
        audioDuration = getTime(curentDuration);
      }

      let positionProgress = Math.round((audio.currentTime / curentDuration) * 100);
      progressBarCurrent[currentSound].style.width = `${positionProgress}%`;
      timeTrack[currentSound].innerHTML = `${getTime(audio.currentTime)} / ${audioDuration}`;
      massiv[currentSound] = audio.currentTime;
    }
  }, 500);

  for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener('click', () => {
      for (let i = 0; i < playBtn.length; i++) {
        playBtn[i].classList.remove('pause');
      }
      currentSound = i;
      audio.src = playAudio[currentSound].src;
      audio.currentTime = massiv[currentSound];
      playTrack();
    });
  }

  const getTime = (time) => {
    const newTime = Math.round(time);
    let sec = (newTime % 60).toString().padStart(2, 0);
    let min = Math.floor(newTime / 60)
      .toString()
      .padStart(2, 0);
    let hours = Math.floor(min / 60)
      .toString()
      .padStart(2, 0);

    return hours !== '00' ? `${hours}:${min}:${sec}` : `${min}:${sec}`;
  };

  mute.addEventListener('click', () => {
    if (audio.volume === 0) {
      audio.volume = currentLevelVolume;
      mute.classList.remove('player-volume__mute');
      mute.classList.add('player-volume__unmute');
      volumeLevel.value = currentLevelVolume * 100;
    } else {
      audio.volume = 0;
      mute.classList.add('player-volume__mute');
      mute.classList.remove('player-volume__unmute');
      volumeLevel.value = 0;
    }
  });

  volumeLevel.addEventListener('change', () => {
    if (volumeLevel.value > 0) {
      mute.classList.remove('player-volume__mute');
      mute.classList.add('player-volume__unmute');
    } else {
      mute.classList.add('player-volume__mute');
      mute.classList.remove('player-volume__unmute');
    }
    audio.volume = volumeLevel.value / 100;
    currentLevelVolume = volumeLevel.value / 100;
  });
};

galleryApp();
