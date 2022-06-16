import request from '@/utils/request'

const DashboardAPI = {
  getDashboardList(params) {
    return request({
      url: '/dashboard/list',
      method: 'get',
      params
    })
  },
  getDashboardDemo(params) {
    return request({
      url: '/dashboard/demo',
      method: 'get',
      params
    })
  }
}

export default DashboardAPI
