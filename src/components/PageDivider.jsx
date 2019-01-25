import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const PageDivider = styled.div`
    width: 100%;
    height: 7px;
    display: block;
    background: #d680eb; /* Old browsers */
    background: -moz-linear-gradient(left, #d680eb 0%, #66a2f2 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #d680eb 0%,#66a2f2 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #d680eb 0%,#66a2f2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d680eb', endColorstr='#66a2f2',GradientType=1 ); /* IE6-9 */
`

export default PageDivider