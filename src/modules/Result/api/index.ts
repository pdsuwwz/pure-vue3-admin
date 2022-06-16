import request from '@/utils/request'

const OverviewAPI = {
  getDemoTestList(params) {
    return request({
      url: '/api/demo_test/list',
      method: 'get',
      params
      // redirect: '404'
    })
  },

  createDemoTest(data) {
    return request({
      url: '/api/demo_test',
      method: 'post',
      data
    })
  },

  updateDemoTest(data) {
    return request({
      url: `/api/demo_test/${ data.demoId }`,
      method: 'put',
      data
    })
  },

  deleteDemoTest(demoId) {
    return request({
      url: `/api/demo_test/${ demoId }`,
      method: 'delete'
    })
  }
}

export default OverviewAPI

