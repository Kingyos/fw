<template>
  <div>
    <ul>
      <li v-for="user in getUser" :key="user.id">{{user.email}}</li>
    </ul>
  </div>
</template>

<script>
import { getAllUser } from '../graphql/User'

export default {
  apollo: {
    getUser: getAllUser
  }
}
</script>

<style>

</style>
