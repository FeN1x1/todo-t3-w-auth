import { RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import type { TodoFilters } from "../pages";

const Radio: React.FC<{
  radio: TodoFilters;
  setRadio: Dispatch<SetStateAction<TodoFilters>>;
}> = ({ radio, setRadio }) => {
  return (
    <RadioGroup value={radio} onChange={setRadio}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <RadioGroup.Option value="All">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>All</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="Completed">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Completed</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="Not Completed">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Not Completed</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export default Radio;
