import birdsDataRu from '../assets/data/birdsRu.js';
import birdsDataEn from '../assets/data/birdsEn.js';

import successAudio from '../assets/audio/success.mp3';
import errorAudio from '../assets/audio/error.mp3';
import img from '../assets/img/secret-bird.jpg';
// import {} from '../assets/icons/favicon.ico';

let defaultLanguages = 'english';

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    defaultLanguages = localStorage.getItem('defaultLanguage');
  }
}

const secretAudio = document.querySelector('.secret__audio');
const quizAudio = document.querySelector('.quiz__audio');
const secretPlayBtn = document.querySelector('.secret__play');
const quizPlayBtn = document.querySelector('.quiz__play');
const secretProgressBarCurrent = document.querySelector('.secret-progress__current');
const quizProgressBarCurrent = document.querySelector('.quiz-progress__current');
const secretProgressDuration = document.querySelector('.secret-progress__duration');
const quizProgressDuration = document.querySelector('.quiz-progress__duration');
const secretTimeTrack = document.querySelector('.secret-progress__track');
const quizTimeTrack = document.querySelector('.quiz-progress__track');
const secretMute = document.querySelector('.secret-volume__mute');
const secretVolumeLevel = document.querySelector('.secret-volume__level');

const audio = new Audio();
const audioCard = new Audio();
let secretIsPlay = false;
let cardIsPlay = false;

audio.volume = 0.7;
audioCard.volume = 0.7;
let secretCurrentLevelVolume = audio.volume;

const audioCheck = (src) => {
  const checkAudio = new Audio(src);
  checkAudio.volume = 0.2;
  checkAudio.play();
};

const audioPlayer = () => {
  if (!secretIsPlay) {
    secretPlayBtn.classList.add('pause');

    audio.play();
    secretIsPlay = true;
  } else {
    secretPlayBtn.classList.remove('pause');
    audio.pause();
    secretIsPlay = false;
  }
};

const audioPlayerCard = () => {
  if (!cardIsPlay) {
    quizPlayBtn.classList.add('pause');

    audioCard.play();
    cardIsPlay = true;
  } else {
    quizPlayBtn.classList.remove('pause');
    audioCard.pause();
    cardIsPlay = false;
  }
};

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

const playTrack = () => {
  audioPlayer();
};

const playTrackCard = () => {
  audioPlayerCard();
};

secretPlayBtn.addEventListener('click', playTrack);

quizPlayBtn.addEventListener('click', playTrackCard);

setInterval(() => {
  const curentDuration = audio.duration;
  let audioDuration;

  if (isNaN(audio.duration)) {
    audioDuration = '00:00';
  } else {
    audioDuration = getTime(curentDuration);
  }

  let positionProgress = Math.round((audio.currentTime / curentDuration) * 100);
  secretProgressBarCurrent.style.width = `${positionProgress}%`;
  secretTimeTrack.innerHTML = `${getTime(audio.currentTime)} / ${audioDuration}`;
}, 500);

setInterval(() => {
  const curentDuration = audioCard.duration;
  let audioDuration;

  if (isNaN(audioCard.duration)) {
    audioDuration = '00:00';
  } else {
    audioDuration = getTime(curentDuration);
  }

  let positionProgress = Math.round((audioCard.currentTime / curentDuration) * 100);
  quizProgressBarCurrent.style.width = `${positionProgress}%`;
  quizTimeTrack.innerHTML = `${getTime(audioCard.currentTime)} / ${audioDuration}`;
}, 500);

quizProgressDuration.addEventListener('click', (value) => {
  const progressWidth = window.getComputedStyle(quizProgressDuration).width;
  const duration = (value.offsetX / parseInt(progressWidth)) * audio.duration;
  audioCard.currentTime = duration;
});

secretProgressDuration.addEventListener('click', (value) => {
  const progressWidth = window.getComputedStyle(secretProgressDuration).width;
  const duration = (value.offsetX / parseInt(progressWidth)) * audioCard.duration;
  audio.currentTime = duration;
});

