function Input(props) {
  const { errorMessage, label, onChange, ...rest } = props;
  return (
    <div className="formInput flex flex-col items-center justify-center">
      <label className="p-2">{label}</label>
      <input
        {...rest}
        className="peer w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:italic focus:ring-blue-500 focus:border-blue-500 block p-2 invalid:border-red-600 valid:border-green-500"
        onChange={onChange}
      />
      <span className="text-end text-red-600 text-xs hidden peer-invalid:block ">
        {errorMessage}
      </span>
    </div>
  );
}

export default Input;
