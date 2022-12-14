import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { TableContainer as TableContainerComponent } from '.'

export default {
  argTypes: {},
  args: {},
  component: TableContainerComponent,
  title: 'Compositions/Table/TableContainer',
} as ComponentMeta<FC>

const Template: ComponentStory<FC> = () => {
  return (
    <TableContainerComponent>
      <tbody>
        <tr>
          <td className='p-20 w-48'>
            <p>This is a styled container with a border and rounded corners.</p>
          </td>
        </tr>
      </tbody>
    </TableContainerComponent>
  )
}

export const TableContainer = Template.bind({})
