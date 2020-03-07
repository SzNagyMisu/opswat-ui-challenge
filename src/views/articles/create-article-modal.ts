import { Component } from 'vue-property-decorator'
import ArticleForm from '@/components/articles/article-form.vue'
import { NewArticle } from '@/types'
import { NotifySuccess, NavigateThen } from '@/decorators'

@Component
export default class CreateArticleModal extends ArticleForm {
  action = 'Create'
  article: NewArticle = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  @NotifySuccess('Article created successfully')
  @NavigateThen({ name: 'ListArticles' })
  save (): Promise<void> {
    return this.$store.dispatch('articles/create', this.article)
  }
}
