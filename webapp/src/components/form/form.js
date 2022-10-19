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
      const res = await axios.post(
        `${process.env.REACT_APP_MESSAGING_API}/messaging/api/v1/messages`,
        {
          receiver: phone,
          body: text,
        }
      );
      console.log(res);
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
      <div className="w-2/3  flex flex-col justify-center items-center">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-90"
        >
          Receiver
        </label>
        <PhoneInput
          className="PhoneInput p-2 rounded"
          defaultCountry="CO"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
        <InputArea
          placeholder="Escribe un maximo de 160 caracteres"
          errorMessage="maximo 160 caracteres"
          label="message"
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
