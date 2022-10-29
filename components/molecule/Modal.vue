<template>
  <div class="w-full flex flex-wrap justify-center z-50 h-auto bg-white border border-gray-500 rounded-2xl relative text-themeText bg-themeTBackground">
    <h1 class="m-auto font-bold text-lg">The task has been {{ action }} Successfully</h1>
    <button class="btn-main mb-3 mt-3" @click="confirm">Confirm</button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['action'],
  methods:{
    confirm(){
      this.$el.classList.add('hidden');
    }
  }
}
</script>

<style scoped>

</style>
