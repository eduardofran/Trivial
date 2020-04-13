<template>
  <div>
    <h1>Your Game has Started</h1>
    <Question
      :question="questions[0].question"
      :answer="questions[0].correct_answer"
    ></Question>
    <v-container fluid>
      <v-radio-group v-model="userAnswer" :mandatory="false">
        <v-radio label="True" value="True"></v-radio>
        <v-radio label="False" value="False"></v-radio>
      </v-radio-group>
    </v-container>
    <v-btn @click="nextQuestion">Next</v-btn>
  </div>
</template>

<script>
import api from "@/services/api.js";
import Question from "@/components/Question";

export default {
  name: "Game",
  data() {
    return {
      questions: [],
      userAnswer: "True",
      userAnswers: []
    };
  },
  async created() {
    this.questions = await api.getTenEasy();
  },
  components: {
    Question
  },
  methods: {
    nextQuestion() {
      if (this.userAnswer == this.questions[0].correct_answer) {
        this.userAnswers.push(this.userAnswer);
      }
    }
  }
};
</script>
