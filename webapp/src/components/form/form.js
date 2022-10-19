import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputArea from "./input";

function Form() {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  async function sendMessage() {
    try {
      await axios.post(
        `${process.env.REACT_APP_MESSAGING_API}/messaging/api/v1/messages`,
        {
          receiver: phone,
          body: text,
        },
        { timeout: 1000 }
      );
      toast.success("SMS enviado exitosamente");
    } catch (error) {
      toast.error(
        "Se produjo un error inesperado, por favor intentelo de nuevo"
      );
    } finally {
      setPhone("");
      setText("");
    }
  }

  return (
    <div className="h-[35rem] justify-center items-center flex ">
      <div className="container w-9/12 h-auto flex flex-col sm:w-8/12 md:w-1/2 lg:w-1/3">
        <label
          htmlFor="phone"
          className="p-3 text-lg font-medium text-gray-90 text-start "
        >
          Receiver:
        </label>
        <PhoneInput
          className="PhoneInput p-2 rounded"
          tittle="phone input"
          defaultCountry="CO"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
        <label
          htmlFor="phone"
          className="p-3 text-lg font-medium text-gray-90 text-start "
        >
          Message:
        </label>
        <InputArea
          placeholder="Escribe un maximo de 160 caracteres"
          errorMessage="maximo 160 caracteres"
          pattern=".{0,160}$"
          required
          value={text}
          onChange={onChange}
        ></InputArea>
        <div className="Button p-2.5">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={(e) => {
              sendMessage();
              console.log(phone, text);
            }}
          >
            Submit
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
}

export default Form;
