import Dep from './dep'

export default class Watcher {
  /**
   *Creates an instance of Watcher.
   * @param {*} vm       实例
   * @param {*} key      属性
   * @param {*} callback 更新回调
   * @memberof Watcher
   */
  constructor(vm, key, callback) {
    this.vm = vm
    this.key = key
    this.callback = callback

    Dep.target = this
    // 触发 getter
    this.vm[key]
    Dep.target = null
  }

  update() {
    this.callback.call(this.vm, this.vm[this.key])
  }
}
