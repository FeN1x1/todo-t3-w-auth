const Input: React.FC<{
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: () => void;
}> = ({ value, handleOnChange, handleOnClick }) => {
  return (
    <div className="mx-auto flex gap-2">
      <input
        className="my-2 rounded border border-pink-300 px-2 py-1"
        value={value}
        onChange={handleOnChange}
      />
      <button
        className={`my-2 rounded border border-pink-300 px-4 py-1 font-semibold transition-colors duration-200 ${
          value !== "" ? "hover:bg-pink-300" : "cursor-not-allowed"
        }`}
        onClick={handleOnClick}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
