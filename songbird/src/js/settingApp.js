let defaultLanguages = 'english';

import { settingAppLanguages } from './settingsAppLanguages.js';
import { getDefaultLanguages } from './defaultLanguage.js';
import { showGallery } from './gallery.js';
import { galleryApp } from './app.js';
import { changeLanguageGame } from './game.js';

const selectLanguages = document.querySelector('.language__select');

function changeSettings() {
  defaultLanguages = getDefaultLanguages();
  setLocalStorage();
  getLocalStorage();
  showGallery();
  galleryApp();
  settingAppLanguages();
  changeLanguageGame();
}

selectLanguages.addEventListener('change', () => {
  changeSettings();
});

const settingsLanguage = document.querySelector('.language__select');

export function setLocalStorage() {
  localStorage.setItem('defaultLanguage', settingsLanguage.value);
}

export function getLocalStorage() {
  if (localStorage.getItem('defaultLanguage')) {
    settingsLanguage.value = localStorage.getItem('defaultLanguage');
  }

  settingAppLanguages();
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
