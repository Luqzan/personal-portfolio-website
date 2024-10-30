export default function CustomInput({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  multiple = false,
  errors = [],
  defaultValue,
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="uppercase tracking-widest font-sans font-extralight text-sm text-foreground"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        className="w-full py-2 px-3 rounded-lg tracking-widest font-sans font-normal text-sm text-background bg-foreground"
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        multiple={multiple}
        defaultValue={defaultValue}
      />

      {errors.map((error) => (
        <p
          className="font-sans font-light text-red-500 text-sm tracking-widest"
          key={error}
        >
          {error}
        </p>
      ))}
    </div>
  );
}