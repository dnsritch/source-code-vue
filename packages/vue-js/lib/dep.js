export default class Dep {
  constructor() {
    this.deps = []
  }
  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach((dep) => dep.update())
  }
}
