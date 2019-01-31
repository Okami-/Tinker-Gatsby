import React from 'react'
import PropTypes from 'prop-types'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import ContactContent from '../elements/ContactContent'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Contact = ({ children, offset }) => (
  <>
    <Divider
      bg="#D6DAFF"
      speed={0}
      offset={offset}
    />
    <Content speed={0.8} offset={offset}>
      {children}
    </Content>
  </>
)

export default Contact

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
