<template lang="pug">
q-page#list-articles
  h3 Articles
  q-table(:columns="columns" :data="articles")
    template(v-slot:body-cell-links="{ row }")
      q-td
        q-btn(flat icon="visibility" title="read" :to="{ name: 'ShowArticlePage', params: { slug: row.slug } }")/
        q-btn(flat icon="edit" title="edit" :to="{ name: 'EditArticleModal', params: { slug: row.slug } }")/
        q-btn(flat icon="delete" title="delete" @click="deleteArticle(row)")/

  .q-py-md
    q-btn(color="primary" label="New article" :to="{ name: 'CreateArticleModal' }")/

  router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Article, QTableColumn } from '@/types'
import { Confirm, NotifySuccess } from '@/decorators'

@Component
export default class ListArticles extends Vue {
  columns: QTableColumn[] = [
    { name: 'title', label: 'Title', field: 'title' },
    { name: 'description', label: 'Description', field: 'description' },
    { name: 'tags', label: 'Tags', field: (row: Article) => row.tagList.join(',') },
    { name: 'created', label: 'Created', field: (row: Article) => new Date(row.created).toLocaleString('en') },
    { name: 'author', label: 'Author', field: (row: Article) => row.author.username },
    { name: 'links', label: '' }
  ]

  get articles (): Article[] {
    return this.$store.getters['articles/all']
  }

  created (): void {
    this.$store.dispatch('articles/fetchAll')
  }

  @Confirm({
    title: 'Destroy article',
    message: 'Are you sure you want to destroy this article? This operation cannot be undone.'
  })
  @NotifySuccess('Article destroyed successfully')
  deleteArticle (article: Article): Promise<void> {
    return this.$store.dispatch('articles/remove', article)
  }
}
</script>

<style lang="scss">
.q-table td.q-td:last-child {
  width: 108px;
}
</style>
