<template>
  <v-layout align-space-around justify-start column> 
      <task-row v-for="task in tasks" :task="task" :key="task.id"/>
  </v-layout>
</template>

<script>
import TaskRow from "./TaskRow.vue";

export default {
  props: ["tasks"],
  components: {
    TaskRow,
  },
  methods: {},
};
</script>

<style>
</style>