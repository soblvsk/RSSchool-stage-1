import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1c72241c977d4f06b911ca8f6a5b2be6', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
