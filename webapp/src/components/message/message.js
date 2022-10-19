import moment from "moment";

function Message(props) {
  const { date } = props;
  return (
    <div className="p-2 w-1/4">
      <span
        id="chat"
        className=" rounded-lg rounded-br-none bg-blue-500 text-white flex flex-col p-2"
      >
        <label className="text-left text-sm text-lime-400" id="chat">
          {props.phone}
        </label>
        {props.text}
        <label className="text-sm text-right">
          {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
        </label>
      </span>
    </div>
  );
}

export default Message;
