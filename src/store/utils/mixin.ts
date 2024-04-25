import { ElMessage } from 'element-plus'


export function getFilterResponse<T = any>(
  res: IRequestData<T>,
  successCallback?: IStoreFilterCallBack<T> | null,
  errorCallback?: IStoreFilterCallBack<T> | null
): Promise<IRequestData<T>> {
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      successCallback && successCallback(res)
    } else {
      errorCallback
        ? errorCallback(res)
        : ElMessage({
          type: 'error',
          message: res.msg,
          showClose: true
        })
    }
    resolve(res)
  })
}

