<template>
  <!--  <div>{{task.done}}</div>-->
  <div>

    <div
      :class="`task ${ task.done ? 'is-complete' : '' }` + ` task ${ task.blocked ? 'is-blocked' : '' }`"
      class="task-container m-auto mt-2 relative bg-themeSBackground">
      <Modal ref="modal" class="hidden" :action="action"/>
      <div class="content w-full m-auto mb-2" ref="content">
        {{ task.content ?? '' }}
      </div>
      <input
        ref="input"
        class="w-full mb-2 p-3 form-input text-themeInputText hidden"
        type="text"
        v-model="newTask"
        @keypress.enter="editTask(true,index)"/>
      <br/>
      <span class="space-y-3">
      <button @click="toggleTask()"
              v-text="task.done ? 'Undo' : 'Done'"
              class="btn-main btn-color-add"/>
      <button @click="blockTask()"
              v-text="task.blocked ? 'Un-Block' : 'Block'"
              class="btn-main btn-color-block"/>
      <button @click="removeTask()"
              v-text="'Delete'"
              class="btn-main btn-color-delete"/>
      <button @click="editTask()"
              v-text="'Edit'"
              class="btn-edit"/>
    </span>
    </div>
  </div>
</template>

<script>
import Modal from "~/components/molecule/Modal.vue";

export default {
  name: "Task",
  components: {Modal},
  props: ['task', 'index'],
  data() {
    return {
      newTask: '',
      action: ''
    }
  },
  methods: {
    toggleTask() {
      if (confirm(this.task.done ? 'Mark task as not Done?' : 'Mark task as Done?'))
        this.$store.commit('TOGGLE_TASK', this.task);
      this.$refs.modal.$el.classList.remove('hidden');
      this.action =this.task.done ? 'Completed':'Re-Tasked';
    },
    blockTask() {
      if (confirm(this.task.blocked ? 'Mark task as not Blocked?' : 'Mark task as Blocked?'))
        this.$store.commit('BLOCKED_TASK', this.task);
      this.$refs.modal.$el.classList.remove('hidden');
      this.action = this.task.blocked ? 'Blocked' : 'Un-Blocked';
    },
    removeTask() {
      if (confirm('Are you sure you want to Delete this task?'))
        this.$store.commit('REMOVE_TASK', this.task);
    },
    editTask(edited = false) {
      const taskContentClass = this.$refs.content.classList.contains('hidden')
      if (taskContentClass) {
        this.$refs.content.classList.remove('hidden')
        this.$refs.input.classList.add('hidden')
      } else {
        this.$refs.content.classList.add('hidden')
        this.$refs.input.classList.remove('hidden')
      }

      if (edited) {
        this.$store.commit('EDIT_TASK', {content: this.newTask, index: this.index});
        this.newTask = ''
        this.$refs.modal.$el.classList.remove('hidden');
        this.action = 'Edited';
      }
    }
  }
}
</script>

<style scoped>

</style>
