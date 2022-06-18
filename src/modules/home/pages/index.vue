<template>
  <main>
    <section class="questions p-lg">
      <h1>2-end</h1>
    </section>
    <section class="responses p-lg">teste</section>
  </main>
</template>

<script>
export default {
  name: "HomeIndexPage",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<style lang="scss">
$bgBody: #ccc;
$bgQuestions: #fff;
$bgResponses: #000;

/** Main variables */
$maxWidth: 1080px;

/** Questions variables */
$colorQuestions: #000;

/** Responses variables */
$colorResponses: #fff;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}
body {
  background: $bgBody;
  height: 100%;
  main {
    max-width: $maxWidth;
    height: 100%;
    margin: 0 auto;

    .questions {
      color: $colorQuestions;
      height: 50%;
      background: $bgQuestions;
    }

    .responses {
      color: $colorResponses;
      height: 50%;
      background: $bgResponses;
    }
  }
}

.p-lg {
  padding: 16px 32px;
}
</style>
