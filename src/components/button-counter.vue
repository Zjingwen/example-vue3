<template>
  <div>
    {{title}}
    <button @click="count++">button-counter {{count}}</button>
  </div>
</template>
<script>
export default{
  name: 'button-counter',
  props:['title'],
  data:()=>({
    count: 0,
  }),
  methods:{

  }
}
</script>