<template>
  <div>
    component-props: {{val}}
    <br />
    <input type="text" v-model="v" />
  </div>
</template>
<script>
export default {
  name: 'component-props',
  props:['val'],
  data:()=>({
    v: ''
  }),
  watch:{
    v(){
      // 子组件同步传递给父组件
      this.$emit('update:foo',`v-emit-component-props: ${this.v}`)
    },
    val(){
      this.$emit('update:foo',`val-emit-component-props: ${this.val}`)
    }
  }
};
</script>