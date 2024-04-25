import { getFilterResponse } from '@/store/utils/mixin'

import { AxiosRequestConfig } from 'axios'

declare module 'vue' {
  /**
   *
   */
  interface ComponentCustomProperties extends Window {
    // ...

  }
  export interface VNode {
    destroy?: any
  }
}

declare module 'axios' {
  /**
   * Costom Axios Field.
   */
  export interface AxiosRequestConfig {
    redirect?: string
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    filterResponse: typeof getFilterResponse
  }
}

declare module 'vue-router' {
  export interface RouteMeta {
    /**
     * 页面默认标题
     */
    title?: string
  }
}

declare global {
  export interface IRequestData<T> {
    error: number
    data: T
    msg: string
  }

  interface IRequestSuite {
    get<T = any>(uri: string, params?: ObjectValueSuite, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    post<T = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    put<T = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    patch<T = any>(uri: string, data?: any, config?: AxiosRequestConfig): Promise<IRequestData<T>>
    delete<T = any>(uri: string, config?: AxiosRequestConfig): Promise<IRequestData<T>>
  }

  /**
   * `error`: Response Status Code.
   *
   * `data`: Response Body.
   *
   * `msg`: Response Message.
   */


  /**
   * General Object Types.
   */
  type IModulesApiSuite = ObjectValueSuite<(...args: any) => Promise<IRequestData>>

  /**
   * Store FilterResponse Callback Type.
   */
  type IStoreFilterCallBack<T> = (res: IRequestData<T>) => Promise<IRequestData<T>> | void

}
export { }
