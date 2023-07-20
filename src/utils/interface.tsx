export enum ComponentType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export interface Position {
  top: number
  left: number
}
export interface Size {
  height: number
  width: number
}
export interface CssStyle {
  [key: string]: string | number
}
export interface Component {
  id: string
  type: ComponentType
  position: Position
  size: Size
  styles: CssStyle
}
