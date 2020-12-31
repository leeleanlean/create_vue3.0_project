import axiosAPI from '@/utils/axios'
// 基本数据请求封装
export const HttpRequest = (url = '', params = {}, method = 'GET') => {
  return axiosAPI({
    url,
    params,
    method
  })
}
