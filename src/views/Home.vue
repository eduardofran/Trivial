<template>
  <div class="home">
    <h1>Pon a prueba tu cultura general</h1>
    <div class="text-center">
      <v-btn rounded color="primary" dark @click="getTenFirst"
        >Rounded Button</v-btn
      >
      {{ tenQuestions }}
    </div>
  </div>
</template>

<script>
import APIServices from "../services/Service";
export default {
  name: "Home",
  data() {
    return {
      tenQuestions: {}
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
  }
};
</script>
