import { observer } from 'mobx-react'
import React from 'react'
import './App.scss'
import Materials from './materials'
import Text from './render/Text'
import store from './store'
import { Component, ComponentType } from './utils/interface'

const Components = observer((props: any) => {
  let state = store.state
  let components: Component[] = state.components
  return components.map((item: Component) => {
    return item.type === ComponentType.TEXT ? <Text {...item}></Text> : <></>
  })
})

const App = observer(() => {
  return (
    <div className="App">
      <header></header>
      <aside id="left">
        <Materials />
      </aside>
      <main id="main">
        <Components />
      </main>
      <aside id="right"></aside>
      <footer></footer>
    </div>
  )
})

export default App
