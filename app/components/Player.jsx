'use client'

import React,{useState} from 'react'

import ReactPlayer from 'react-player'


const Player = () => {
    const [isOpen, setOpen] = useState(false)
    return (
    

        
            <React.Fragment>
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}
                <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
            </React.Fragment>
        
    )
}

export default Player;