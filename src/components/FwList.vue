<template>
  <div>
    <ul>
      <li v-for="user in getAllUser" :key="user.id">{{user.email}}</li>
    </ul>
    <!-- 데이터 변이(mutation)하기 위한 template 형식 -->
    <!-- <ApolloMutation :mutation="addUser" :variables="{ email, pw, store }"> -->
      <!-- <template slot-scope="{ mutate, loading, error }"> -->
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="password">
            <el-input v-model="form.pw"></el-input>
          </el-form-item>
          <el-form-item label="User type">
            <el-select v-model="form.store" placeholder="please select your account type">
              <el-option label="일반" value="0"></el-option>
              <el-option label="점장" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <button @click="register()">회원가입</button>
        <!-- <p v-if="error">An error occured: {{ error }}</p> -->
      <!-- </template>
    </ApolloMutation> -->
  </div>
</template>

<script>
import { getAllUser, addUser } from '../graphql/User'

export default {
  data () {
    return {
      form: {
        email: '',
        pw: '',
        store: null // 0: normal user, 1: shopkeeper
      },
      errorMsg: ''
    }
  },
  // Mutations should not be written. Only query.
  apollo: {
    getAllUser
  },
  methods: {
    register () {
      if (this.form.email || this.form.pw || (this.form.store !== null)) {
        const email = this.form.email
        const pw = this.form.pw
        const store = this.form.store * 1
        this.$apollo.mutate({
          // Mutation Query
          mutation: addUser,
          variables: {
            email,
            pw,
            store
          }
        }).then((data) => {
          // Result
          console.log(data)
        }).catch((error) => {
          // Error
          console.error(error)
          // We restore the initial user input
          this.errorMsg = error
        })
      } else {
        alert('모든 정보를 입력해주셔야만 합니다.')
      }
    }
  }
}
</script>

<style>

</style>
