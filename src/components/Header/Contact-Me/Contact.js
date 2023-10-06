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
    <div id="contact-section" className="w-full flex items-center justify-center mt-40 mb-40">
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
        <div className="w-full flex items-center justify-center mt-20">
          <div className="w-[95%] h-[95vh] mx-auto flex bg-[#1e1e1e] rounded-md">
            <div className="img w-1/2 flex items-center justify-center">
              <img className="h-[61.5rem]" src="./img/me/msg317320486-21967_prev_ui.png" alt="" />
            </div>
            <div className="form w-1/2 h-full bg-white">
              <form action="#" className="w-[85%] p-12 mx-auto my-8 flex flex-col items-center">
                <div className="w-full mb-8">
                  <input type="text" placeholder="Your Name" className="form-input"/>
                </div>
                <div className="w-full mb-8">
                  <input type="text" placeholder="Your Email" className="form-input"/>
                </div>
                <div className="w-full mb-8">
                  <input type="text" placeholder="Subject" className="form-input"/>
                </div>
                <div className="w-full mb-8">
                  <textarea placeholder="Message" className="w-full h-64 p-6 outline-none rounded-xl border border-neutral-400 text-2xl text-[#191919]" style={{resize: "none" }}></textarea>
                </div>
                <div className="w-full mb-8">
                  <input className="btn py-6 px-16 text-2xl cursor-pointer" type="submit" value={"SEND MESSAGE"} />
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}
