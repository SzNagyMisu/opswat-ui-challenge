<template lang="pug">
q-page#show-article-page(v-if="article")
  .text-h3(v-text="article.title")/
  .text-subtitle1(v-text="createdAt")
  .text-weight-bold.q-py-md(v-text="article.description")/
  .text-body1(v-text="article.body")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '@/types'
import articleService from '@/services/article-service'

@Component
export default class ShowArticlePage extends Vue {
  @Prop(String) slug!: string

  article: Article = {} as Article

  async created (): Promise<void> {
    this.article = await articleService.getOne(this.slug)
  }

  get createdAt (): string {
    return this.article && new Date(this.article.created).toLocaleDateString('en', {
      month: 'short', day: 'numeric',
      year: 'numeric', hour: 'numeric', minute: 'numeric'
    })
  }
}
</script>
