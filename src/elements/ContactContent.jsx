import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/addons.cjs'

const ContactContent = styled(ParallaxLayer)`
  ${tw`justify-center items-center flex z-50`};
  background-color: #D6DAFF;
`

export default ContactContent
