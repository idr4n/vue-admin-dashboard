<template>
    <div
        class="container"
        :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode
        }"
    >
        <RequestAccount/>
        <div class="login">
            <img src="@/assets/logo-light.svg" alt="logo" v-show="isDarkMode">
            <img src="@/assets/logo-dark.svg" alt="logo" v-show="!isDarkMode">
            <h4
                :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
            >Sign into the Dashboard</h4>
            <input
                type="email"
                placeholder="Email"
                :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
            >
            <input
                type="password"
                placeholder="Password"
                :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
            >
            <button>Sign In</button>
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

export default {
    name: "Signin",
    components: {
        RequestAccount,
        ThemeSwitch
    },
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode;
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