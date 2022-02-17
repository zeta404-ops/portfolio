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
           message: {
               html: `You have recived a new message from Portfolio.  <br><br> Name: ${name} <br><br>  Email: ${email} <br><br> Message: ${message}  <br><br> Time: ${new Date()}`,
               subject: 'NEW MESSAGE FROM PORTFOLIO!'
           },
           name: name,
           email: email,
           msg: message,
           to: "akazeta404@gmail.com",
           date: new Date().getTime(),
       })
       .then(() => {
           
           setEmail("")
           setName("")
           setMessage("")
           setSendReady(true)
       })
       .catch((err) => console.log(err.message));

   }

   useEffect(() => console.log("modal:", openState), [openState])

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

        <div className={styles.modalemail}> 
        <label className={styles.modalemaillabel}>Email</label> 
        <br></br>
        <input
            className={styles.modalemaillabelarea}
            required 
            type="email"
            value={email} 
            placeholder="your@email.com"
            onChange={ (e) => setEmail(e.target.value) } 
        />
        </div>


        <div className={styles.modalmessage}> 
        <label className={styles.modalmessagelabel}>Message</label> 
        <br></br>
        <textarea 
            className={styles.modalmessagelabelarea}
            required 
            value={message} 
            placeholder="Your Message here!"
            rows={5} 
            onChange={ (e) => setMessage(e.target.value) } 
        />
        </div>
         <div className={styles.sendbuttonDiv} > 
             <input className={styles.sendbutton} type="button" value="Send" onClick={() => handleForm()} />
             <input className={styles.cancelbutton} type="button" value="Cancel" onClick={() => setModalIsOpen(false)} />
         </div>
    </Popup>
    // {/* </div> */}
    
  )
  : 
  (
      <Popup> 
      <div className={styles.aftersentmsg}>
         Your message was successfuly recived!
      </div>
      
      </Popup>
      
  )
}

export default Contact
