import { Component, Vue } from 'vue-property-decorator';
import { FingerprintAuth } from 'nativescript-fingerprint-auth';
import App from '@/components/App';
import UserStore from '@/store/user';

@Component
class Login extends Vue {
    private username = '';
    private password = '';
    private biometricAuthentication = new FingerprintAuth();
    private isFingerPrintAvalable = false;
    private isFaceAvailable = false;


    private async biometricsCheck() {
        const { touch, face } = await this.biometricAuthentication.available();
        this.isFaceAvailable = face;
        this.isFingerPrintAvalable = touch;
    }

    private async validateFingerPrint() {
        try {
            const result = await this.biometricAuthentication.verifyFingerprint({
                title: 'Confirm your identity',
                message: "Please place your finger on the sensor",
                authenticationValidityDuration: 10
            })

            if (result === undefined) {
                UserStore.login();
                this.$navigateTo(App);
            } else {
                //
            }
        } catch (error) {
            //
        }
    }

    private async mounted() {
        if(UserStore.verified) {
            this.$navigateTo(App);
        } else {
            await this.biometricsCheck();
        }
    }
}

export {
    Login as default,
    Login
}