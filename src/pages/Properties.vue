<template>
  <div class="page-articles">
    <div class="container">
      <h1>Biens immobiliers</h1>
      
      <div class="grid-flex">
        <div class="column">
          <Property />
        </div>
        <div class="column">
          <Property />
        </div>
        <div class="column">
          <Property />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Property from "../components/Property"
  export default {
    components: {
      Property
    }
  }
</script>

<style lang="scss">

</style>

