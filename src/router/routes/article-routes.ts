import { RouteConfig } from 'vue-router'
import ListArticles from '@/views/articles/list-articles.vue'
import ShowArticlePage from '@/views/articles/show-article-page.vue'
import CreateArticleModal from '@/views/articles/create-article-modal'
import EditArticleModal from '@/views/articles/edit-article-modal'

const articleRoutes: RouteConfig[] = [
  { path: '/articles', name: 'ListArticles', component: ListArticles, children: [
    { path: 'new', name: 'CreateArticleModal', component: CreateArticleModal },
    { path: ':slug/edit', name: 'EditArticleModal', component: EditArticleModal, props: true }
  ] },
  { path: '/articles/:slug', name: 'ShowArticlePage', component: ShowArticlePage, props: true }
]

export default articleRoutes
