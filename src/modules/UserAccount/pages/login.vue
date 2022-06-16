<template>
  <div class="login-containers">
    <el-form
      ref="ruleForms"
      :model="userData"
      :rules="rules"
      label-position="left"
      class="login-page"
      @keyup.enter="handleSubmit()"
    >
      <h3 class="login-title">
        {{ _t`login.welcomeLogin` }}
      </h3>
      <el-form-item
        prop="username"
      >
        <el-input
          ref="refUsername"
          v-model="userData.username"
          type="text"
          :prefix-icon="User"
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="userData.password"
          type="password"
          show-password
          :prefix-icon="Lock"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          class="btn-submit"
          @click="handleSubmit()"
        >
          {{ _t('login.signin') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  reactive,
  ref
} from 'vue'
// import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import Cookie from 'js-cookie'
import useUserAccount from '@/modules/UserAccount/store'

type IUserAccount = ReturnType<typeof useUserAccount>

const useLogin = (router, store: IUserAccount, route) => {

  const userData = reactive({
    username: '',
    password: ''
  })

  const rules = {
    username: [{ required: true,
      message: '请输入用户名',
      trigger: 'change' }],
    password: [{ required: true,
      message: '请输入密码',
      trigger: 'change' }]
  }

  const ruleForms = ref()

  const handleSubmit = () => {
    ruleForms.value.validate(async(valid) => {
      if (!valid) return
      // 发送登录信息给后台
      const { data, error } = await store.login(userData)
      if (error) return

      ElMessage.success('登录成功！')
      Cookie.set('token', data.Authorization)
      Cookie.set('name', data.user.username)
      router.push('/')
    })
  }

  const refUsername = ref()
  nextTick(() => {
    const el = refUsername.value.$el
    const input = el.querySelector('input')
    input.focus()
  })

  return {
    refUsername,
    userData,
    rules,
    ruleForms,
    handleSubmit
  }
}

export default defineComponent({
  name: 'Login',
  components: {},
  props: {},
  setup() {
    // const store = useStore()
    const store = useUserAccount()

    const router = useRouter()
    const route = useRoute()

    return {
      ...useLogin(router, store, route),
      User,
      Lock
    }
  }
})
</script>

<style scoped lang="scss">

  .login-containers {
    width: 100%;
    height: 100%;
    position: relative;
      .login-page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: auto;
        width: 350px;
        height: 285px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .login-title {
          margin: 0px auto 15px;
          text-align: center;
        }
        .login-rememberme {
          margin: 5px 0px 15px;
          text-align: center;
        }
        :deep() {
          .el-input {
            margin-bottom: 10px
          }
        }
        .btn-submit {
          margin-top: 10px;
        }
   }
}

</style>
