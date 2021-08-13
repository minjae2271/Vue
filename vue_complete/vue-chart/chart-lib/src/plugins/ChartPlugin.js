import Chart from 'chart.js';

export default  {
    install(Vue){
        Vue.prototype.$_Chart = Chart; // $_ 권장
        // this.$_~ 로 사용
    }
}