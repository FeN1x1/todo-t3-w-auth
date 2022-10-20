const Input: React.FC<{
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: () => void;
}> = ({ value, handleOnChange, handleOnClick }) => {
  return (
    <div className="flex">
      <input value={value} onChange={handleOnChange} />
      <button
        className="h-4 w-4 bg-purple-300"
        onClick={handleOnClick}
      ></button>
    </div>
  );
};

export default Input;
