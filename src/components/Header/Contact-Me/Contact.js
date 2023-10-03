import React,{useState} from 'react'
import "./Contact.css"
import Box from './Box'
import { PiMapPinFill,PiPhoneBold,PiTelegramLogoBold ,PiGlobeDuotone } from 'react-icons/pi';

export default function Contact() {

  const [contactBoxes ,setContactBox] = useState([
    {id:1 ,icon:<PiMapPinFill className="icon"/>, title:"address" , subTitle: "198 West 21th Street, Suite 721 New York NY 10016"},
    {id:2 ,icon:<PiPhoneBold className="icon"/>, title:"Complete Projects" , subTitle: "+ 1235 2355 98"},
    {id:3 ,icon:<PiTelegramLogoBold className="icon"/>, title:"Happy Customers" ,subTitle: "info@yoursite.com"},
    {id:4 ,icon:<PiGlobeDuotone className="icon"/>, title:"Cups of coffee" , subTitle: "mohsen.com"},
  ])

  return (
    <div id="contact" className="w-full flex items-center justify-center mt-40 mb-40">
    <div id="contact-container" className="w-[95%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <h4 className="header-text before:content-['Contact'] before:left-[-4] before:top-[-1rem]">Contact Me</h4>
            <p className="w-[90%] text-center text-3xl mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div id="contact-boxes" className="w-full grid grid-cols-4 mt-32">
          {contactBoxes.map(box => (
            <Box key={box.id} {...box}/>
          ))}
        </div>
    </div>
</div>
  )
}
