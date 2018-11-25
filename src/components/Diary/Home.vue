<template lang="pug">
    div
        div
            router-link(:to='{name:`Main`}') Logout
            h1 여기가 실제 게시판
            input(type=text)
            button(@click='add') &#8629;
        div
            div date
            div @{{name}}
            div {{comment}}
            button(@click='edit') 수정 또는 삭제 &#9998;
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			name: 'aran',
			comment: 'text test',
		};
	},
	methods: {
		add() {
			console.log('등록을 할거임');
		},
		edit() {
			console.log('수정 또는 삭제');
		},
	},
	created() {},
};
</script>

<style scoped>
#date {
	font-family: 'Gaegu', cursive;
	font-size: 1.5em;
}
</style>
