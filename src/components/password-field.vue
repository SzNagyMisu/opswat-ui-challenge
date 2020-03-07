<template lang="pug">
q-input(:value="value" v-bind="$attrs" v-on="listeners" :type="type")
  template(v-slot:append)
    q-icon.cursor-pointer(:name="iconName" @click="toggle")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PasswordField extends Vue {
  @Prop(String) value!: string

  visible: boolean = false

  get listeners (): object {
    return {
      ...this.$listeners,
      input: this.onInput
    }
  }

  get type (): string {
    return this.visible ? 'text' : 'password'
  }

  get iconName (): string {
    return this.visible ? 'visibility_off' : 'visibility'
  }

  onInput (value: string): void {
    this.$emit('input', value)
  }

  toggle (): void {
    this.visible = !this.visible
  }
}
</script>
