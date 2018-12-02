import axios from "axios";
// import moment from "moment";
const DOMAIN = "http://localhost:3500";
// const thisMonth = new Date().getMonth();

export default {
  computed: {
    indicators() {
      return this.bars ? "bars" : "dots";
    }
  },
  data() {
    return {
      /**
       * 1> is-success : green 완전 신난 날
       * 2> is-warning : yellow 기쁜 날
       * 3> is-link : purple 평범한 날
       * 4> is-info : blue 우울한 날
       * 5> is-danger : red 화난 날
       */
      date: new Date(),
      events: [],
      bars: "bars",
      event: {
        date: new Date(),
        type: "",
        comment: ""
      }
    };
  },
  methods: {
    setEvent(res) {
      // const feel = [
      //   "is-success",
      //   "is-warning",
      //   "is-link",
      //   "is-info",
      //   "is-danger"
      // ];

      for (let mark of res) {
        let dateRes = mark.mark_date.split("-");
        this.events.push(new Date(dateRes[0], dateRes[1] - 1, dateRes[2]));
      }
      // for (let mark of res) {
      //   let dateRes = mark.mark_date.split("-");
      //   this.event.date = new Date(dateRes[0], dateRes[1] - 1, dateRes[2]);
      //   this.event.type = feel[mark.mark_feeling];

      //   this.eventss.push = this.event;
      // }

      // this.events[1].type.reduce(feel[mark.mark_feeling]);
      // this.event.comment = mark.mark_comment;
    },
    getAll() {
      axios
        .get(`${DOMAIN}/lines`)
        .then(res => this.setEvent(res.data.data))
        .catch(e => console.log(e));
    }
  },
  created() {
    this.getAll()
  }
};