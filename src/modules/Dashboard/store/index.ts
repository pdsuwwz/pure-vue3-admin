import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import DashboardAPI from '@/modules/Dashboard/api'

export interface IDashboardModule {
  demoList: any
  dashboardList: any[]
}

export const useDashboardStore = defineStore('Dashboard', {
  state: (): IDashboardModule => {
    return {
      demoList: {},
      dashboardList: []
    }
  },
  actions: {
    async getDashboardList(params = {}) {
      await sleep(2000)
      // const res = await DashboardAPI.getDashboardList(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {
          list: [{ title: 'dash1' }, { title: 'dash2' }, { title: 'dash3' }]
        }
      }
      return this.filterResponse(res, () => {
        this.dashboardList = res.data.list
      }, () => {})
    }
  }
})
