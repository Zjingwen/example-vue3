<template>
  <div>
    base-example
    <button-counter title="My journey with Vue" />
    <button-counter title="Blogging with Vue" />
    <button-counter title="Why Vue is so fun" />
    <hr />
    <button-counter 
      v-for="(item) in props"
      :key="item.id"
      :title="item.title"
    />
  </div>
</template>
<script>
import ButtonCounter from "../components/button-counter.vue";
export default {
  name: "base-example",
  data: () => ({
    props: [
      { id: 1, title: "My journey with Vue" },
      { id: 1, title: "Blogging with Vue" },
      { id: 1, title: "Why Vue is so fun" }
    ]
  }),
  components: {
    ButtonCounter
  }
};
</script>