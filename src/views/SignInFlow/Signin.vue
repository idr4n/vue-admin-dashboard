<template>
    <div
        class="container"
        :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode
        }"
    >
        <Notification v-if="hasText" :text="text"/>
        <RequestAccount/>
        <div class="login">
            <img src="@/assets/logo-light.svg" alt="logo" v-show="isDarkMode">
            <img src="@/assets/logo-dark.svg" alt="logo" v-show="!isDarkMode">
            <h4
                :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
            >Sign into the Dashboard</h4>
            <form @submit.prevent="onSubmit" action>
                <input
                    type="email"
                    placeholder="Email"
                    :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
                    v-model="email"
                    required
                >
                <input
                    type="password"
                    placeholder="Password"
                    :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
                    v-model="password"
                    required
                >
                <button>Sign In</button>
            </form>
            <router-link
                to="/recover"
                :class="{'light-link': isDarkMode, 'dark-link': !isDarkMode}"
            >Forgot your password?</router-link>
            <theme-switch/>
        </div>
    </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
    name: "Signin",
    data() {
        return {
            email: null,
            password: null,
            hasText: false,
            text: ""
        };
    },
    components: {
        RequestAccount,
        ThemeSwitch,
        Notification
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
        }
    },
    methods: {
        onSubmit() {
            const email = this.email;
            const password = this.password;

            auth.login(email, password, true)
                .then(response => {
                    this.$router.replace("/");
                })
                .catch(error => alert("Error: " + error));
        }
    },
    mounted() {
        const params = this.$route.params;

        if (params.userLoggedOut) {
            this.hasText = true;
            this.text = "You have logged out!";
        }
    }
};
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
}

.login {
    width: 400px;
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
}
</style>