import React, { useEffect, useState } from 'react'
import FirebaseServices from '../../firebase/firebaseServices';
import {
    doc,
    updateDoc,
    arrayRemove,
    arrayUnion,
    setDoc,
    onSnapshot,
} from 'firebase/firestore';

interface IMessage {
    sender: string;
    msg: string;
    time: number;
}

const myCollectionName = 'livechat';
const myDocName = `${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`

type LivechatProps = {

}

const Livechat: React.FC<LivechatProps> = () => {

    const [msg, setMsg] = useState<string>('');
    const [msgArr, setMsgArr] = useState<IMessage[]>([]);
    useEffect(() => {
        console.log('not luupin');
        const firestoreInstance = FirebaseServices.getFirestoreInstance();
        const unsub = onSnapshot(doc(firestoreInstance, myCollectionName, myDocName), doc => {
            console.log('current data', doc.data())
            if (doc.exists()){
                const data = doc.data().livechat as IMessage[];
                setMsgArr(data);
            }
        })
        return () => unsub();
    })

 
    
    const send = () => {

        if (!msg) return;
        
        const now = Date.now();
        const firestoreInstance = FirebaseServices.getFirestoreInstance();
        const docRef = doc(firestoreInstance, myCollectionName, myDocName);
        const MessageRef = {
            message : arrayUnion({
                time: now,
                message: msg,
                sender: 'User'
            })
        }

        updateDoc(docRef, MessageRef)
        .then(() => {
            console.log("Msg Sent!");
            setMsg('')
        })
        .catch(err => {
            const errMsg: string = err.message;
            if(errMsg.includes('No document to update')){
                console.warn('This is first message today');
                setDoc(docRef, MessageRef)
                .then(() => console.log('SENTp'))
                .catch(err => console.error('Could not send!', err.message));
         }
        })

    }  
    
    return (
    <div style={{padding: '20px'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <input type="text"  value={msg} onChange={(e) => setMsg(e.target.value)}/>
      <button onClick={() => send()}>Send</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

        {
        msgArr.map(x => ( 
            <div key={x.time}>
            <p>{x.sender}</p>
            <p>{x.msg}</p>
            <p>{x.time}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Livechat
