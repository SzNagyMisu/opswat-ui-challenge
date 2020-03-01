<template lang="pug">
q-layout#main-layout.row
  q-page-container.q-mx-lg
    //- TODO header
    router-view/
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MainLayout extends Vue {}
</script>
