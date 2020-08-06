<template>
  <div id="app">
    <div v-if="token">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view class="container"/>
    </div>
    <div v-else>
      Login button
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['token']),
  },
};
</script>
