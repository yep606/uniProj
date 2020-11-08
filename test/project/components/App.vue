<template>
  <div>
      <ul>
          <li v-for="task in tasks" :key="task.id">{{task.description}} {{task.expiration}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { addHandler } from '../ws.js'
const URL = "http://localhost:8080/tasks";

export default {
  data () {
    return {
      tasks : [],
    }
  },
  created(){
        addHandler(data => {
          console.log("Inside ->")
          console.log(data)
          this.tasks.push(data)
        })
        axios.get(URL).then(response => {
            console.log("Created");
             console.log(response.data);
             this.tasks = response.data;
             console.log(this.tasks[0].description);
         }) 
  }
}
</script>

<style>
</style>