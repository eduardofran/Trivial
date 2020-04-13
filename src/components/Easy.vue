<template>
  <div>
    <div class="form-group">
      <div class="row">
        <h5 v-for="question in tenQuestions" :key="question">
          {{question.question}}
        </h5>
        <div v-for="answer in tenQuestions" :key="answer" class="col-sm-6">
          <div class="form-check">
            <input type="radio" id="Male" value="Male" v-model="gender" />
            <label for="">{{answer.correct_answer}}</label>
          </div>
          <div class="form-check">
            <input type="radio" id="Female" value="Female" v-model="gender" />
            <label for="Female">{{answer.incorrect_answers[0]}}</label>
          </div>
             <div class="form-check">
            <input type="radio" id="Female" value="Female" v-model="gender" />
            <label for="Female">{{answer.incorrect_answers[1]}}</label>
          </div>
           <div class="form-check">
            <input type="radio" id="Female" value="Female" v-model="gender" />
            <label for="Female">{{answer.incorrect_answers[2]}}</label>
          </div>
          </div>
        </div>
      </div>
      {{tenQuestions}}
    </div>
</template>

<script>
import APIServices from "../services/Service";
export default {
    data() {
    return {
      tenQuestions: []
    };
  },
  components: {},
  methods: {
    async getTenFirst() {
      const tenQuestionResponse = await APIServices.getTenEasy();
      return (this.tenQuestions = tenQuestionResponse);
    }
  },
  mounted() {
    this.getTenFirst();
  }};
</script>

<style lang="scss" scoped></style>
