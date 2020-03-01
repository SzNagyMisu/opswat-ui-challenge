<template lang="pug">
#app
  component(:is="currentLayout")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import LoginLayout from '@/views/layouts/login-layout.vue'
import MainLayout from '@/views/layouts/main-layout.vue'

@Component({
  components: { LoginLayout, MainLayout }
})
export default class App extends Vue {
  get currentLayout (): string {
    return `${this.$route.meta.layout || 'main'}-layout`
  }
}
</script>
