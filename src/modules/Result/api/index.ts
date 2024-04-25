import request from '@/utils/request'

const OverviewAPI = {
  getDemoTestList(params) {
    return request.get('/demo_test/list', params)
  },

  createDemoTest(data) {
    return request.post('/demo_test/', data)
  },

  updateDemoTest(data) {
    return request.put('/demo_test', data)
  },

  deleteDemoTest(params) {
    return request.delete('/demo_test', {
      params
    })
  }
}

export default OverviewAPI

