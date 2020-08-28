<template>
  <iframe id="psi-iframe" :src="url" frameborder="0" class="psi-content" />
</template>

<script>
export default {
  name: 'PsiIndex',
  data() {
    return {
      url: '/static/dist/index.html#login'
    }
  }
}
</script>
<style scoped>
.psi-content {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>
