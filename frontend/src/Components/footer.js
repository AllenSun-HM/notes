import react from 'react'
import {useState, useEffect, useRef} from 'react'
import styles from '../css/index.css'
import  '../css/index.css'

const Footer = () => {
    const ref = useRef(<div></div>)

    useEffect(() =>
{
        console.log('mounted')
        return () => (console.log('unmounted'))
}, [])
    
    console.log(ref.current.innerHTML)
    return(
        <div className="bottom">
    <br />
    <em ref={ref} className={styles.bottom} >Note app, developed by Haiming Sun 2020</em>
        </div>
    )
}


export default Footer