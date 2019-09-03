export default{
    // strict:true,
    state:{
        todoList:[],
        currentFilter:""
        
    },
    mutations:{
        addNewToDo(state,inputtingText){
            state.todoList.push({
                content: inputtingText,
                status: "active"
            });
        },
       
    }
}