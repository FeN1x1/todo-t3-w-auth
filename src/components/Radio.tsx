import { RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import type { TodoFilters } from "../pages";

const Radio: React.FC<{
  radio: TodoFilters;
  setRadio: Dispatch<SetStateAction<TodoFilters>>;
}> = ({ radio, setRadio }) => {
  return (
    <RadioGroup className="flex gap-2" value={radio} onChange={setRadio}>
      <RadioGroup.Option value="All">
        {({ checked }) => (
          <div
            className={`cursor-pointer rounded border border-pink-300 py-1 px-2 font-semibold ${
              checked ? "bg-pink-300" : ""
            }`}
          >
            All
          </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="Completed">
        {({ checked }) => (
          <div
            className={`cursor-pointer rounded border border-pink-300 py-1 px-2 font-semibold ${
              checked ? "bg-pink-300" : ""
            }`}
          >
            Completed
          </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="Not Completed">
        {({ checked }) => (
          <div
            className={`cursor-pointer rounded border border-pink-300 py-1 px-2 font-semibold ${
              checked ? "bg-pink-300" : ""
            }`}
          >
            Not Completed
          </div>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export default Radio;
