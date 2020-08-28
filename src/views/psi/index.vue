<template>
  <iframe id="psi-iframe" :src="url" frameborder="0" class="psi-content" />
</template>

<script>
export default {
  name: 'PsiIndex',
  data() {
    return {
      url: '/static/dist/index.html'
    }
  },
  mounted() {
    if (window.location.pathname.indexOf('setting') > -1) {
      this.url = this.url + '#' + window.location.pathname.replace('/psi/setting/', '')
    } else {
      this.url = this.url + '#' + window.location.pathname.replace('/psi/', '')
    }
  }
}
</script>
<style scoped>
.psi-content {
  width: 100%;
  min-height: calc(100vh - 84px);
  overflow: hidden;
}
</style>
