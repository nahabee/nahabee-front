import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const postForm = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}api/form`,
        {
          name: name,
          email: email,
          message: message,
        },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-creme mobS:bg-grey">
      <div
        className="block p-6 pt-12 rounded-lg shadow-2xl m-auto w-1/2 -mt-10
        font-body mobS:w-4/5 mobS:mt-3"
      >
        <form
          onSubmit={(e) => {
            postForm(e);
          }}
        >
          <div className="mb-6">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              required={true}
              type="text"
              value={name}
              className="
        w-full
        px-3
        py-1.5
        rounded
        transition
        ease-in-out
        m-0
       outline-none
       focus:shadow-md"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className=" mb-6">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              value={email}
              required={true}
              className="
        w-full
        px-3
        py-1.5
        text-gray-700
        bg-white bg-clip-padding
        rounded
        transition
        ease-in-out
        m-0
        outline-none
        focus:shadow-md
       "
              id="mail"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <textarea
              value={message}
              required={true}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="
        w-full
        px-3
        py-1.5

    resize-none
        text-gray-700
        bg-white bg-clip-padding
        
        rounded
        transition
        ease-in-out
        m-0
         outline-none
         focus:shadow-md
      "
              id="message"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex 
      
      px-6
      py-2.5
      bg-grey
      text-white
      text-xs
  
      uppercase
      rounded
      
       hover:bg-transparent hover:text-dark hover:border-grey hover:border mobS:bg-creme mobS:text-dark"
          >
            Send
          </button>
          <div className="flex gap-4 font-body justify-end text-grey mobS:text-creme">
            <a
              href="mailto: hello.nahabee@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p>Gmail</p>
            </a>
            <a href="https://www.instagram.com/nahabee/" target="_blank">
              <p>Instagram</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
