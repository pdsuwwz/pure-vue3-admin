import request from '@/utils/request'

const UserAccountAPI = {
  login(data) {
    // return request.post('/login', data)

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
    return request.post('/logout')
  },

  getUserInfoData(params = {}) {
    // return request.get('/user_info', params)
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
    return request.post('/acl/changelanguage', data)
  },

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

export default UserAccountAPI

