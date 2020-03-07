<template lang="pug">
q-dialog#create-article-modal(:value="true" persistent)
  q-card
    q-form(@submit="onSubmit")
      q-card-section
        .text-h5 Create Article
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
          q-btn.q-px-sm.q-mx-sm(type="submit" label="Create" color="primary")/
          q-btn.q-px-sm.q-mx-sm(type="button" label="Cancel" flat :to="{ name: 'ListArticles' }")/
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { NewArticle, Article } from '@/types'

@Component
export default class CreateArticleModal extends Vue {
  article: NewArticle = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  get tagListHandler (): string {
    return this.article.tagList.join(',')
  }

  set tagListHandler (tagList: string) {
    this.article.tagList = tagList.split(',')
  }

  onSubmit (): void {
    this.$store.dispatch('articles/create', this.article).then((): void => {
      this.$q.notify({
        message: 'Article created successfully',
        type: 'positive',
        position: 'top-right'
      })
      this.$router.push({ name: 'ListArticles' })
    })
  }
}
</script>

<style lang="scss">
.q-card {
  width: 70%;
}
</style>
