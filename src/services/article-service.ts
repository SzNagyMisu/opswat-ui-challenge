import { NewArticle, Article } from '@/types'
import AuthenticatableService from './authenticatable-service'

class ArticleService extends AuthenticatableService {
  async getList (): Promise<Article[]> {
    const { articles } = await this.http.get('articles')
    return articles
  }

  async getOne (slug: string): Promise<Article> {
    const { article } = await this.http.get(`articles/${slug}`)
    return article
  }

  async create (articleData: NewArticle): Promise<Article> {
    const article: Article = await this.http.post('articles', articleData)
    return article
  }

  async update (articleData: Article): Promise<Article> {
    const { article } = await this.http.put(`articles/${articleData.slug}`, articleData)
    return article
  }

  async destroy (slug: string): Promise<void> {
    await this.http.delete(`articles/${slug}`)
  }
}

export default new ArticleService
