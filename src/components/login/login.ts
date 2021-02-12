import { Component, Vue } from 'vue-property-decorator';
import { FingerprintAuth } from 'nativescript-fingerprint-auth';

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
                //
            } else {
                //
            }
        } catch (error) {
            //
        }
    }

    private async mounted() {
        await this.biometricsCheck();
    }
}

export {
    Login as default,
    Login
}