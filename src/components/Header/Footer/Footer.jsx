import React from 'react'
import { BsGithub ,BsLinkedin } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { AiOutlineInstagram  } from 'react-icons/ai'

export default function Footer() {
  return (
    <section className='flex items-center justify-between px-12 border-solid border-t-2 border-white py-5 sm:flex-col-reverse'>
        <p className='text-white font-swap text-2xl md:text-xl md:pb-2 sm:text-2xl vs:text-sm vs:text-center'>© Developed By Mohsen. All Right Reserved</p>
        <div className='flex gap-10 justify-evenly text-5xl md:text-4xl sm:mb-8 sm:text-5xl'>
            <a href="https://instagram.com/mohsenseyedi1382" target='_blank'><AiOutlineInstagram /></a>
            <a href="https://t.me/Mohsenseis" target='_blank'><BiLogoTelegram /></a>
            <a href="https://github.com/mohsenseyedi" target='_blank'><BsGithub /></a>
            <a href="https://github.com/mohsenseyedi" target='_blank'><BsLinkedin /></a>
        </div>
    </section>
  )
}
