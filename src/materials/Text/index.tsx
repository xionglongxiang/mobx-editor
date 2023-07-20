import { observer } from 'mobx-react'
import React from 'react'
import store from '../../store'
import { Text } from '../../store/Text'
import styles from './index.module.scss'

const MaterialText = observer(() => {
  let addText = () => {
    let text = new Text()
    store.state.addComponent(text)
    console.log(store.state.components)
  }
  return (
    <>
      <div>{store.state.components.length}</div>
      <div
        className={styles.text}
        onClick={() => {
          addText()
        }}
      >
        文字
      </div>
    </>
  )
})

export default MaterialText
