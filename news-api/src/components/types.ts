export interface NewsItem {
    source: { id: string; name: string };
    author: string | null;
    title: string;
    description: string;
    content: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
}

export interface SourceItem {
    id: string;
    name: string;
    description: string;
    category: string;
    country: string;
    language: string;
    url: string;
}

export interface ResponseDataNews {
    status: string;
    totalResults: number;
    articles: NewsItem[];
}

export interface ResponseDataSource {
    status: string;
    sources: SourceItem[];
}

export interface Options {
    // readonly [key: string]: string;
    readonly apiKey: string;
    sources: string;
}

export enum Endpoint {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

export type GetResp = {
    endpoint: Endpoint;
    options?: Partial<Options>;
};

export type CallbackVoid<T> = (data?: T) => void;
