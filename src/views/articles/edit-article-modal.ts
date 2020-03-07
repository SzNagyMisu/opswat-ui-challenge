import { Component, Prop } from 'vue-property-decorator'
import ArticleForm from '@/components/articles/article-form.vue'
import { Article } from '@/types'
import { NotifySuccess, NavigateThen } from '@/decorators'

@Component
export default class EditArticleModal extends ArticleForm {
  @Prop(String) private slug!: string

  action = 'Edit'

  get article (): Article {
    return Object.assign({}, this.$store.getters['articles/find'](this.slug)) as Article
  }

  @NotifySuccess('Article updated successfully')
  @NavigateThen({ name: 'ListArticles' })
  save (): Promise<void> {
    return this.$store.dispatch('articles/update', this.article)
  }
}
