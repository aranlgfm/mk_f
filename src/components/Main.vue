<template lang="pug">
    div
        h1 test aran!!!
        input(type=text)
        button(@click='start') test
</template>

<script>
import router from '@/router'

export default {
    methods:{
        start(){
            console.log('click this')
            router.push({name: `Home`})
        }
    }
};
</script>
