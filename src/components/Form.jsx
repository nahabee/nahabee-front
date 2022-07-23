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
    <div className="">
      <h1 className="font-title flex opacity-80 w-1/2 z-50 text-8xl m-auto mt-20 mobS:text-5xl mobS:mt-40 mobS:m-0 mobS:ml-5 mobS:text-creme mobS:opacity-100">
        Ask anything
      </h1>
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
      
       hover:bg-transparent hover:text-dark hover:border-grey hover:border"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
