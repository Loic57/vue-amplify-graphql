<template>
  <div class="page-articles">
    <div class="container">
      <h1>Biens immobiliers</h1>
      
      <div class="grid-flex">
        <div class="column" >
          <Property  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Property from "../components/Property"
  import Amplify, { API, graphqlOperation } from "aws-amplify";
  import gql from 'graphql-tag'
  import * as queries from '../graphql/queries';

  
  const listPropertys = gql` 
    query ListPropertys(
      $filter: ModelPropertyFilterInput
      $limit: Int
      $nextToken: String
    ) 
    {
      listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
          id
          title
          category
          price
          bedrooms
          bathrooms
          area
          status
          rooms
          garages
          parkings
        }
        nextToken
      }
    }
  `


  console.log(listPropertys)
  

  export default {
    components: {
      Property
    },
    data() {
      return {
        properties: []
      }
    },
    apollo: {
      properties: {
        query: listPropertys
      }
    }
  }
</script>

<style lang="scss">

</style>

