import birdsDataRu from '../assets/data/birdsRu.js';
import birdsDataEn from '../assets/data/birdsEn.js';

let defaultLanguages = 'english';

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    defaultLanguages = localStorage.getItem('defaultLanguage');
  }
}

const galleryContent = document.querySelector('.birds');

export async function showEnGallery() {
  for (let key in birdsDataEn) {
    let subBirdsDataEn = birdsDataEn[key];

    for (let subKey in subBirdsDataEn) {
      const birdsItem = document.createElement('div');
      birdsItem.classList.add('birds__item');
      galleryContent.appendChild(birdsItem);

      const audioBird = document.createElement('audio');
      audioBird.classList.add('birds__audio');
      audioBird.setAttribute('src', subBirdsDataEn[subKey]['audio']);
      birdsItem.appendChild(audioBird);

      const img = document.createElement('img');
      img.classList.add('img');
      img.setAttribute('src', subBirdsDataEn[subKey]['image']);
      birdsItem.appendChild(img);

      const birdsContent = document.createElement('div');
      birdsContent.classList.add('birds__content');
      birdsItem.appendChild(birdsContent);

      const birdsName = document.createElement('h2');
      birdsName.classList.add('birds__name');
      birdsName.innerHTML = subBirdsDataEn[subKey]['name'];
      birdsContent.appendChild(birdsName);

      const birdsSpecies = document.createElement('h3');
      birdsSpecies.classList.add('birds__species');
      birdsSpecies.innerHTML = subBirdsDataEn[subKey]['species'];
      birdsContent.appendChild(birdsSpecies);

      const player = document.createElement('div');
      player.classList.add('player');
      birdsContent.appendChild(player);

      const playerControls = document.createElement('div');
      playerControls.classList.add('player__controls');
      player.appendChild(playerControls);

      const play = document.createElement('button');
      play.classList.add('play');
      play.classList.add('player-icon');
      play.classList.add('play-birds');
      playerControls.appendChild(play);

      const playProgessbar = document.createElement('div');
      playProgessbar.classList.add('player-progressbar');
      playProgessbar.classList.add('progress');
      playerControls.appendChild(playProgessbar);

      const playProgressbarDuration = document.createElement('div');
      playProgressbarDuration.classList.add('progress-duration');
      playProgressbarDuration.classList.add('progress__duration');
      playProgessbar.appendChild(playProgressbarDuration);

      const playProgressbarDurationCurrent = document.createElement('div');
      playProgressbarDurationCurrent.classList.add('progress-duration__current');
      playProgressbarDurationCurrent.classList.add('progress__current');
      playProgressbarDuration.appendChild(playProgressbarDurationCurrent);

      const playTimer = document.createElement('div');
      playTimer.classList.add('player-time');
      playProgessbar.appendChild(playTimer);

      const playTimerTrack = document.createElement('p');
      playTimerTrack.classList.add('player-time__track');
      playTimerTrack.classList.add('progress__track');
      playTimerTrack.innerHTML = '00:00 / 00:00';
      playTimer.appendChild(playTimerTrack);

      const birdsDescr = document.createElement('p');
      birdsDescr.classList.add('birds__descr');
      birdsDescr.innerHTML = subBirdsDataEn[subKey]['description'];
      birdsItem.appendChild(birdsDescr);

      // console.log(subBirdsDataEn[subKey]);
    }
  }
}

export async function showRuGallery() {
  for (let key in birdsDataRu) {
    let subBirdsDataRu = birdsDataRu[key];

    for (let subKey in subBirdsDataRu) {
      const birdsItem = document.createElement('div');
      birdsItem.classList.add('birds__item');
      galleryContent.appendChild(birdsItem);

      const audioBird = document.createElement('audio');
      audioBird.classList.add('birds__audio');
      audioBird.setAttribute('src', subBirdsDataRu[subKey]['audio']);
      birdsItem.appendChild(audioBird);

      const img = document.createElement('img');
      img.classList.add('img');
      img.setAttribute('src', subBirdsDataRu[subKey]['image']);
      birdsItem.appendChild(img);

      const birdsContent = document.createElement('div');
      birdsContent.classList.add('birds__content');
      birdsItem.appendChild(birdsContent);

      const birdsName = document.createElement('h2');
      birdsName.classList.add('birds__name');
      birdsName.innerHTML = subBirdsDataRu[subKey]['name'];
      birdsContent.appendChild(birdsName);

      const birdsSpecies = document.createElement('h3');
      birdsSpecies.classList.add('birds__species');
      birdsSpecies.innerHTML = subBirdsDataRu[subKey]['species'];
      birdsContent.appendChild(birdsSpecies);

      const player = document.createElement('div');
      player.classList.add('player');
      birdsContent.appendChild(player);

      const playerControls = document.createElement('div');
      playerControls.classList.add('player__controls');
      player.appendChild(playerControls);

      const play = document.createElement('button');
      play.classList.add('play');
      play.classList.add('player-icon');
      play.classList.add('play-birds');
      playerControls.appendChild(play);

      const playProgessbar = document.createElement('div');
      playProgessbar.classList.add('player-progressbar');
      playProgessbar.classList.add('progress');
      playerControls.appendChild(playProgessbar);

      const playProgressbarDuration = document.createElement('div');
      playProgressbarDuration.classList.add('progress-duration');
      playProgressbarDuration.classList.add('progress__duration');
      playProgessbar.appendChild(playProgressbarDuration);

      const playProgressbarDurationCurrent = document.createElement('div');
      playProgressbarDurationCurrent.classList.add('progress-duration__current');
      playProgressbarDurationCurrent.classList.add('progress__current');
      playProgressbarDuration.appendChild(playProgressbarDurationCurrent);

      const playTimer = document.createElement('div');
      playTimer.classList.add('player-time');
      playProgessbar.appendChild(playTimer);

      const playTimerTrack = document.createElement('p');
      playTimerTrack.classList.add('player-time__track');
      playTimerTrack.classList.add('progress__track');
      playTimerTrack.innerHTML = '00:00 / 00:00';
      playTimer.appendChild(playTimerTrack);

      const birdsDescr = document.createElement('p');
      birdsDescr.classList.add('birds__descr');
      birdsDescr.innerHTML = subBirdsDataRu[subKey]['description'];
      birdsItem.appendChild(birdsDescr);
      // console.log(subBirdsDataRu[subKey]);
    }
  }
}

export const showGallery = () => {
  galleryContent.innerHTML = '';
  getLocalStorage();

  if (defaultLanguages === 'english') {
    showEnGallery();
  } else {
    showRuGallery();
  }
};

showGallery();
