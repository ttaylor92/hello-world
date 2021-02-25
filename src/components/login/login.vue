<script lang="ts" src="./login.ts"></script>

<template>
    <Page>
        <FlexboxLayout flexDirection="column" backgroundColor="FFF">
            <GridLayout v-if="isFaceAvailable" columns="*" rows="*">
                <Button text="Use Face ID to Log in" @tap="validateFingerPrint" />
            </GridLayout>
            <GridLayout v-if="isFingerPrintAvalable" columns="*" rows="*">
                <Button text="Use Fingerprint to Log in" @tap="validateFingerPrint" />
            </GridLayout>
            <!-- <FlexboxLayout flexWrap="wrap">
                <Image v-if="isFaceAvailable" width="30%" stretch="aspectFit" src="~/assets/images/face_id_icon.jpg" />
                <Image
                    v-if="isFingerPrintAvalable"
                    @tap="validateFingerPrint"
                    width="30%"
                    stretch="aspectFit"
                    src="~/assets/images/finger_scan_icon.png"
                />
            </FlexboxLayout> -->
        </FlexboxLayout>
    </Page>
</template>