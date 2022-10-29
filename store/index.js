export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{content: task, done: false, blocked: false}, ...state.tasks];
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
    task.blocked = false;
  },
  BLOCKED_TASK(state, task) {
    task.blocked = !task.blocked;
    task.done = false;
  },
  EDIT_TASK(state, task) {
    console.log(state.tasks[task.index].content=task.content);
  }
}
