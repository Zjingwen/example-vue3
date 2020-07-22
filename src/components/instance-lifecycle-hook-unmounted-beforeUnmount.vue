<template>
  <div>
    beforeUpdate/updated/beforeUnmount/unmounted
  </div>
</template>

<script>
export default {
  name: "handle-unmounted-and-beforeUnmount",
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
};
</script>
