export default{
    // strict:true,
    state:{
        todoList:[],
        currentFilter:'active'
        
    },
    mutations:{
        addNewToDo(state,inputtingText){
            state.todoList.push({
                content: inputtingText,
                status: "active"
            });
        },
        statusUpdate(state,status){
            state.currentFilter = status;
        }
       
    }
}