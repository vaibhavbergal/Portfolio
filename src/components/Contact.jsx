import React, { useRef, useState } from "react";
import { Container } from "./index";
import { MdLocationPin, MdMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setMsg("Message sent successfully");
    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: <MdMail />,
      title: "Mail",
      info: "bergalvaibhav33@gmail.com",
      link: "mailto:bergalvaibhav33@gmail.com",
    },
    {
      id: 2,
      icon: <MdLocationPin />,
      title: "Location",
      info: "Pune, Maharashtra, India",
    },
    {
      id: 3,
      icon: <FaUser />,
      title: "Resume",
      info: "Download my Resume",
      link: "https://drive.google.com/file/d/1VXyZS6s5Nn5VXO7YD9sRJpM0FkW5G6jJ/view?usp=sharing",
    },
  ];
  return (
    <Container id="contact" className="pt-5 md:py-5">
      <h1 className="py-1 text-2xl font-bold text-gray-400 border-b md:py-2 dark:border-white/30 border-black/30 md:text-4xl font-mooli">
        Contact Me
      </h1>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2">
          {contactInfo.map((info) => {
            return (
              <ul
                key={info.id}
                className="flex items-center py-4 gap-7 font-ubuntu"
              >
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-2xl text-white bg-blue-600 rounded-full cursor-pointer hover:scale-105"
                >
                  {info.icon}
                </a>
                <li className="flex flex-col justify-center gap-3 tracking-widest">
                  <h1 className="font-mono text-xl leading-4 ">{info.title}</h1>
                  <p className="text-sm text-black/60 dark:text-gray-400 ">
                    {info.info}
                  </p>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full p-2 px-3 bg-gray-100 rounded-lg shadow-md outline-yellow-500"
            />
            <input
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="w-full p-2 px-3 my-5 bg-gray-100 rounded-lg shadow-md outline-yellow-500"
            />
            <textarea
              name="Massage"
              id=""
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-2 px-3 bg-gray-100 rounded-lg shadow-xl outline-yellow-500"
            ></textarea>

            <button
              type="submit"
              className="py-2 mt-3 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] transition-all duration-100 text-white hover:scale-105 font-medium text-xl w-full text-center font-mooli md:w-fit justify-center bg-yellow-500 rounded-lg px-7 flex items-center gap-2"
            >
              Send <FaPaperPlane className="text-lg" />
            </button>
          </form>{" "}
          <span id="msg" className="pl-1 text-sm text-red-500 font-mooli">
            {msg}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
