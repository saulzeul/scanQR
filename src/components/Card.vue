<template>
  <div class="card">
    <p :class="[{center, medium}, 'description']">{{description}}</p>
    <p :class="[{center}, 'name']">{{name}}</p>
  </div>
</template>
<script>
export default {
  props: ["name", "description", "center", "medium"]
};
</script>
<style lang="scss">
.card {
  background-color: white;
  width: 100%;
  height: auto;
  border: solid 1px #d8dce5;
  border-radius: 5px;
}
.card > p {
  margin: 10px;
}
.name {
  color: gray;
  font-weight: 400;
}
.center {
    text-align: center;
}
.medium {
    font-size: x-large;
}
</style>