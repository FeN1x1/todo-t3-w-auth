const Input: React.FC<{
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}> = ({ value, handleOnChange, onClick }) => {
  return (
    <div className="flex">
      <input value={value} onChange={handleOnChange} />
      <div className="h-4 w-4 bg-purple-300" onClick={onClick}></div>
    </div>
  );
};

export default Input;
