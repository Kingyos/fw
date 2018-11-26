<template>
    <div>
        <el-container>
            <el-header>페이지 소개</el-header>
            <el-container>
                <el-aside width="650px">지도</el-aside>
                <el-main>
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="id">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    </el-form>

                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="password">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    </el-form>
                    <el-button size="small">회원가입</el-button> <el-button size="small">로그인</el-button>
                    <br><br><br><br>
                    <el-button class="parent">문의 : fdg2489@gmail.com</el-button>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

export default {
  data () {
    return {
      form: { name: '' }
    }
  }
}
</script>

<style>
.parent {
    position: relative;
    text-align: center;
    height: 50px;
    border: 5px solid #8AC007;
}
</style>
