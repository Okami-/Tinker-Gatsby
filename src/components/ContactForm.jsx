import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.form`
    ${tw`flex flex-wrap -mx-2`};
    margin-bottom: 20px;
`

const Button = styled.button`
    ${tw`items-center`};
    border-radius: 5px;
    background-color: #D680EB;
    border: none;
    color: white;
    padding: 14px 40px;
    font-size: 20px; 
    margin: 0 auto;
    margin-top: 40px;
`;

const NameInput = styled.input`
    ${tw`items-center `};
    border: none;
    padding: 20px 40px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
`;

const CompanyInput = styled.input`
    border: none;
    padding: 20px 40px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
`;

const EmailInput = styled.input`
    border: none;
    padding: 20px 40px;
    font-size: 18px;
    width: 100%;
    border-radius: 5px;
`;

const Message = styled.textarea`
    border: none;
    width: 100%;
    padding: 20px 40px;
    font-size: 18px;
    height: 100%;
    border-radius: 5px;
`;

const Col1 = styled.div`
    ${tw`w-full px-2 lg:w-1/2 mb-6 lg:mb-0  pl-6 pr-6 lg:pl-2 lg:pr-2`};
`

const Col2 = styled.div`
    ${tw`w-full px-2 lg:w-1/2 pl-6 pr-6 lg:pl-2 lg:pr-2`};
`

class ContactForm extends React.Component {
    render() {
        return (
            <>
                <Wrapper id="contact-form" action="https://formspree.io/richiebkr@gmail.com" method="POST">
                    <Col1>
                        <NameInput type="text" className="form-control" id="name" name="name" placeholder="Name" />
                        <CompanyInput type="text" className="form-control" id="company" aria-describedby="company" name="company" aria-label="email-message" placeholder="Company" />
                        <EmailInput type="email" className="form-control" id="email" aria-describedby="email" name="email" aria-label="email-message" placeholder="Email" />
                    </Col1>
                    <Col2>
                        <Message className="form-control" rows="5" id="message" name="message" placeholder="Message"></Message>
                    </Col2>
                    <Button type="submit">Send</Button>
                </Wrapper>
            </>
        )
    }
}

export default ContactForm;