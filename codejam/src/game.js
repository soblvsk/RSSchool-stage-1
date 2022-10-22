import sound from './assets/audio/sound.mp3';

export default class Game {
  constructor(size) {
    this.node = null;
    this.timer__value = null;
    this.time = 0;
    this.interval = null;

    this.playSound = true;

    this.count = 0;

    this.changeSizes(size);
    this.puzzles = null;

    this.matrix = null;
    this.drag = null;

    this.res = this.getLocalStorage('results') || {};

    window.addEventListener('DOMContentLoaded', this.windowResize, { once: true });
    window.addEventListener('resize', this.windowResize);
  }

  windowResize(e) {
    const app__puzzles = document.querySelector('.app__puzzles');
    app__puzzles.style.height = '600px';
    app__puzzles.style.width = '600px';

    app__puzzles.style.height = window.getComputedStyle(app__puzzles).width;
    app__puzzles.style.width = window.getComputedStyle(app__puzzles).height;
  }

  initGame() {
    this.changeSizes(this.getLocalStorage('sizes'));
    const storagePuzzle = this.getLocalStorage('puzzles');
    const storageTime = this.getLocalStorage('time');
    const storageCount = this.getLocalStorage('steps');
    if (storagePuzzle && storageTime && storageCount) {
      this.count = storageCount;
      let timing = storageTime;

      let min = Math.floor(Number(timing) / 60);
      let sec = Math.floor(Number(timing) % 60);
      if (min < 10) {
        min = `0${min}`;
      } else {
        min = `${min}`;
      }
      if (sec < 10) {
        sec = `0${sec}`;
      } else {
        sec = `${sec}`;
      }
      this.timer__value = `${min}:${sec}`;
      this.time = Number(timing);

      this.page();
      this.createItemPuzzle();
      this.basicGame();
    } else {
      this.count = 0;
      let timing = 0;

      let min = Math.floor(Number(timing) / 60);
      let sec = Math.floor(Number(timing) % 60);
      if (min < 10) {
        min = `0${min}`;
      } else {
        min = `${min}`;
      }
      if (sec < 10) {
        sec = `0${sec}`;
      } else {
        sec = `${sec}`;
      }
      this.timer__value = `${min}:${sec}`;
      this.time = Number(timing);

      this.page();
      this.createItemPuzzle();

      const button1 = document.querySelectorAll('.app__button')[0];
      const button2 = document.querySelectorAll('.app__button')[1];
      button1.disabled = true;
      button2.disabled = false;

      this.startTimer();
      this.startGame();
    }

    if (storagePuzzle) {
      this.matrix = storagePuzzle;
      this.setPositionArray(this.matrix);
    }
  }

  startGame() {
    let matrix = this.basicGame();
    this.createGame(matrix);

    this.clickPuzzles(true);
    this.dragAndDrop(true);
  }

  basicGame() {
    this.node = Array.from(this.puzzles.querySelectorAll('.app__puzzles-item'));
    let matrix = this.getArray(this.node.map((item) => Number(item.dataset.id)));
    this.setPositionArray(matrix);
    this.node[Math.pow(this.size, 2) - 1].style.opacity = '0';
    this.node[Math.pow(this.size, 2) - 1].style.cursor = 'auto';
    return matrix;
  }

  changeGame() {
    this.setLocalStorage('sizes', this.size);
    this.clearGame();
    this.puzzles.innerHTML = '';
    this.createItemPuzzle();
    this.basicGame();
    this.clickPuzzles(false);
    this.dragAndDrop(false);
  }

  clearGame() {
    this.deleteLocalStorage('puzzles');
    this.deleteLocalStorage('steps');
    this.deleteLocalStorage('time');
    this.moves__value.textContent = '0';
    this.count = 0;
    this.timer__value.textContent = '00:00';
    this.time = 0;
    clearInterval(this.interval);
    this.matrix = null;
  }

  createGame(matrix) {
    const shuffledArray = this.shuffleArray(matrix.flat());
    this.matrix = this.getArray(shuffledArray);
    this.setPositionArray(this.matrix);
  }

