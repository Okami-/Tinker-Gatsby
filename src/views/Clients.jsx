import React from 'react'
import PropTypes from 'prop-types'
import { Divider, DividerMiddle } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Clients = ({ children, offset }) => (
    <>
        <Divider
            bg="#66a2f2"
            speed={-0}
            offset={offset}
        />
        <Content speed={0.8} offset={2} factor={1}>
            <Inner>{children}</Inner>
        </Content>

    </>
)

export default Clients

Clients.propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number.isRequired,
}
