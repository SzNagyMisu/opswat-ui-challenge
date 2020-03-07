<template lang="pug">
q-dialog#edit-article-modal(:value="true" persistent)
  q-card
    q-form(@submit="onSubmit")
      q-card-section
        .text-h5 Edit Article
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
          q-btn.q-px-sm.q-mx-sm(type="submit" label="Update" color="primary")/
          q-btn.q-px-sm.q-mx-sm(type="button" label="Cancel" flat :to="{ name: 'ListArticles' }")/
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '@/types'

@Component
export default class EditArticleModal extends Vue { // TODO dry
  @Prop(String) private slug!: string

  get article (): Article {
    return Object.assign({}, this.$store.getters['articles/find'](this.slug)) as Article
  }

  get tagListHandler (): string {
    return this.article.tagList && this.article.tagList.join(',')
  }

  set tagListHandler (tagList: string) {
    this.article.tagList = tagList.split(',')
  }

  onSubmit (): void {
    this.$store.dispatch('articles/update', this.article).then((): void => {
      this.$q.notify({
        message: 'Article updated successfully',
        type: 'positive',
        position: 'top-right'
      })
      this.$router.push({ name: 'ListArticles' })
    })

  }
}
</script>
