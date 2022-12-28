import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
        this.sourcesActive();
    }

    private sourcesActive(): void {
        const newsName = document.querySelector('.news-name') as HTMLDivElement;
        const character = newsName.querySelectorAll('.news-name__character') as NodeListOf<HTMLDivElement>;

        for (let i = 0; i < character.length; i++) {
            character[i].addEventListener('click', (e) => {
                const target = e.target as HTMLElement;

                character.forEach((item: HTMLDivElement) => {
                    item.classList.remove('active');
                });

                target.classList.add('active');
                this.sourcesShow(target.innerHTML.toUpperCase());
            });
        }
    }

    private sourcesShow(character: string): void {
        let count = 0;
        const sourcesInfo = document.querySelector('.sources__info') as HTMLDivElement;
        const sourcesItem = document.querySelectorAll('.source__item') as NodeListOf<HTMLDivElement>;

        sourcesItem.forEach((item: HTMLDivElement) => {
            const sourceId = (item as HTMLDivElement).dataset.sourceId as string;
            const firstItem = sourceId[0].toUpperCase();

            if (firstItem === character) {
                (item as HTMLDivElement).style.display = 'block';
                count += 1;
            } else {
                (item as HTMLDivElement).style.display = 'none';
            }
        });

        if (count !== 0) {
            sourcesInfo.style.display = 'none';
        } else {
            sourcesInfo.style.display = 'block';
        }
    }
}

export default App;
