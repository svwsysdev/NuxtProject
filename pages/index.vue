<template>
  <main :class="{ 'theme-light': !darkMode, 'theme-dark': darkMode, }"
        class="p-5 text-themeText bg-themeBackground h-full">
    <div class="md:p-16 sm:p-0 h-[1000px]  mt-10 text-center flex flex-wrap justify-center ">
      <div>
        <button @click="darkMode=!darkMode" class="btn-main text-switchText bg-switchBackground">
          {{ darkMode ? 'Light Theme' : 'Dark Theme' }}
        </button>
      </div>
      <h1 class="md:text-5xl  text-2xl w-full mb-3">
        Sean's To-Do Board
      </h1>
      <p class="w-full md:w-1/4 sm:w-1/2 mb-3 md:whitespace-normal sm:whitespace-normal truncate ...">
        To do stuff that requires programming and to showcase this tailwinds infrastructure.
      </p>
      <div class="w-full">
        <div class="create-new w-full flex justify-center">
          <div class="form-container bg-themeSBackground">
            <input
              class="w-full p-3 form-input text-themeInputText"
              type="text"
              v-model="newTask"
              placeholder="Add task"
              @keypress.enter="addTask"/>
            <button class="w-full form-control animate-pulse" @click="addTask">Add Task</button>
          </div>
        </div>
        <div class="tasks w-full flex flex-col h-[700px]">
          <Task
            v-for="(task,index) in $store.state.tasks"
            :key="index"
            :task="task"
            :index="index"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Task from "~/components/molecule/Task.vue";


export default Vue.extend({
  name: 'IndexPage',
  components: {Task},
  data() {
    return {
      newTask: '',
      darkMode: false
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$children.forEach(child => {
          child.$forceUpdate()
        })
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
})
</script>
