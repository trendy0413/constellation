/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { Card as CardComponent, CardComponent as CardComponentProps } from '.'

export default {
  argTypes: {
    accentColor: { control: 'color' },
    buttonOnClick: { action: 'click' },
    onClose: { action: 'close' },
  },
  args: {
    border: false,
    buttonContent: 'GO',
    content:
      'This is your Portfolio view. Once you own and hold crypto, the balances display here.',
    logoContent: {
      imgSrc: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
      text: 'CAT',
    },
    title: 'Welcome to Blockchain!',
    variant: 'default',
  },
  component: CardComponent,
  title: 'Compositions/Cards/Card',
} as ComponentMeta<CardComponentProps>

const Template: CardComponentProps = (args) => {
  return <CardComponent {...args} />
}

export const Card = Template.bind({})
