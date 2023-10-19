
export interface ArticlesCardType {
    _id: string
    title: string
    img: string
    section: string
}

export interface ArticleCompleteType {
    _id: string
    title: string
    img: string
    section: string
    date: string
    summary: string
    tags: string[]
    content: string
}