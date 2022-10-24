import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {

  const [conected, setConected] = useState(contact.isConected);


  const handleConected = () => {
    setConected(!conected);
  }
  
  return (
    <div>
        <h1>nombre: {contact.name} apellido: {contact.lastName}</h1>
        <p>{contact.email}</p>
        <p>{contact.isConected}</p>
        <p>Estado {conected ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
        <div>
            <span>Cambiar estado</span>
            <button onClick={handleConected}>Click</button>
        </div>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent