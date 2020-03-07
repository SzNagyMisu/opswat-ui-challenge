import Vue from 'vue'
import { ActionContext } from 'vuex'
import { NewArticle, Article } from '@/types'
import articleService from '@/services/article-service'

interface ArticleItems {
  [key: string]: Article
}

interface ArticlesState {
  items: ArticleItems
}

export default {
  namespaced: true,

  state: {
    items: {}
  },

  getters: {
    all: (state: ArticlesState): Article[] => Object.values(state.items),
    find: (state: ArticlesState) => (slug: string): Article|void => state.items[slug]
  },

  mutations: {
    set: (state: ArticlesState, article: Article): void => {
      Vue.set(state.items, article.slug, article)
    },
    remove: (state: ArticlesState, article: Article): void => {
      Vue.delete(state.items, article.slug)
    }
  },

  actions: {
    fetchAll: async (context: ActionContext<ArticlesState, any>): Promise<void> => {
      const articles: Article[] = await articleService.getList()
      articles.forEach((article: Article) => {
        context.commit('set', article)
      })
    },
    create: async (context: ActionContext<ArticlesState, any>, articleData: NewArticle): Promise<void> => {
      const article: Article = await articleService.create(articleData)
      article.author = context.rootGetters['currentUser/get']
      context.commit('set', article)
    },
    update: async (context: ActionContext<ArticlesState, any>, articleData: Article): Promise<void> => {
      const article: Article = await articleService.update(articleData)
      context.commit('remove', articleData) // in case slug changes too
      context.commit('set', article)
    },
    remove: async (context: ActionContext<ArticlesState, any>, article: Article): Promise<void> => {
      await articleService.destroy(article.slug)
      context.commit('remove', article)
    },
  }
}
