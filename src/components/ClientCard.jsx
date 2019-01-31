import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-16 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-lg md:text-base text-black`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-black uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Photo = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg ml-auto mr-auto mb-10 block`};
`

const Name = styled.div`
  ${tw`text-black uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ClientCard = ({ title, children, bg, photo, name }) => (
  <Wrapper target="_blank" rel="noopener noreferrer" bg={bg}>
    <Photo src={photo}></Photo>
    <Text>{children}</Text>
    <Name>{name}</Name>
    <Title>{title}</Title>
  </Wrapper>
)

export default ClientCard

ClientCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}