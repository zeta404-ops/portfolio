import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import styles from './contact.module.scss';
import FirebaseServices from '../../../firebase/firebaseServices';
import {collection, addDoc} from "firebase/firestore"; 


type ContactProps = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    openState: boolean
}

const Contact: React.FC<ContactProps> = ({setModalIsOpen, openState }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [sendReady, setSendReady] = useState<Boolean>(false)

   const handleForm = async () => {
       if (!name) return alert("name is missing");
       if (!email) return alert("email is missing");
       if (!message) return alert("message is missing");


       const fiebaseInstance = FirebaseServices.getFirestoreInstance()

       await addDoc(collection(fiebaseInstance, 'ContactForm'), {
           //the format of how the email is sent to reciver
           message: {
               html: `You have recived a new message from Portfolio.  <br><br> Name: ${name} <br><br>  Email: ${email} <br><br> Message: ${message}  <br><br> Time: ${new Date()}`,
               subject: 'NEW MESSAGE FROM PORTFOLIO!'
           },
           //values that will go to that email
           name: name,
           email: email,
           msg: message,
           to: "akazeta404@gmail.com",
           date: new Date().getTime(),
           
       })
       //after the form is sent it will clear the inputs and sendready function comesup which is a popup for saying successfully sent the contact
       .then(() => {
           
           setEmail("")
           setName("")
           setMessage("")
           setSendReady(true)
       })
       .catch((err) => console.log(err.message));

   }

   useEffect(() => console.log("modal:", openState), [openState])

   //if it hasn't been sent it will show you the form 
  return !sendReady
   ? (

    <Popup 
        // ref={}
        className={styles.container}
        open={openState}
        closeOnDocumentClick={false}
        modal
        position="center center"
        onClose={(e) => {
            // const mouseE = e as MouseEvent
            // console.log(mouseE.target)
            setModalIsOpen(false);
        }}
    >
        
        <div className={styles.modaltitle}> <h4 >Contact Us</h4></div>

        {/* inputs for name */}
        <div className={styles.textinput}> 
        <label  className={styles.textinputlabel}>Name</label> 
        <br></br>
        <input
            className={styles.textinputlabelarea}
            required 
            type="text"
            value={name}
            placeholder="Name"
            onChange={
                (e) => setName(e.target.value)
            } 
        />
        </div>
        {/* inputs for email */}
        <div className={styles.modalemail}> 
        <label className={styles.modalemaillabel}>Email</label> 
        <br></br>
        <input
            className={styles.modalemaillabelarea}
            required 
            minLength={6}
            type="text"
            inputMode={"email"}
            value={email} 
            placeholder="your@email.com"
            onChange={ (e) => setEmail(e.target.value) } 
            
        />
        </div>

        {/* inputs for message */}
        <div className={styles.modalmessage}> 
        <label className={styles.modalmessagelabel}>Message</label> 
        <br></br>
        <textarea 
            className={styles.modalmessagelabelarea}
            required 
            value={message} 
            placeholder="Your Message here!"
            rows={5} 
            onChange={
                 (e) => setMessage(e.target.value) 
            } 
        />
        </div>
         <div className={styles.sendbuttonDiv} > 
            {/* send and cancel buttons */}
             <input className={styles.sendbutton} type="button" value="Send" onClick={() => handleForm()} />
             <input className={styles.cancelbutton} type="button" value="Cancel" onClick={() => setModalIsOpen(false)} />
         </div>
    </Popup>
    
  )
  : 
  ( 
    //  this will popup after you have successfuly sent the contact form 
      <Popup> 
          
      <div className={styles.aftersentmsg}>
         Your message was successfuly recived!
         <br></br>
        <input className={styles.cancelbutton} type="button" value="Done" onClick={() => setModalIsOpen(false)  === setSendReady(false)} />
      </div>
      
      </Popup>
      
       )
}

export default Contact
