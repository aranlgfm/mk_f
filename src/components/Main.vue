<template lang="pug">
    div
        h1 여기는 대문. 소셜로그인 붙일 것.
        button(@click='login' class='button is-primary') login
</template>

<script>
export default {
    methods:{
        login(){
            console.log('click this')
            this.$router.push({name: `Home`})
        }
    }
};
</script>