  // GET AN ARRAY LINE BY LINE
  getArray(arr) {
    let matrix;
    if (this.size === 3) {
      matrix = [[], [], []];
    } else if (this.size === 5) {
      matrix = [[], [], [], [], []];
    } else if (this.size === 6) {
      matrix = [[], [], [], [], [], []];
    } else if (this.size === 7) {
      matrix = [[], [], [], [], [], [], []];
    } else if (this.size === 8) {
      matrix = [[], [], [], [], [], [], [], []];
    } else {
      matrix = [[], [], [], []];
    }

    let x = 0;
    let y = 0;

    for (let i = 0; i < arr.length; i++) {
      if (this.size <= x) {
        x = 0;
        y++;
      }
      matrix[y][x] = arr[i];
      x++;
    }
    return matrix;
  }

  // SET POSITION PUZZLES ANIMATION
  setPositionArray(arr) {
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr[y].length; x++) {
        this.node[arr[y][x] - 1].style.transform = `translate3D(${x * 100}%,${y * 100}%,0)`;
      }
    }
  }

  // RANDOM PUZZLES
  shuffleArray(arr) {
    if (this.size === 3 || this.size === 5 || this.size === 7) {
      const massiv = arr.map((x) => x).sort(() => Math.random() - 0.5);

      let newMassiv = [...massiv];
      let index = newMassiv.indexOf(Math.pow(this.size, 2));
      if (index >= 0) {
        newMassiv.splice(index, 1);
      }

      let invers = 0;
      for (let i = 0; i < newMassiv.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
          if (newMassiv[j] > newMassiv[i]) {
            invers++;
          }
        }
      }

      if (invers % 2 === 0) {
        return massiv;
      }

      return this.shuffleArray(massiv);
    } else {
      let massiv = [];
      for (let i = 0; i < this.size; i++) {
        massiv[i] = arr.splice(0, this.size);
      }

      for (let i = 0; i < massiv.length; i++) {
        for (let j = 0; j < massiv[i].length; j++) {
          let randOne = Math.floor(Math.random() * massiv.length);
          let randTwo = Math.floor(Math.random() * massiv.length);

          let temp = massiv[i][j];
          massiv[i][j] = massiv[randOne][randTwo];
          massiv[randOne][randTwo] = temp;
        }
      }

      let indexNull;
      let newMassiv = [...massiv];

      for (let i = 0; i < newMassiv.length; i++) {
        let index = newMassiv[i].indexOf(Math.pow(this.size, 2));
        if (index >= 0) {
          indexNull = i;
        }
      }

      newMassiv = newMassiv.flat();

      let index = newMassiv.indexOf(Math.pow(this.size, 2));
      if (index >= 0) {
        newMassiv.splice(index, 1);
      }

      let invers = 0;
      for (let i = 0; i < newMassiv.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
          if (newMassiv[j] > newMassiv[i]) {
            invers++;
          }
        }
      }

      invers += indexNull;
      massiv = massiv.flat();

      if (invers % 2 !== 0) {
        return massiv;
      }
      return this.shuffleArray(massiv);
    }
  }

  // DRAG AND DROP PUZZLES
  dragAndDrop(isDrag) {
    if (isDrag) {
      this.puzzles.ondragstart = (event) => {
        if (event.target.dataset.id !== `${Math.pow(this.size, 2)}`) {
          this.drag = event;
        } else {
          this.drag = null;
        }
      };

      this.puzzles.ondragover = (event) => {
        event.preventDefault();
      };

      this.puzzles.ondrop = (event) => {
        if (event.target.dataset.id === `${Math.pow(this.size, 2)}` && this.drag !== null) {
          this.swapPuzzle(this.drag);
          this.swapCheck();
        }
      };
    } else {
      this.puzzles.ondragover = (event) => {
        event.preventDefault();
      };

      this.puzzles.ondrop = (event) => {
        return;
      };
    }
  }

  // CLICK
  clickPuzzles(isClick) {
    if (isClick) {
      this.puzzles.onclick = (event) => {
        if (!event.target.classList.contains('app__puzzles-item')) {
          return;
        }
        if (event.target.dataset.id !== `${Math.pow(this.size, 2)}`) {
          this.swapPuzzle(event);
          this.swapCheck();
        }
      };
    } else {
      this.puzzles.onclick = (event) => {
        if (!event.target.classList.contains('app__puzzles-item')) {
          return;
        }
      };
    }
  }

  // CHANGE SIZES PUZZLES
  changeSizes(size) {
    this.size = size;
  }

  // CREATE ITEM
  createItem(nameClass, dom) {
    const div = document.createElement('div');
    div.classList.add(nameClass);
    dom.appendChild(div);
    return div;
  }

  // CREATE ITEM PUZZLE
  createItemPuzzle() {
    for (let i = 1; i < Math.pow(this.size, 2) + 1; i++) {
      const div = document.createElement('div');
      div.classList.add('app__puzzles-item');
      div.setAttribute('style', `width: calc(100%/${this.size}); height:calc(100%/${this.size});`);
      div.setAttribute('draggable', `true`);
      div.dataset.id = `${i}`;
      div.textContent = `${i}`;
      this.puzzles.append(div);
    }
  }

  // CREATE ITEM WITH TEXT
  createItemText(nameClass, dom, text) {
    const div = document.createElement('div');
    div.classList.add(nameClass);
    div.textContent = text;
    dom.append(div);
    return div;
  }

  // CREATE BUTTON
  createButton(nameClass, dom, text) {
    const button = document.createElement('button');
    button.classList.add(nameClass);
    button.textContent = text;
    dom.append(button);
    return button;
  }

  // EDIT BUTTON AFTER FINISH
  editButton() {
    const button1 = document.querySelectorAll('.app__button')[0];
    const button2 = document.querySelectorAll('.app__button')[1];
    const button4 = document.querySelectorAll('.app__button')[3];
    button1.textContent = 'Shuffle and start';
    button1.disabled = false;
    button2.disabled = true;
    button4.disabled = false;
  }

  // CREATE ELEMENTS
  page() {
    const app = this.createItem('app', document.body);

    const app__container = this.createItem('app__container', app);

    const app__buttons = this.createItem('app__buttons', app__container);
    const btn__start = this.createButton('app__button', app__buttons, 'Shuffle and start');
    const btn__stop = this.createButton('app__button', app__buttons, 'Stop');
    const btn__save = this.createButton('app__button', app__buttons, 'Save');
    const btn__result = this.createButton('app__button', app__buttons, 'Results');
    const btn__sound = this.createButton('app__button', app__buttons, 'Sound off');

    const setDisable = (btn, isDisabled) => {
      btn.forEach((el) => {
        el.disabled = isDisabled;
      });
    };
    setDisable([btn__result, btn__stop, btn__save], true);

    btn__start.addEventListener('click', (e) => {
      e.stopPropagation();
      if (btn__start.textContent === 'Shuffle and start' || btn__stop.textContent === 'Continue') {
        this.clearGame();
      }

      if (this.time !== 0 && this.getLocalStorage('puzzles')) {
        clearInterval(this.interval);
        this.interval = null;
        this.startTimer();
        this.clickPuzzles(true);
        this.dragAndDrop(true);
      } else {
        this.timer__value.textContent = '00:00';
        this.time = 0;
        this.startTimer();
        this.startGame();
      }

      btn__stop.textContent = 'Stop';
      setDisable([btn__stop], false);
      setDisable([btn__start, btn__save, btn__result], true);
    });

    btn__stop.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.interval !== null) {
        clearInterval(this.interval);
        this.interval = null;
        btn__start.textContent = 'Shuffle and start';
        btn__stop.textContent = 'Continue';
        setDisable([btn__start, btn__save, btn__result], false);
        this.clickPuzzles(false);
        this.dragAndDrop(false);
      } else {
        this.startTimer();
        btn__stop.textContent = 'Stop';
        setDisable([btn__start, btn__save, btn__result], true);
        this.clickPuzzles(true);
        this.dragAndDrop(true);
      }
    });

    btn__save.addEventListener('click', (e) => {
      e.stopPropagation();
      this.modal(false);
    });

    btn__result.addEventListener('click', (e) => {
      e.stopPropagation();
      this.results();
    });

    btn__sound.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.playSound === false) {
        btn__sound.textContent = 'Sound off';
        this.playSound = true;
      } else {
        btn__sound.textContent = 'Sound';
        this.playSound = false;
      }
    });

    if (this.timer__value !== '00:00') {
      btn__start.textContent = 'Start';
    }

    const app__timers = this.createItem('app__timers', app__container);
    this.move = this.createItemText('app__move', app__timers, 'Moves:');
    this.moves__value = this.createItemText('app__move-value', app__timers, `${this.count}`);
    this.timer = this.createItemText('app__timer', app__timers, 'Time:');
    this.timer__value = this.createItemText(
      'app__timer-value',
      app__timers,
      `${this.timer__value}`,
    );

    this.puzzles = this.createItem('app__puzzles', app__container);

    const app__fields = this.createItem('app__fields', app__container);
    this.frame = this.createItemText('app__frame', app__fields, 'Frame size: ');
    const frame__value = this.createItemText(
      'app__frame-value',
      app__fields,
      `${this.size}X${this.size}`,
    );

    const app__sizes = this.createItem('app__sizes', app__container);
    for (let i = 3; i < 9; i++) {
      let button__sizes = this.createButton('app__size', app__sizes, `${i}X${i}`);

      button__sizes.addEventListener('click', (event) => {
        event.stopPropagation();
        this.changeSizes(i);
        btn__start.textContent = 'Shuffle and start';
        setDisable([btn__result, btn__stop, btn__save], true);
        setDisable([btn__start], false);
        this.changeGame();
        frame__value.textContent = `${this.size}x${this.size}`;
      });
    }
  }

  // RUN TIMER
  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      this.timer__value.textContent = `${this.getTime()}`;
      this.setLocalStorage('time', `${this.time}`);
    }, 1000);
  }

  // GET TIMER NOW
  getTime() {
    let time__now = this.time;

    let minutes = Math.floor(time__now / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    } else {
      minutes = `${minutes}`;
    }

    let seconds = Math.floor(time__now % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } else {
      seconds = `${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error.message);
    }
  }

  getLocalStorage(key) {
    if (!localStorage.getItem(key)) {
      return;
    }

    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error.message);
    }
  }

  deleteLocalStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error.message);
    }
  }

  // SWAP PUZZLES
  swapPuzzle(event) {
    const target = event.target;
    const puzzleId = Number(target.dataset.id);
    let puzzleCoordinate, nullCoordinate;

    for (let y = 0; y < this.matrix.length; y++) {
      for (let x = 0; x < this.matrix[y].length; x++) {
        if (this.matrix[y][x] === puzzleId) {
          puzzleCoordinate = { x, y };
        } else if (this.matrix[y][x] === Math.pow(this.size, 2)) {
          nullCoordinate = { x, y };
        }
      }
    }
    const coordX = Math.abs(puzzleCoordinate.x - nullCoordinate.x);
    const coordY = Math.abs(puzzleCoordinate.y - nullCoordinate.y);
    let isSwap = false;
    if (
      (coordX === 1 || coordY === 1) &&
      (puzzleCoordinate.x === nullCoordinate.x || puzzleCoordinate.y === nullCoordinate.y)
    ) {
      isSwap = true;
    }

    if (isSwap) {
      const oldNull = this.matrix[nullCoordinate.y][nullCoordinate.x];
      this.matrix[nullCoordinate.y][nullCoordinate.x] =
        this.matrix[puzzleCoordinate.y][puzzleCoordinate.x];
      this.matrix[puzzleCoordinate.y][puzzleCoordinate.x] = oldNull;
      this.stepCounter();
      this.playAudio();
      this.setPositionArray(this.matrix);
    }

    this.setLocalStorage('puzzles', this.matrix);
  }

  // SOUND AFTER CLICK PUZZLE
  playAudio() {
    if (this.playSound === true) {
      let music = new Audio();
      music.pause();
      music = new Audio(sound);
      music.volume = 0.02;
      music.play();
    }
  }

  // ADD COUNT MOVES
  stepCounter() {
    const move__value = document.querySelector('.app__move-value');
    this.count += 1;
    this.setLocalStorage('steps', this.count);
    move__value.textContent = this.count;
  }

  // CHECK WIN
  swapCheck() {
    const winArray = new Array(Math.pow(this.size, 2)).fill(0).map((__, i) => i + 1);

    const arr = this.matrix.flat();
    let isWin = true;
    for (let i = 0; i < winArray.length; i++) {
      if (winArray[i] !== arr[i]) {
        isWin = false;
      }
    }

    if (isWin) {
      this.puzzles.onclick = (event) => {
        if (!event.target.classList.contains('app__puzzles-item')) {
          return;
        }
      };
      this.finishGame();
      this.editButton();
      clearInterval(this.interval);
    }
  }

  // MODAL SAVE GAME
  modal(win) {
    document.body.style.overflow = 'hidden';
    const overlay = document.createElement('div');
    overlay.classList.add('app__overlay');
    document.body.append(overlay);

    const modal = document.createElement('div');
    modal.classList.add('app__modal');
    overlay.append(modal);

    const modal__text = document.createElement('div');
    modal__text.classList.add('app__modal-content');
    modal.append(modal__text);

    const title = document.createElement('h2');
    title.textContent = 'Save the result?';
    modal__text.append(title);

    const descr__move = document.createElement('p');
    descr__move.classList.add('app__modal-descr');
    descr__move.innerHTML = `Moves: <b>${this.count}</b>`;
    modal__text.append(descr__move);

    const descr__time = document.createElement('p');
    descr__time.classList.add('app__modal-descr');
    descr__time.innerHTML = `Time: <b>${this.timer__value.textContent}</b>`;
    modal__text.append(descr__time);

    const app__form = document.createElement('form');
    const app__form_input = document.createElement('div');
    app__form_input.classList.add('app__form-input');

    const app__form_label = document.createElement('label');
    app__form_label.classList.add('form__label');
    app__form_label.for = 'name';
    app__form_label.textContent = 'NickName: ';
    app__form_input.append(app__form_label);

    const app__form_input_name = document.createElement('input');
    app__form_input_name.classList.add('form__input');
    app__form_input_name.id = 'name';
    app__form_input_name.type = 'text';
    app__form_input_name.name = 'nickname';
    app__form_input_name.required = true;
    app__form_input.append(app__form_input_name);

    app__form.append(app__form_input);

    const app__form_buttons = document.createElement('div');
    app__form_buttons.classList.add('app__form-buttons');

    const app__save_button = document.createElement('button');
    app__save_button.classList.add('app__form-button');
    app__save_button.type = 'Submit';
    app__save_button.textContent = 'Save';
    app__form_buttons.append(app__save_button);

    const app__close_button = document.createElement('button');
    app__close_button.classList.add('app__form-button');
    app__close_button.textContent = 'Close';
    app__form_buttons.append(app__close_button);

    app__form.append(app__form_buttons);

    app__form.addEventListener('submit', (event) => {
      event.preventDefault();
      document.body.style.overflow = '';
      this.addResult(app__form_input_name.value, win);
      modal.remove();
      overlay.remove();
    });

    app__close_button.addEventListener('click', () => {
      document.body.style.overflow = '';
      modal.remove();
      overlay.remove();
    });

    modal__text.append(app__form);
  }

  // FUNCTION ADD RESULT
  addResult(nickname, win) {
    const res = { nickname, win, moves: this.count, time: this.timer__value.textContent };
    if (this.res[`${this.size}X${this.size}`]) {
      this.res[`${this.size}X${this.size}`].push(res);
      this.res[`${this.size}X${this.size}`].sort((res1, res2) => res1.time - res2.time);
    } else {
      this.res[`${this.size}X${this.size}`] = [res];
    }
    this.setLocalStorage('results', this.res);
    this.deleteLocalStorage('steps');
    this.deleteLocalStorage('time');
  }

  // MODAL RESULTS
  results() {
    document.body.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.classList.add('app__overlay');
    document.body.append(overlay);

    const modal = document.createElement('div');
    modal.classList.add('app__modal');
    overlay.append(modal);

    const modal__text = document.createElement('div');
    modal__text.classList.add('app__modal-content');
    modal__text.classList.add('table');
    modal.append(modal__text);

    const title = document.createElement('h2');
    title.textContent = 'Results';
    title.style.marginBottom = '20px';
    modal__text.append(title);

    const subTitle = document.createElement('h3');
    subTitle.textContent = '3X3';
    subTitle.style.marginBottom = '20px';
    if (this.getLocalStorage('results')) {
      modal__text.append(subTitle);
    }

    const table = document.createElement('div');

    const tableCreate = (size) => {
      table.innerHTML = '';
      if (this.getLocalStorage('results')) {
        if (this.res[`${size}X${size}`]) {
          const array = this.res[`${size}X${size}`].slice(0, 10);

          const tb = document.createElement('table');
          tb.classList.add('app__table');

          const tbody = document.createElement('tbody');
          tbody.classList.add('app__table-tbody');
          tb.append(tbody);

          const tr = document.createElement('tr');
          tr.classList.add('app__table-tr');
          tbody.append(tr);

          ['Name', 'Moves', 'Time', 'isWin'].forEach((element) => {
            const td = document.createElement('td');
            td.classList.add('app__table-td');
            td.textContent = `${element}`;
            tr.append(td);
          });

          array.forEach((item) => {
            const trResults = document.createElement('tr');
            trResults.classList.add('app__table-tr');

            const name = document.createElement('td');
            name.classList.add('app__table-td');
            name.textContent = item.nickname;
            trResults.append(name);

            const moves = document.createElement('td');
            moves.classList.add('app__table-td');
            moves.textContent = item.moves;
            trResults.append(moves);

            const time = document.createElement('td');
            time.classList.add('app__table-td');
            time.textContent = item.time;
            trResults.append(time);

            const win = document.createElement('td');
            win.classList.add('app__table-td');
            win.textContent = item.win ? 'Yes' : 'No';

            trResults.append(win);

            tbody.append(trResults);
          });
          table.append(tb);
        } else {
          table.innerHTML = 'No results';
        }
      } else {
        table.innerHTML = 'No results';
      }
    };

    tableCreate(3);
    modal__text.append(table);

    if (this.getLocalStorage('results')) {
      const sizes = document.createElement('div');
      sizes.classList.add('app__form-buttons');
      for (let i = 3; i < 9; i++) {
        const button = document.createElement('button');
        button.classList.add('app__form-button');
        button.addEventListener('click', (event) => {
          event.stopPropagation();
          subTitle.textContent = `${i}X${i}`;
          tableCreate(i);
        });
        button.textContent = `${i}X${i}`;
        sizes.append(button);
      }
      modal__text.append(sizes);
    }

    const app__button = document.createElement('div');
    app__button.classList.add('app__form-buttons');
    modal__text.append(app__button);

    const app__close_button = document.createElement('button');
    app__close_button.classList.add('app__form-button');
    app__close_button.textContent = 'Close';
    app__close_button.addEventListener('click', () => {
      document.body.style.overflow = '';
      modal.remove();
      overlay.remove();
    });
    app__button.append(app__close_button);
  }

  // MODAL FINISH GAME
  finishGame() {
    this.clickPuzzles(false);
    this.dragAndDrop(false);
    document.body.style.overflow = 'hidden';
    const overlay = document.createElement('div');
    overlay.classList.add('app__overlay');
    document.body.append(overlay);

    const modal = document.createElement('div');
    modal.classList.add('app__modal');
    overlay.append(modal);

    const modal__text = document.createElement('div');
    modal__text.classList.add('app__modal-content');
    modal.append(modal__text);

    const title = document.createElement('h2');
    title.textContent = 'End game';
    modal__text.append(title);

    const descr__one = document.createElement('p');
    descr__one.classList.add('app__modal-descr');
    descr__one.innerHTML = `Hooray! You solved the puzzle in <b>${this.timer__value.textContent}</b> and <b>${this.count}</b> moves!`;
    modal__text.append(descr__one);

    const descr__two = document.createElement('p');
    descr__two.classList.add('app__modal-descr');
    descr__two.innerHTML = 'Do you want to save your result?';
    modal__text.append(descr__two);

    const app__buttons = document.createElement('div');
    app__buttons.classList.add('app__form-buttons');

    const app__save_button = document.createElement('button');
    app__save_button.classList.add('app__form-button');
    app__save_button.type = 'Submit';
    app__save_button.textContent = 'Yes';
    app__buttons.append(app__save_button);

    const app__close_button = document.createElement('button');
    app__close_button.classList.add('app__form-button');
    app__close_button.textContent = 'No';
    app__buttons.append(app__close_button);

    modal__text.append(app__buttons);

    app__save_button.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.style.overflow = '';
      this.modal(true);
      modal.remove();
      overlay.remove();
    });

    app__close_button.addEventListener('click', () => {
      document.body.style.overflow = '';
      modal.remove();
      overlay.remove();
    });
    this.deleteLocalStorage('puzzles');
  }
}