secretMute.addEventListener('click', () => {
  if (audio.volume === 0) {
    audio.volume = secretCurrentLevelVolume;
    audioCard.volume = secretCurrentLevelVolume;
    secretMute.classList.remove('player-volume__mute');
    secretMute.classList.add('player-volume__unmute');
    secretVolumeLevel.value = secretCurrentLevelVolume * 100;
  } else {
    audio.volume = 0;
    audioCard.volume = 0;
    secretMute.classList.add('player-volume__mute');
    secretMute.classList.remove('player-volume__unmute');
    secretVolumeLevel.value = 0;
  }
});

secretVolumeLevel.addEventListener('change', () => {
  if (secretVolumeLevel.value > 0) {
    secretMute.classList.remove('player-volume__mute');
    secretMute.classList.add('player-volume__unmute');
  } else {
    secretMute.classList.add('player-volume__mute');
    secretMute.classList.remove('player-volume__unmute');
  }
  audio.volume = secretVolumeLevel.value / 100;
  audioCard.volume = secretVolumeLevel.value / 100;
  secretCurrentLevelVolume = secretVolumeLevel.value / 100;
});

const secretTitle = document.querySelector('.secret__title');
const secretImg = document.querySelector('.secret__img');
const quizOptions = document.querySelector('.quiz__options');
const quizScore = document.querySelector('.count');
const nextLevel = document.querySelector('.play-next');
const gamePagination = document.querySelectorAll('.pagination__item');

const quizInstruction = document.querySelector('.quiz__instruction');
const quizBody = document.querySelector('.quiz__body');
const quizDescr = document.querySelector('.quiz__descr');

const section = document.querySelectorAll('.page__section');

let score = 0;
let currentLevel = 0;
let completedLevel = false;
let data;
let secretNum;
let submitBtn;
let saveScore = 0;
let saveChecked = Array(6).fill(-1);
let indexCard = -1;

const clearQuestion = () => {
  secretImg.setAttribute('src', img);
  secretAudio.setAttribute('src', '');
  audio.src = secretAudio.src;
  secretTitle.innerHTML = '*****';
  quizOptions.innerHTML = '';
  quizScore.innerHTML = 0;
  score = 0;
  currentLevel = 0;
  for (let i = 0; i < gamePagination.length; i++) {
    gamePagination[i].classList.remove('pagination__item-active');
  }
  gamePagination[currentLevel].classList.add('pagination__item-active');
  quizInstruction.setAttribute('style', 'display: flex;');
  quizBody.setAttribute('style', 'display: none;');
  quizDescr.setAttribute('style', 'display: none;');
};

const nextQuestion = () => {
  secretImg.setAttribute('src', img);
  secretAudio.setAttribute('src', '');
  audio.src = secretAudio.src;
  audio.src = secretAudio.src;
  secretTitle.innerHTML = '*****';
  quizOptions.innerHTML = '';
  quizInstruction.setAttribute('style', 'display: flex;');
  quizBody.setAttribute('style', 'display: none;');
  quizDescr.setAttribute('style', 'display: none;');
  completedLevel = false;
};

const randomNum = () => {
  secretNum = Math.floor(Math.random() * data[currentLevel].length);
};

const birdQuiz = () => {
  secretAudio.setAttribute('src', data[currentLevel][secretNum].audio);
  audio.src = secretAudio.src;
};

const showQuestion = () => {
  for (let i = 0; i < data[currentLevel].length; i++) {
    const quizVariant = `<li class="quiz__variant">
    <span class="quiz__btn"></span>
    ${data[currentLevel][i].name}
</li>`;
    quizOptions.innerHTML += quizVariant;
  }
};

const showResult = () => {
  const endGame = document.querySelector('.endgame');
  endGame.textContent = score;
  saveScore = score;
  section[2].classList.add('section-active');
  section[1].classList.remove('section-active');
  window.scrollTo(0, 0);
};

const openSecretBird = () => {
  secretImg.setAttribute('src', data[currentLevel][secretNum].image);
  secretTitle.innerHTML = data[currentLevel][secretNum].name;
};

