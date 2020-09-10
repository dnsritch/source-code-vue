import Watcher from './watcher'
import Dep from './dep'

export default class Vue {
  // {
  //     el:'',
  //     data:{},
  //     methods:{}
  // }
  constructor(option) {
    const { el, data, methods } = option
    this.$el = this.getElement(el)
    this.$data = data
    this.oberver(this.$data)
  }

  getElement(el) {
    if (typeof el === 'string') {
      return document.querySelector(el)
    }
    return el
  }

  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(val) {
        this.$data[key] = val
      },
    })
  }

  oberver(data) {
    if (!data || typeof data !== 'object') {
      return
    }

    let that = this
    Object.keys(data).forEach((key) => {
      that.defineReactive(data, key)
    })
  }

  defineReactive(data, key) {
    this.oberver(data[key])
    let dep = new Dep()

    Object.defineProperty(data, key, {
      get() {
        Dep.target && dep.addDep(dep.target)
        return data[key]
      },
      set(val) {
        if (data[key] !== val) {
          data[key] = val
          dep.notify()
        }
      },
    })
  }
}
