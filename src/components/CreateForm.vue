<template>
  <div>
    <div id="addTodoForm">
      <input type="text" :value="inputtingText" @change="handleChange" />
      <button @click="handleAdd" >Add</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "createform",
  data: function() {
    return {
      inputtingText: ""
    };
  },
  methods: {
    handleAdd: function() {
        this.$store.commit("addNewToDo",this.inputtingText)
        console.log(this.$store.state.todoList);
        // this.$emit("addNewToDo",this.inputtingText),
        this.inputtingText = "";
    },
    handleChange: function(event){
        this.inputtingText = event.target.value;
    }
  }
};
</script>

<style>
</style>