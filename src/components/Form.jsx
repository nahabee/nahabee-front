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
    <div className="h-auto">
      <div className="block p-6 rounded-lg shadow-lg m-auto w-1/2 mt-40 font-body mobS:w-4/5">
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
      leading-tight
      uppercase
      rounded
      shadow-md
     
      transition
      duration-150
      ease-in-out
      focus:shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
