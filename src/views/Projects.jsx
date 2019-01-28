import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, #D6DAFF)"
      speed={-0.2}
      offset={`${offset}.18`}
      factor={1.2}
    />
    <Content speed={0.4} offset={offset} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
    </Divider>
  </>
)

export default Projects

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
