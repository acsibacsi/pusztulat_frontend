export interface Article {
    id: number;
    title: string;
    author_id: number;
    thumbnail: string;
    lead: string;
    release_date: Date;
    last_modified: Date;
    main_body: string;
    tags: string[];
}