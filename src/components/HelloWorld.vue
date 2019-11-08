<template>
  <div>
    <h1>{{name}}</h1>
    <ul v-for="item in names" :key="item">
      <li>{{item}}</li>
    </ul>
    <h2>Number: {{keke}}</h2>
    <h4>Computed: {{length}}</h4>
    <button @click="addValue">Change Number</button><br> <hr>
    <input type="text" v-model.trim="item" />

    <button @click="add">Add Name</button>
    <button @click="remove">Remove Name</button>
  </div>
</template>

<script>
import api from "./comp";
export default {
  setup() {
    const { names, name,item, add, remove ,keke,length,addValue} = api();
    return { names, name,item, add, remove,keke ,length,addValue};
  }
};
</script>
