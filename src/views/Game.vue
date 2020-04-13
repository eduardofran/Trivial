<template>
  <div>
    <h1>Your Game has Started</h1>
    <Question
      :question="questions[0].question"
      :answer="questions[0].correct_answer"
    ></Question>
  </div>
</template>

<script>
import api from "@/services/api.js";
import Question from "@/components/Question";

export default {
  name: "Game",
  data() {
    return {
      questions: null
    };
  },
  async created() {
    this.questions = await api.getTenEasy();
  },
  components: {
    Question
  }
};
</script>
