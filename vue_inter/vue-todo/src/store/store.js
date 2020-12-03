import Vue from 'vue'
import Vuex from 'vuex'

// use -> global 하게 쓰겠다.
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0){
          for(let i=0; i < localStorage.length; i++){
            if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
              arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
              // this.todoItems.push(localStorage.key(i))
            }
          }
        }
        return arr;
    }
}

// main.js로 export!!
export const store = new Vuex.Store({
    //
    state: {
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state){
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {
                completed: false,
                item: todoItem
              };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj)
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1);
        },
        completeOneItem(state, payload){
            // 안티루트
            //todoItem.completed = !todoItem.completed
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            // localstrorage는 update가 없다,,
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});