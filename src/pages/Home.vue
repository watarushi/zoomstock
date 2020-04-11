<template>
<div id="home">
    <DescriptionView msg="Welcome to Your Vue.js App"/>
    <ImageView msg="Welcome to Your Vue.js App"/>
    <Footer msg="Welcome to Your Vue.js App"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DescriptionView from '../components/DescriptionView.vue'
import ImageView from '../components/ImageView.vue'
import Footer from '../components/Footer.vue'

// import firebase from '../plugins/firebase.js'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    DescriptionView,
    ImageView,
    Footer
  }
}
</script>