const openCardBird = (num) => {
  indexCard = num;
  const quizImg = document.querySelector('.quiz__img');
  const quizName = document.querySelector('.quiz__name');
  const quizSpecies = document.querySelector('.quiz__species');
  const quizDescr = document.querySelector('.quiz__descr');

  quizImg.setAttribute('src', data[currentLevel][indexCard].image);
  quizAudio.setAttribute('src', data[currentLevel][indexCard].audio);
  audioCard.src = quizAudio.src;
  quizName.innerHTML = data[currentLevel][indexCard].name;
  quizSpecies.innerHTML = data[currentLevel][indexCard].species;
  quizDescr.innerHTML = data[currentLevel][indexCard].description;

  quizInstruction.setAttribute('style', 'display: none;');
  quizBody.setAttribute('style', 'display: flex;');
  quizDescr.setAttribute('style', 'display: flex;');
};

const checkAnswer = (num) => {
  if (submitBtn[num].getAttribute('checked') !== 'true') {
    if (submitBtn[num].textContent.trim() === data[currentLevel][secretNum].name) {
      audioCheck(successAudio);
      submitBtn[num].classList.add('success');
      submitBtn[num].setAttribute('checked', true);
      saveChecked[num] = 1;
      nextLevel.classList.add('button-next');
      score += 5;
      quizScore.innerHTML = score;
      openSecretBird();
      secretPlayBtn.classList.remove('pause');
      audio.pause();
      secretIsPlay = false;
      completedLevel = true;
    } else {
      audioCheck(errorAudio);
      submitBtn[num].classList.add('error');
      submitBtn[num].setAttribute('checked', true);
      saveChecked[num] = 0;
      score -= 1;
    }
  }
  openCardBird(num);
};

const clickQuiz = () => {
  submitBtn = document.querySelectorAll('.quiz__variant');
  for (let i = 0; i < submitBtn.length; i++) {
    submitBtn[i].addEventListener('click', () => {
      if (!completedLevel) {
        checkAnswer(i);
      } else {
        openCardBird(i);
      }
    });
  }
};

const startGame = () => {
  nextQuestion();
  randomNum();
  birdQuiz();
  showQuestion();
  clickQuiz();
};

const initGame = () => {
  getLocalStorage();

  if (defaultLanguages === 'english') {
    data = birdsDataEn;
  } else {
    data = birdsDataRu;
  }
  clearQuestion();
  randomNum();
  birdQuiz();
  showQuestion();
  clickQuiz();
};

nextLevel.addEventListener('click', () => {
  if (completedLevel) {
    currentLevel++;
    nextLevel.classList.remove('button-next');
    indexCard = -1;
    if (currentLevel === 6) {
      showResult();
      initGame();
      completedLevel = false;
      saveChecked = Array(6).fill(-1);
    } else {
      gamePagination[currentLevel].classList.add('pagination__item-active');
      gamePagination[currentLevel - 1].classList.remove('pagination__item-active');
      secretPlayBtn.classList.remove('pause');
      audio.pause();
      secretIsPlay = false;
      saveChecked = Array(6).fill(-1);
      startGame();
    }
  }
});

export const changeLanguageGame = () => {
  getLocalStorage();

  if (defaultLanguages === 'english') {
    data = birdsDataEn;
  } else {
    data = birdsDataRu;
  }
  const endGame = document.querySelector('.endgame');
  endGame.textContent = saveScore;
  quizOptions.innerHTML = '';
  birdQuiz();
  showQuestion();

  if (completedLevel) {
    openSecretBird();
  }
  clickQuiz();

  for (let i = 0; i < submitBtn.length; i++) {
    if (saveChecked[i] === 0) {
      submitBtn[i].classList.add('error');
      submitBtn[i].setAttribute('checked', true);
    } else if (saveChecked[i] === 1) {
      submitBtn[i].classList.add('success');
      submitBtn[i].setAttribute('checked', true);
    }
  }

  if (indexCard > -1) {
    openCardBird(indexCard);
  }
};

const playAgain = document.querySelector('.play-again');
playAgain.addEventListener('click', () => {
  section[2].classList.remove('section-active');
  section[1].classList.add('section-active');
});

initGame();

changeLanguageGame();
