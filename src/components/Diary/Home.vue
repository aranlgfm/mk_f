<template lang="pug">
  div(class='center')
    div
      button(class='button is-primary btn' @click='goMain') Logout
      hr

    div
      b-field(grouped)
        b-input(type='text' placeholder='date' v-model='selectDate' rounded)
        b-input(type='text'
          placeholder='comment'
          v-model='comment'
          rounded expanded)
        p(class="control")
        button(@click='add' class='button is-primary btn') &#8629;
      hr

    div(class='notification')
      b-field(grouped)
        div(class='commentRes') date
        div(class='commentRes') @{{name}}
        div(class='commentRes') {{comment}}
        button(@click='edit' class='btn') 수정 또는 삭제 &#9998;

    div
      span
        b-field
        b-datepicker(inline v-model='date', :events='events', :indicators='indicators' :selectable-date='selectDate')
</template>

<script>
import Calendar from "./Calendar";
import axios from "axios";
import moment from "moment";
const DOMAIN = "http://localhost:3500";

export default {
  name: "home",
  data() {
    return {
      name: "",
      comment: "",
      feeling: "",
      selectDate: ""
    };
  },
  mixins: [Calendar],
  methods: {
    /**
     * / : select all [!] complate
     * /add : comment, date, feeling 추가하기 [!] complate
     * /del : date 삭제하기
     * /update : comment, date, feeling 수정하기
     * /getOne : date 한개 가져오기
     */
    add() {
      let resDate = moment(this.date).format("YYYY-MM-DD");
      axios
        .post(`${DOMAIN}/lines/add`, {
          comment: this.comment,
          date: resDate,
          feeling: 3
        })
        .then(res => {
          this.comment = "";
          this.getAll();
        })
        .catch(e => console.log(e));
    },
    edit() {
      console.log("수정 또는 삭제");
    },
    goMain() {
      this.$router.push({
        name: "Main"
      });
    }
  }
  // updated() {
  // if (this.events.find(this.date) != null) {
  //   let te = this.date;
  //   console.log(this.events.includes(te));
  // }
  // console.log(this.date);
  // this.events.find(this.date);
  // }
};
</script>

<style scoped>
#date {
  font-family: "Gaegu", cursive;
  font-size: 1.5em;
}

.center {
  margin: auto;
  width: 700px;
}

.commentRes {
  font-size: 1.2em;
}

.btn {
  border-radius: 20px;
}
</style>