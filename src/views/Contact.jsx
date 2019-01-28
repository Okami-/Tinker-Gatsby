import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'



const Contact = ({ children, offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>
    </Divider>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>

    </Divider>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
