import React, { useState, useRef ,useEffect } from "react";
import { useFormik } from "formik";
import swal from "sweetalert";
import { sendMessage } from "../../../Validations/rules";
import "./Contact.css";
import Box from "./Box";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  PiMapPinFill,
  PiPhoneBold,
  PiTelegramLogoBold,
  PiGlobeDuotone,
} from "react-icons/pi";

export default function Contact() {
  const contactForm = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema : sendMessage
  });

  const [contactBoxes, setContactBox] = useState([
    {
      id: 1,
      icon: <PiMapPinFill className="icon" />,
      title: "address",
      subTitle: "Iran-Tabriz",
    },
    {
      id: 2,
      icon: <PiPhoneBold className="icon" />,
      title: "Phone number",
      subTitle: "09305859071",
    },
    {
      id: 3,
      icon: <PiTelegramLogoBold className="icon" />,
      title: "Happy Customers",
      subTitle: "very much 😂",
    },
    {
      id: 4,
      icon: <PiGlobeDuotone className="icon" />,
      title: "website Address",
      subTitle: "mohsenseyedi.iran.liara.run",
    },
  ]);

  const nameInput = useRef();
  const emailInput = useRef();
  const messagaeInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (contactForm.values.name.length == 0) {
      swal({
        title: "Please Type Your Name",
        icon: "error",
        button: "try again",
      });
    }
    else if (contactForm.values.email.length == 0) {
      swal({
        title: "Please Type Your Email",
        icon: "error",
        button: "try again",
      });
    }
    else if (contactForm.values.message.length == 0) {
      swal({
        title: "Please Type Your Message",
        icon: "error",
        button: "try again",
      });
    }
    else if (contactForm.errors.name) {
      swal({
        title: contactForm.errors.name && contactForm.errors.name,
        icon: "error",
        button: "try again",
      });
    }
    else if (contactForm.errors.message) {
      swal({
        title: contactForm.errors.message && contactForm.errors.message,
        icon: "error",
        button: "try again",
      });
    }
    else {
      swal({
        title: "Email Was Send",
        icon: "success",
        button: "ok",
      }).then(res => {
        contactForm.handleReset()
    })
    }
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
      id="contact-section"
      className="w-full flex items-center justify-center mt-40 mb-40"
    >
      <div
        id="contact-container"
        className="w-[95%] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h4 className="header-text before:content-['Contact'] before:left-[-4] before:top-[-1rem]">
            Contact Me
          </h4>
          <p className="w-[90%] text-center text-3xl mt-14">
          I will be very happy if you are in contact with me, so message me from wherever you want
          </p>
        </div>
        <div
          id="contact-boxes"
          className="w-full grid grid-cols-4 mt-32 md:grid-cols-2 sm:grid-cols-1"
          data-aos="fade-up" data-aos-duration="1000"
        >
          {contactBoxes.map((box) => (
            <Box key={box.id} {...box} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-20">
          <div className="w-[95%] h-[95vh] mx-auto flex bg-[#1e1e1e] rounded-md md:flex-col-reverse md:h-auto md:items-center">
            <div className="img w-1/2 flex items-center justify-center">
              <img
                className="w-full h-full object-contain md:mx-auto"
                src="./img/me/msg317320486-21967_prev_ui.png"
                alt=""
              />
            </div>
            <div className="form w-1/2 h-full bg-white md:w-full">
              <form
                onSubmit={submitHandler}
                id="form-contact"
                action="#"
                className="w-[85%] p-12 mx-auto my-8 flex flex-col items-center"
              >
                <div className="w-full mb-8">
                  <input
                    name="name"
                    value={contactForm.values.name}
                    ref={nameInput}
                    onChange={contactForm.handleChange}
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>
                <div className="w-full mb-8">
                  <input
                    name="email"
                    value={contactForm.values.email}
                    ref={emailInput}
                    onChange={contactForm.handleChange}
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                  />
                </div>
                <div className="w-full mb-8">
                  <textarea
                    name="message"
                    value={contactForm.values.message}
                    ref={messagaeInput}
                    onChange={contactForm.handleChange}
                    placeholder="Message"
                    className="w-full h-64 p-6 outline-none rounded-xl border border-neutral-400 text-2xl text-[#191919]"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="w-full mb-8">
                  <input
                    className="btn py-6 px-16 text-2xl cursor-pointer transition-all duration-300 hover:opacity-75"
                    type="submit"
                    value={"SEND MESSAGE"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
