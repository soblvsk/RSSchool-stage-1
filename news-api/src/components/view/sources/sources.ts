import './sources.css';
import { SourceItem } from '../../types';

class Sources {
    public draw(data: Readonly<SourceItem[]>): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourceItem): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);
            (sourceClone.querySelector('.source__item') as HTMLElement).style.display = 'none';
            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
