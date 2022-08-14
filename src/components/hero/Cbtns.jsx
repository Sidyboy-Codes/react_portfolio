import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { MdConnectWithoutContact } from 'react-icons/md';
import Resume from '../../assets/SiddhantResume.pdf';
import './cbtns.css';
const Cbtns = () => {
  return (
    <div className='btn'>
        <a href={Resume} download>Download Resume <AiOutlineFilePdf/></a>
        <a href="#contact">Contact Me <MdConnectWithoutContact/></a>
    </div>
  )
}

export default Cbtns