'use client'

import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'


const Player = () => {
    const [isOpen, setOpen] = useState(false)
    return (
    

        
            <React.Fragment>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
    
                <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
            </React.Fragment>
        
    )
}

export default Player;