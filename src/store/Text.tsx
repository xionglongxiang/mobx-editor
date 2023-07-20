import { v4 as uuidv4 } from 'uuid'
import {
  ComponentType,
  type Component,
  type CssStyle,
  type Position,
  type Size,
} from '../utils/interface'
export class Text implements Component {
  id: string
  type: ComponentType
  position: Position
  size: Size
  styles: CssStyle
  content: string

  constructor() {
    this.id = uuidv4()
    this.type = ComponentType.TEXT
    this.position = { top: 0, left: 0 }
    this.size = { height: 20, width: 40 }
    this.styles = {
      fontSize: 80,
    }
    this.content = '文字'
  }
}
