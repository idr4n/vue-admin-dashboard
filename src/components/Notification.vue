<template>
    <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutRight"
    >
        <div v-show="show" class="bubble">
            <div class="message">{{ text }}</div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Notification",
    props: {
        text: String
    },
    data() {
        return {
            show: false
        };
    },
    mounted() {
        this.show = true;
        setTimeout(() => {
            this.show = false;
        }, 3000);
    }
};
</script>

<style scoped lang="scss">
.bubble {
    border-radius: 6px;
    position: absolute;
    top: 5%;
    padding: 5px 10px 5px 10px;
    background: $blue;
}

.message {
    @include medium-text;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>