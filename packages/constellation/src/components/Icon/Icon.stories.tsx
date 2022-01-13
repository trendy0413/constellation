import { ComponentStory } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import Text from '../Text'
import Component, { iconSizes } from '.'
import { IconName } from './types'

export default {
  argTypes: {
    color: {
      description: 'color of the icon',
      options: Object.keys(colors),
      type: 'select',
    },
    name: {
      description: 'name of the icon',
      options: Object.values(IconName),
      type: 'select',
    },
    size: {
      description: 'size of the icon',
      options: Object.keys(iconSizes),
      type: 'select',
    },
  },
  component: Component,
  title: 'Components/Icon',
}

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const Icon = Template.bind({})

Icon.args = {
  name: IconName.BLOCKCHAIN,
  size: 'md',
}

export const AllIcons: ComponentStory<typeof Component> = (args) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.values(IconName).map((name) => (
        <div
          style={{ height: '4rem', margin: '1rem', textAlign: 'center', width: '8rem' }}
          key={name}
        >
          <Component {...args} name={name} />
          <br />
          <Text variant='caption-1'>{name}</Text>
        </div>
      ))}
    </div>
  )
}
