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
    mutations: {
        addOneItem(state, item) {
            const obj = {
                completed: false,
                item: item
              };
              localStorage.setItem(item, JSON.stringify(obj));
              state.todoItems.push(obj)
        }
    }
});