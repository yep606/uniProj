<template>
  <div>
      <ul>
          <li v-for="task in tasks" :key="task.description">{{task.description}} {{task.expiration}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
const URL = "http://localhost:8080/tasks";

export default {
  data () {
    return {
      tasks : [],
    }
  },
  created(){
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