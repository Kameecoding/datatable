<template>
  <div id="app">
    With Column
    <DataTable :value="[]">
      <template #empty>
        No records found.
      </template>
      <Column field="vin" header="Vin"></Column>
    </DataTable>
     Without column
    <DataTable :value="[]">
      <template #empty>
        No records found.
      </template>
    </DataTable>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DataTable,
    Column
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
