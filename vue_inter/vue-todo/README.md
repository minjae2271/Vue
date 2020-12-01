# Vuex



## Vex 시작하기

* Src 폴더 밑에 store 폴더를 만들고  store.js 파일 생성

```javascript
//store.js
import Vue from 'vue'
import Vuex from 'vuex'

// use -> global 하게 쓰겠다.
Vue.use(Vuex);

export const store = new Vuex.Store({
///...
})
```



## Vuex 기술요소

* **State** : 여러 컴포넌트에 공유되는 데이터 : `data`
* **getters** : 연산된 state 값에 접근하는 속성 : `computed`
* **mutations** : state의 값을 변경하는 로직 : `methods`
* **actions** : 비동기 처리 로직을 선언하는 메서드 : `async methods`



## State?

```vue
//vue
data: {
	message: "hi"
}

//vuex
state: {
	message: "hola"
}
```

```html
<!--vue-->
<p>{{message}}</p>

<!--vuex-->
<p>{{this.$store.state.message}}</p>
```



## getters?

* State 값에 접근하는 속성이자 `computed()` 처럼 미리 연산된 값에 접근하는 속성

```javascript
//store.js
state: {
  num: 10;
},
getters: {
  getNumber(state){
    return state.num;
  },
  doubleNumber(state){
    return state.num * 2;
  }
}
```

```html
<p>
  {{this.$store.getters.getNumber}}
</p>
<p>
  {{this.$store.getters.doubleNumber}}
</p>
```



## mutation?

* State 값을 변경할 수 있는 **유일한 방법**이자 메서드

* mutation은 `commit()`으로` 실행 시킨다.

```javascript
//store.js
state: { num: 10 },
mutations: {
  //항상 첫번째 인자로 state!
  printNumbers(state) {
    return state.num;
  },
  sumNumbers(state, anotherNum){
    return state.num + anotherNum;
  }
}

//App.vue
this.$store.commit('printNumbers');
// 20이 같이 날아간다~
this.$store.commit('sumNumbers',20);
```



## mutation의 commit() 형식

* state를 변경하기 위해 mutations를 동작 시킬 때 인자(payload)를 전달 할 수 있음.

```javascript
//store.js
state: { storeNum: 10 },
mutations: {
  //항상 첫번째 인자로 state!
  modifyState(state, payload) {
    console.log(payload.str)
    return state.storeNum += payload.num;
  }
}

//App.vue
this.$store.commit('modifyState', {
  str: 'passed from paylod',
  num: 10
});
```

