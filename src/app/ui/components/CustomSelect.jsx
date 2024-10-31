import CustomError from "./CustomError";

export default function CustomSelect({
  label,
  name,
  value,
  onChange,
  options,
  errors = [],
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="uppercase tracking-widest font-sans font-extralight text-sm text-foreground"
        htmlFor={name}
      >
        {label}
      </label>

      <select
        className="w-full py-2 px-3 rounded-lg tracking-widest font-sans font-normal text-sm text-background bg-foreground"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">{`Choose ${label}`}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors.map((error) => (
        <CustomError key={error} error={error} />
      ))}
    </div>
  );
}
