import { Vue, Prop, Component } from 'vue-property-decorator';
import Login from '@/components/login';
import UserStore from '@/store/user';
import service from '@/services/account.service';

@Component({ name: 'App' })
class App extends Vue {
    private message = 'Hello World!';
    private data = '';

    private verifyNavigation(val: CustomEvent) {
        // console.log(val)
    }

    private async getData() {
        const { data, error } = await service.getData();
        this.data = JSON.stringify(data);
    }

    private async mounted() {
        if(UserStore.verified) {
            await this.getData();
        } else {
            this.$navigateTo(Login);
        }
    }
}

export {
    App as default,
    App
}