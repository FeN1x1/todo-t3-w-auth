import { Switch } from "@headlessui/react";

const Toggle: React.FC<{
  active: boolean;
  id: string;
  handleCheckbox: (id: string, checked: boolean) => void;
}> = ({ active, id, handleCheckbox }) => {
  return (
    <Switch
      checked={active}
      onChange={() => handleCheckbox(id, active)}
      className={`${active ? "bg-purple-600" : "bg-purple-300"} relative inline-flex h-[28px] w-[52.2px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <>
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${active ? "translate-x-6" : "translate-x-0"} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </>
    </Switch>
  );
};

export default Toggle;
