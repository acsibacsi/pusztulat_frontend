export interface Article {
    id: number,
    title: {
        rendered: string
    },
    author: number,
    excerpt: {
        rendered: string,
        protected: boolean
    },
    content: {
        rendered: string,
        protected: boolean
    },
    date: string,
    modified: string,
    categories: number[],
    tags: string[]
}