import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import UserAccountAPI from '@/modules/UserAccount/api'

export interface IUserAccountState {
  locale: string
  demoList: any
  userInfo: any
}

const useUserAccount = defineStore('UserAccount', {
  state: (): IUserAccountState => {
    return {
      locale: 'zh-hans',
      demoList: {},
      userInfo: {}
    }
  },
  getters: {
    // demoList: state => state.demoList
  },
  actions: {
    async GetModuleTestList(params) {
      // TODO: 模拟响应时间
      await sleep(1000)
      // TODO: 模拟 api
      // const result = await UserAccountAPI.getDemoTestList(params)
      const result = {
        test: 'ok'
      }
      this.demoList = result
      return result
    },
    async updateChangeLanguage(params) {
      const result = await UserAccountAPI.updateChangeLanguage(params)
      return this.filterResponse(result)
    },
    setLanguage(data) {
      this.locale = data.locale
    },
    async login(data) {
      await sleep(1000)
      const res = await UserAccountAPI.login(data)
      return this.filterResponse(res, null, () => {})
    },
    async logout() {
      const res = await UserAccountAPI.logout()
      return this.filterResponse(res, null, () => {})
    },
    async getUserInfo() {
      const res = await UserAccountAPI.getUserInfoData()
      await sleep(300)
      return this.filterResponse(res, ({ data }) => {
        this.userInfo = data
      })
    }
  }
})

export default useUserAccount

