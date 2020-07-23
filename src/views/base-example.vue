<template>
  <div>
    <p>props传值</p>
    <button-counter title="My journey with Vue" />
    <button-counter title="Blogging with Vue" />
    <button-counter title="Why Vue is so fun" />
    <hr />
    <p>循环渲染组件</p>
    <button-counter v-for="(item) in posts" :key="item.id" :title="item.title" />
    <hr />
    <p>组件props传递 v-model值</p>
      <div v-bind:style="{fontSize: postFontSize+'em'}">
        <component-proos 
          v-for="(item) in posts" 
          :key="item.id" 
          :title="item.title" 
          @enlarge-text="postFontSize += $event" 
        />
      </div>
    <hr />
  </div>
</template>
<script>
import ButtonCounter from "../components/button-counter.vue";
import ComponentProos from "../components/component-proos.vue";

export default {
  name: "base-example",
  data: () => ({
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 1, title: "Blogging with Vue" },
      { id: 1, title: "Why Vue is so fun" },
    ],
    postFontSize: 1,
  }),
  components: {
    ButtonCounter,
    ComponentProos,
  },
  methods: {
  },
};
</script>