import ListArticles from '@/views/articles/list-articles.vue'
import ShowArticlePage from '@/views/articles/show-article-page.vue'
import CreateArticleModal from '@/views/articles/create-article-modal.vue'
import EditArticleModal from '@/views/articles/edit-article-modal.vue'

export default [
  { path: '/articles', name: 'ListArticles', component: ListArticles, children: [
    { path: 'new', name: 'CreateArticleModal', component: CreateArticleModal },
    { path: ':slug/edit', name: 'EditArticleModal', component: EditArticleModal, props: true }
  ] },
  { path: '/articles/:slug', name: 'ShowArticlePage', component: ShowArticlePage, props: true }
]
