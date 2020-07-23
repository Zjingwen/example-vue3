<template>
  <div>
    {{title}}
    <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
  </div>
</template>
<script>
export default {
  name: 'component-props',
  props:['title'],
};
</script>