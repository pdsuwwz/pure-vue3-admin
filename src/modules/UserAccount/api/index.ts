import request from '@/utils/request'

const UserAccountAPI = {
  login(data) {
    // return request({
    //   url: '/login',
    //   method: 'post',
    //   data
    // })

    return {
      error: 0,
      msg: 'OK',
      data: {
        language: 'zh-hans',
        Authorization: '4v8acea-6a89-2a2ebc-10802-9ac19003',
        user: {
          email: 'admin@org.com',
          phone: '13030316203',
          username: '管理员',
          id: '601d85900f43923hffbcs'
        }
      }
    }
  },
  logout() {
    return request({
      url: '/logout',
      method: 'post'
    })
  },

  getUserInfoData(params = {}) {
    // return request({
    //   url: '/user_info',
    //   method: 'get',
    //   params
    // })
    return {
      error: 0,
      msg: 'OK',
      data: {
        language: 'zh-hans',
        Authorization: '4v8acea-6a89-2a2ebc-10802-9ac19003',
        user: {
          email: 'admin@org.com',
          phone: '13030316203',
          username: '管理员',
          id: '601d85900f43923hffbcs'
        }
      }
    }
  },

  // 切换后端语言
  updateChangeLanguage(data) {
    return request({
      url: '/acl/changelanguage',
      method: 'post',
      data
    })
  },

  getDemoTestList(params) {
    return request({
      url: '/api/demo_test/list',
      method: 'get',
      params
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

export default UserAccountAPI

