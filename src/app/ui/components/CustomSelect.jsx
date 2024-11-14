import CustomButton from "@/app/ui/components/CustomLink";
import CustomError from "@/app/ui/components/CustomError";
import { Add } from "@mui/icons-material";

export default function CustomSelect({
  label,
  name,
  options,
  errors = [],
  defaultValue,
  value,
  onChange,
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="uppercase tracking-widest font-sans font-extralight text-sm text-foreground text-nowrap"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="flex flex-row gap-2">
        <select
          className="w-full py-2 px-3 rounded-lg tracking-widest font-sans font-normal text-sm text-background bg-foreground"
          id={name}
          name={name}
          defaultValue={defaultValue}
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

        {name === "technology" && (
          <CustomButton
            isFilled={true}
            isIconOnly={true}
            link="/projects/create/add-new-technology"
          >
            <Add className="text-background size-6" />
          </CustomButton>
        )}
      </div>

      {errors.map((error) => (
        <CustomError key={error} error={error} />
      ))}
    </div>
  );
}
