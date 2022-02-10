import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import styles from './contact.module.scss'

type ContactProps = {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({modalIsOpen, setModalIsOpen }) => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

   const handleForm = () => {
       if (!name) return alert("name is missing");


       alert(`
       name: ${name}
       email: ${email}
       message: ${message}
       `)
   }

  return (
    <Popup open={modalIsOpen} className={styles.container} position="center center">
        
        <div> <h4 className={styles.modaltitle}>Contact Us</h4></div>

        <div className={styles.textinput}> 
        <label  className={styles.textinputlabel}>Name</label> 
        <br></br>
        <input
            type="text"
            value={name}
            placeholder="Zeta"
            onChange={
                (e) => setName(e.target.value)
            } 
        />
        </div>

        <div className={styles.modalemail}> 
        <label className={styles.modalemaillabel}>Email</label> 
        <br></br>
     <input
            type="text"
            value={email} 
            placeholder="sophie@example.com"
            onChange={ (e) => setEmail(e.target.value) } 
        />
        </div>


        <div className={styles.modalmessage}> 
        <label className={styles.modalmessagelabel}>Message</label> 
        <br></br>
        <textarea 
            value={message} 
            placeholder="Your Message here!"
            rows={5} 
            onChange={ (e) => setMessage(e.target.value) } 
        />
        </div>
         <div className={styles.sendbuttonDiv} > 
             <input className={styles.sendbutton} type="button" value="Send" onClick={() => handleForm()} />
         </div>
    </Popup>
  )
}

export default Contact