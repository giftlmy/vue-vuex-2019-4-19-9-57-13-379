<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
         <CreateForm></CreateForm>
        <div id="list">
            <ul>
                <li v-for="(item,index) in filteredTodoList" :key="index">
                    <input type="checkbox" @change="changeStatus(item)" v-model="item.selected"/>{{item.content}}
                </li>
            </ul>
        </div>
        <div class="filter">
            当前状态：{{currentFilter}}
            <button :class="{selected: type == 0}" @click="handleStatusUpdate('all')">All</button>
            <button :class="{selected: type == 1}" @click="handleStatusUpdate('active')">Active</button>
            <button :class="{selected: type == 2}" @click="handleStatusUpdate('completed')">Completed</button> 
        </div>
       
    </div>
</template>

<script>
    import CreateForm from "./components/CreateForm";
    export default {
       
        name: 'app',
        components: {
           CreateForm
        },
        data: function () {
            return {
                /**
                 * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
                 * 定义了 todo 的两种状态 completed、active，默认为 active
                 */
                
            }
        },
        methods:{
            handleStatusUpdate:function(status){
                this.$store.commit("statusUpdate",status);
            },
           changeStatus: function(item){
               if(item.selected == true){
                    item.status = 'completed'
               }else{
                    item.status = 'active'
               }
               
           }
            
        },
        computed:{
            filteredTodoList:function(){
                return this.todoList.filter(
                    element => element.status===this.currentFilter || this.currentFilter === "all");
                // return fileredList;
            },
            todoList: function(){
                return this.$store.state.todoList;
            },
            currentFilter: function(){
                return this.$store.state.currentFilter;
            }

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
    #filter div {
        padding: 10px;
        margin: 5px 10px;
        color: #fc999b;
    }
    #filter div:hover  {
        border: 1px solid;
        border-radius: 3px;
        cursor: pointer;
    }
    .selected {
        border: 1px solid;
        border-radius: 3px;
        cursor: pointer;
    }
</style>
