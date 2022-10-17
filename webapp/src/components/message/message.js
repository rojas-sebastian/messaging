function Message(props) {
  console.log(props);
  return (
    <div className="p-2 w-1/3 items-center">
      <label className="text-left" id="chat">
        {props.phone}
      </label>
      <span
        id="chat"
        className="items-center rounded-lg rounded-br-none bg-blue-600 text-white flex flex-col p-2"
      >
        {props.text}
      </span>
    </div>
  );
}

export default Message;
