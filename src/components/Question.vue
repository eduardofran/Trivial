<template>
  <div>
    <h2 v-html="question"></h2>
    <pre>{{ answer }}</pre>
  </div>
</template>

<script>
export default {
  name: "question",
  props: {
    question: String,
    answer: Boolean
  }
};
</script>

<style lang="scss" scoped></style>

// { // "category": "Politics", // "type": "boolean", // "difficulty": "easy",
// "question": "There was a satirical candidate named &quot;Deez Nuts&quot;
running in the 2016 US presidential elections.", // "correct_answer": "True", //
"incorrect_answers": [ "False" ] // }
