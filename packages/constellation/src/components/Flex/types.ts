import { CSSProperties, FC } from 'react'

export type FlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'start'
  | 'end'

export type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexProps = {
  alignItems?: FlexAlignItems
  flexDirection?: FlexDirection
  gap?: number
  justifyContent?: FlexJustifyContent
  style?: Omit<CSSProperties, 'alignItems' | 'display' | 'flexDirection' | 'gap' | 'justifyContent'>
}

export type FlexComponent = FC<FlexProps>
