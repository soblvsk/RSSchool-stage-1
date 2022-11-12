import { getDefaultLanguages } from './defaultLanguage.js';
import { settingLanguage, settingHome, settingGame, settingResult } from './date.js';

let defaultLanguages = 'english';

const homeBtn = document.querySelector('.home');
const gameBtn = document.querySelector('.game');
const galleryBtn = document.querySelector('.gallery');
const languageLabel = document.querySelector('.language__label');
const homeTitle = document.querySelector('.page-home__title');
const homeDescr = document.querySelector('.page-home__descr');
const gameScore = document.querySelector('.score');
const gamePagination = document.querySelectorAll('.pagination__item');
const gameCard = document.querySelector('.quiz__instruction');
const gameNextLevel = document.querySelector('.button');
const resultTitle = document.querySelector('.page-result__title');
const resultDescr = document.querySelector('.page-result__descr');
const resultBtnAgain = document.querySelector('.play-again');

export function settingAppLanguages() {
  defaultLanguages = getDefaultLanguages();
  homeBtn.innerHTML = settingLanguage[defaultLanguages][0];
  gameBtn.innerHTML = settingLanguage[defaultLanguages][1];
  galleryBtn.innerHTML = settingLanguage[defaultLanguages][2];
  languageLabel.innerHTML = settingLanguage[defaultLanguages][3];
  homeTitle.innerHTML = settingHome[defaultLanguages][0];
  homeDescr.innerHTML = settingHome[defaultLanguages][1];
  gameScore.innerHTML = settingGame[defaultLanguages][0];
  for (let i = 0; i < gamePagination.length; i++) {
    gamePagination[i].innerHTML = settingGame[defaultLanguages][i + 1];
  }
  gameNextLevel.innerHTML = settingGame[defaultLanguages][7];
  gameCard.innerHTML = settingGame[defaultLanguages][8];
  resultTitle.innerHTML = settingResult[defaultLanguages][0];
  resultDescr.innerHTML = settingResult[defaultLanguages][1];
  resultBtnAgain.innerHTML = settingResult[defaultLanguages][2];
}
