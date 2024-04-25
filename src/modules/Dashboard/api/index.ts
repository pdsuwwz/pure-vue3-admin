import request from '@/utils/request'

const DashboardAPI = {
  getDashboardList(params) {
    return request.get<{aa: string;}>('/dashboard/list', params)
  },
  getDashboardDemo(params) {
    return request.get('/dashboard/demo', params)
  }
}

export default DashboardAPI
