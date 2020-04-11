<template>
  <div v-show="value" class="photo-form">
      <p>dsdsds</p>
    <h2 class="title">Submit a photo</h2>
    <form class="form">
      <input class="form__item" type="file" @change="onFileChange">
        <output class="form__output" v-if="preview">
        <img :src="preview" alt="">
        </output>
      <div class="form__button">
        <button type="submit" class="button button--inverse">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DescriptionView'
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>