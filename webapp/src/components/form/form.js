import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

function Form() {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  function handleChars() {
    document.documentElement.classList.toggle("show");
  }

  async function senMessage() {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_MESSAGING_API}/messaging/api/v1/messages`,
        {
          phone: phone,
          text: text,
        }
      );
    } catch (error) {
    } finally {
      setPhone("");
      setText("");
    }
  }

  return (
    <div classname="Form">
      <div className="Container flex flex-col w-auto h-screen justify-center items-center">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          To
        </label>
        <PhoneInput
          className="p-2"
          defaultCountry="CO"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          mensaje
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-1/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escribe un maximo de 10 caracteres"
          /* maxLength="10" */
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <div className="Button p-2.5">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={(e) => {
              senMessage();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
