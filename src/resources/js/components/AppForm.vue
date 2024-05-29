<template>
  <div class="text-center">
    <form @submit.prevent="onSubmit">
      <input placeholder="Facebook ID" type="text" style="width: 100%; padding: 10px; margin-bottom: 1rem;" />

      <div v-if="result" style="margin-bottom: 1rem;">
        <div>
          <span><strong>4.7/5</strong> on 117 reviews</span>
        </div>
        <div>
          <a href="https://www.facebook.com/woodscoffee">https://www.facebook.com/woodscoffee</a>
        </div>
      </div>

      <div style="text-align: center;">
        <button type="submit" style="padding: 5px 10px;" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Search' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
    result: null,
  }),

  methods: {
    async onSubmit(e) {
      this.result = null
      this.isLoading = true

      await new Promise(r => setTimeout(r, 1000));

      this.result = true
      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>