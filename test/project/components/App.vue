<template>
  <v-app> 
    <v-main>
      <v-container>
        <task-list :tasks="tasks"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { addHandler } from "../ws.js";
import TaskList from './tasks/TaskList.vue'
const URL = "http://localhost:8080/tasks";

export default {

components: {
  TaskList
},

  data: () => ({
      tasks: [],
  }),

  methods: {

  },
  created(){
        // addHandler(data => {
        //   console.log("Inside ->")
        //   console.log(data)
        //   this.tasks.push(data)
        // })
        axios.get(URL).then(response => {
            console.log("Created");
             console.log(response.data);
             this.tasks = response.data;
             console.log(this.tasks[0].description);
         })
  }
};
</script>

<style>
</style>