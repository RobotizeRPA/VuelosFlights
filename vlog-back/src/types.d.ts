export interface CreateNew {
    title: string;
    summary: string;
    content: string;
    img: string;
    section: string;
    date: string;
    tags: string[]
    publico: boolean
  }


export interface ArticleSectionModel {
  section: string
  page: string
}

export interface ArticleUpdateModel {
  _id: string
  title: string;
  summary: string;
  content: string;
  img: string;
  section: string;
  date: string;
  tags: string[]
  publico: boolean
}
