import { useFilterSelect } from "@hooks/home.hooks";
import { FC } from "react";

export interface FilterSelectProps {
  id: string;
  name: string;
  placeholder: string;
  options: { value: string; label: string }[];
  query: string;
}

const FilterSelect: FC<FilterSelectProps> = ({
  id,
  name,
  placeholder,
  options,
  query,
}) => {
  const { handleChange, value } = useFilterSelect({ name, query });

  return (
    <select
      id={id}
      name={name}
      className="relative bg-white w-full h-14 py-4 px-4 border rounded-lg appearance-none bg-chevron-down bg-no-repeat bg-[calc(100%-12px)]"
      onChange={handleChange}
      value={value}
    >
      <option className="text-intergalactic-black/60" value="">
        {placeholder}
      </option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
