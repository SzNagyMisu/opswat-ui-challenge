<template lang="pug">
q-layout#login-layout.row
  q-page-container.col-6.offset-3
    router-view/
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoginLayout extends Vue {}
</script>
