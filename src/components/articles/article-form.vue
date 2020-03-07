<template lang="pug">
q-dialog(:id="`${action.toLowerCase()}-article-modal`" :value="true" persistent)
  q-card
    q-form(@submit="save")
      q-card-section
        .text-h5 {{ action }} Article
      q-card-section
        .q-py-md
          q-input(v-model="article.title" label="Title")/
        .q-py-md
          q-input(v-model="article.description" label="Description")/
        .q-py-md
          q-input(v-model="article.body" label="Body" type="textarea")/
        .q-py-md
          q-input(v-model="tagListHandler" label="Tag list" hint="List tags comma separated")/
      q-card-actions(align="right")
        .q-py-md
          q-btn.q-px-sm.q-mx-sm(type="submit" label="Save" color="primary")/
          q-btn.q-px-sm.q-mx-sm(type="button" label="Cancel" flat :to="{ name: 'ListArticles' }")/
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { NewArticle, Article } from '@/types'
import { NavigateThen } from '@/decorators'

@Component
export default class ArticleForm extends Vue {
  action!: string
  article!: NewArticle|Article

  get tagListHandler (): string {
    return this.article.tagList?.join(',')
  }

  set tagListHandler (tagList: string) {
    this.article.tagList = tagList.split(',')
  }
}
</script>

<style lang="scss">
.q-card {
  width: 70%;
}
</style>
