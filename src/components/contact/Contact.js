import React, { Fragment } from 'react'
import './Contact.sass'
import { Avatar } from '@material-ui/core';

function Contact({ contactAvatar, contactName }) {
    return (
        <Fragment>
            {contactName && contactAvatar &&
                (
                    <div className="contact contact__wrp">
                        <div className="avatar__wrp">
                            <Avatar src={contactAvatar} className="contact__avatar" />
                            <div className="online"></div>
                        </div>
                        <h4 className="contact__name">{contactName}</h4>
                    </div>
                )
            }
        </Fragment>
    )
}

export default Contact
