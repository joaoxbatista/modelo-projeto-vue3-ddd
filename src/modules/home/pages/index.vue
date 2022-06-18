<template>
  <main>
    <section class="presentation p-lg">
      <img
        src="../assets/images/logo.svg"
        alt="Logo 2-end software development"
        class="presentation__logo"
      />

      <div class="questions">
        <div class="field">
          <label for="question_input">Primeira vez por aqui?</label>
          <input
            id="question_input"
            type="text"
            v-model="typed"
            @input="verifyTyped"
          />
        </div>
      </div>
    </section>
    <section class="responses bg-carbon p-lg">
      <template v-if="response == 'introduction'">
        <div>
          <h3>Seja bem-vindo!</h3>
          <h4>É um prazer ter-lo por aqui</h4>
        </div>
      </template>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomeIndexPage",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { ref, watch } from "vue";
const typed = ref("");
const response = ref(null);

const verifyTyped = () => {
  if (typed.value.toLowerCase().includes("sim")) {
    response.value = "introduction";
    return;
  }

  response.value = null;
};
</script>

<style lang="scss">
$bgBody: #ccc;
$bgPresentation: #fff;
$bgResponses: #000;

/** Main variables */
$maxWidth: 1080px;

/** Presentation variables */
$colorPresentation: #000;

/** Responses variables */
$colorResponses: #fff;

body {
  background: $bgBody;

  main {
    max-width: $maxWidth;
    height: 100%;
    margin: 0 auto;

    .presentation {
      color: $colorPresentation;
      height: 50%;
      background: $bgPresentation;

      &__logo {
        max-width: 200px;
        height: 100px;
        margin: 0 auto;
        display: block;
      }

      .questions {
        height: auto;
        display: flex;
        justify-content: center;
        max-width: 200px;
        margin: 24px auto 0 auto;

        .field {
          width: 100%;
          input {
            width: 100%;
          }
        }
      }
    }

    .responses {
      color: $colorResponses;
      height: 50%;

      div {
        height: auto;
      }
    }
  }
}

.p-lg {
  padding: 16px 32px;
}

.field {
  display: block;
  label {
    color: #222;
    font-size: 14px;
    height: auto;
    display: block;
    margin-bottom: 14px;
    font-weight: bold;
  }

  input {
    max-height: 36px;
    height: 36px;
    display: block;
    outline: none;
    padding: 4px 8px;
  }
}
</style>
