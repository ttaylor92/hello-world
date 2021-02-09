import { Vue, Prop, Component } from 'vue-property-decorator';
import HelloWorld from '../HelloWorld';

@Component({ components: { HelloWorld }, name: 'App' })
class App extends Vue {
    private message = 'Hello World!';
    
    private goToDetailPage(): void {
        // this.$navigateTo(HelloWorld);
        console.log(this)
    }

    private mounted() {
        //
    }
}

export {
    App as default,
    App
}