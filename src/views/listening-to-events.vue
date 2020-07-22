<template>
  <div>
    listening-to-events
    <button @click="one($event),two($event)">one event and two event</button>
  </div>
</template>
<script>
export default {
  name: 'listening-to-events',
  methods:{
    one(event){
      console.log(event)
    },
    two(event){
      console.log(event)
    }
  }
}
</script>