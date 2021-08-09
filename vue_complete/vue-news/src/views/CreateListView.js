import ListView from './ListView';
import bus from '../utils/bus';

export default function createListView(name) {
    return {
        //재사용할 컴포넌트 옵션들이 들어갈 자리
        // data, methods ...
        name,
        created(){
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_List', this.$route.name)
            .then(() => {
              console.log("fetched news");
              bus.$emit('end:spinner');
            })
            .catch((error) => {
              console.error(error);
            })
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}