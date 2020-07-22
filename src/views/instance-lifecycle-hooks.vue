<template>
  <div>
    <h1>instance-lifecycle-hooks</h1>
    <handle-unmounted-and-beforeUnmount v-if="show"/>
    <button @click="handleShow">触发beforeUpdate/updated/beforeUnmount/unmounted</button>
  </div>
</template>

<script>
import HandleUnmountedAndBeforeUnmount from '../components/instance-lifecycle-hook-unmounted-beforeUnmount.vue';
export default {
  name: "instance-lifecycle-hooks",
  components:{
    HandleUnmountedAndBeforeUnmount
  },
  data:()=>({
    msg: '0',
    show: 1
  }),
  beforeCreate() {
    console.group("beforeCreate");
    console.log(this);
    console.groupEnd();
  },
  created() {
    console.group("created");
    console.log(this);
    console.groupEnd();
  },
  beforeMount() {
    console.group("beforeMount");
    console.log(this);
    console.groupEnd();
  },
  mounted() {
    console.group("mounted");
    console.log(this);
    console.groupEnd();
  },
  beforeUpdate() {
    console.group("beforeUpdate");
    console.log(this);
    console.groupEnd();
  },
  updated() {
    console.group("updated");
    console.log(this);
    console.groupEnd();
  },
  beforeUnmount() {
    console.group("beforeUnmount");
    console.log(this);
    console.groupEnd();
  },
  unmounted() {
    console.group("unmounted");
    console.log(this);
    console.groupEnd();
  },
  methods:{
    handleCount(){
      this.msg++;
    },
    handleShow(){
      this.show = !this.show;
    }
  }
};
</script>
