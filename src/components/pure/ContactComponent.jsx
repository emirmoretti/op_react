import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {
  return (
    <div>
        <h1>nombre: {contact.name} apellido: {contact.lastName}</h1>
        <p>{contact.email}</p>
        <p>{contact.isConected}</p>

        <div>
            <span>Cambiar estado</span>
        </div>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent