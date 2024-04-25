const hostList = [
  {
    hostname: '10.30.0.108',
    baseApiIp: 'http://10.30.0.108',
    baseApi: 'http://10.30.0.108/api'
  },
  {
    hostname: 'localhost',
    baseApiIp: 'http://10.30.0.108',
    baseApi: 'http://10.30.0.108/api'
  }
]

/**
 *  获取当前服务的 host 前缀
 */
export const currentHost = hostList.find((hostItem) => {

  return window.location.hostname === hostItem.hostname

}) || hostList.find((hostItem) => {

  return 'localhost' === hostItem.hostname

})

