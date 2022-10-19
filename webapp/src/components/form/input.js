function Input(props) {
  const { errorMessage, label, onChange, ...rest } = props;
  return (
    <div className="formInput flex flex-col items-center justify-center p-2">
      <textarea
        {...rest}
        rows="5"
        className="peer w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:italic focus:ring-blue-500 focus:border-blue-500 block invalid:border-red-600 valid:border-green-500"
        onChange={onChange}
      ></textarea>
      <span className="text-end text-red-600 text-xs hidden peer-invalid:block ">
        {errorMessage}
      </span>
    </div>
  );
}

export default Input;
