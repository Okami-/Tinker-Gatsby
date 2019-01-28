import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

class ContactForm extends React.Comoponent {
    render() {
        return (
            <div class={styles.contactformwrapper}>
                <form id="contact-form" action="https://formspree.io/richiebkr@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="company" aria-describedby="company" name="company" aria-label="email-message" placeholder="Company" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" aria-describedby="email" name="email" aria-label="email-message" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;