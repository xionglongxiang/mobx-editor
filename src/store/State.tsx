import { action, observable } from 'mobx'
import { type Component } from '../utils/interface'

export class State {
  @observable
  components: Array<Component> = []

  @action
  addComponent(component: Component) {
    this.components = [...this.components, component]
  }

  @action
  removeComponent(id: string) {
    let index = this.components.findIndex((item: Component) => item.id === id)
    this.components.splice(index, 1)
  }
}

export default State
