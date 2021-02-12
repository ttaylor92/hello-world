import { Vue, Prop, Component } from 'vue-property-decorator';
import Login from '@/components/login';

@Component({ name: 'App' })
class App extends Vue {
    private message = 'Hello World!';

    private goToDetailPage(): void {
        this.$navigateTo(Login);
    }

    private mounted() {
        //
    }
}

export {
    App as default,
    App
}