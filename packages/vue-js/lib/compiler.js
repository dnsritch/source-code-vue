export default class Compiler {
  constructor(el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm
  }

  createFragment(el) {}

  compile(el) {
    let nodes = el.childNodes
    for (const node of nodes) {
      if (this.isText(node)) {
        let text = node.textContent.trim()
        if (!text) continue
        this.compileText(node)
      } else if (this.isElement(node)) {
      }
    }
  }

  compileText(node) {
    let reg = /\{\{(.*)\}\}/
    //判断是否有 插值数据
    if (reg.test(node.textContent)) {
      this.update(node, this.$vm, RegExp.$1, 'text')
    }
  }

  update(node, vm, exp, type) {}

  isText(node) {
    console.assert(node, "node can't be null or undefined")
    return node.nodeType === 3
  }

  isElement(node) {
    console.assert(node, "node can't be null or undefined")
    return node.nodeType === 1
  }
}
