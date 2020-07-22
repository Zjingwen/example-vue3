<template>
  <div>
    mapping-an-array-to-elements-with-v-for
    <p v-for="(item,i) in items" :key="i">{{item.msg}}</p>
    <ul>
      <li v-for="(value,name,i) in myObject" :key="i">
        {{i}} . {{name}} . {{value}}
      </li>
    </ul>
    <span v-for="n in 10" :key="n">{{n}}</span>
  </div>
</template>
<script>
export default {
  name: "mapping-an-array-to-elements-with-v-for",
  data: () => ({
    items: [{ msg: "Foo" }, { msg: "Bar" }],
    myObject: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10"
    }
  })
};
</script>