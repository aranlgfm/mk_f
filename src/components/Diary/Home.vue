<template lang="pug">
div
    div
        button(class='button is-primary btn' @click='goMain') Logout
    hr
    div(class='center')
        b-field(grouped)
            b-input(type='text' placeholder='comment' rounded expanded)
            p(class="control")
                button(@click='add' class='button is-primary btn') &#8629;
    hr
    div(class='center notification')
        b-field(grouped)
            div(class='commentRes') date
            div(class='commentRes') @{{name}}
            div(class='commentRes') {{comment}}
            button(@click='edit' class='btn') 수정 또는 삭제 &#9998;
</template>

<script>
export default {
  // b-field(label="Name")
  // 		b-input(value="Kevin Garvey")
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
    goMain() {
      this.$router.push({ name: 'Main' })
    }
  },
  created() { },
};
</script>

<style scoped>
#date {
    font-family: 'Gaegu', cursive;
    font-size: 1.5em;
}
.center {
    margin: auto;
    width: 500px;
}

.commentRes {
    font-size: 1.2em;
}

.btn {
    border-radius: 20px;
}
</style>
