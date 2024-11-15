"use client";

import { addTechnology } from "@/app/lib/actions";
import Box from "@/app/ui/components/Box";
import CustomInput from "@/app/ui/components/CustomInput";
import CustomSelect from "@/app/ui/components/CustomSelect";
import { useState, useEffect, useActionState } from "react";
import ClearButton from "@/app/ui/components/ClearButton";
import TechBadge from "@/app/ui/components/TechBadge";

export default function Page() {
  const initialState = {
    defaultValues: {
      name: null,
      label: null,
      src: null,
      color: null,
      officialLink: null,
      relevanceRank: null,
    },
    message: null,
    errors: {},
  };

  const [state, formAction] = useActionState(addTechnology, initialState);
  const [technologyList, setTechnologyList] = useState([]);

  return (
    <Box>
      <h2 className="font-mono text-2xl tracking-widest mb-4">
        ADD NEW TECHNOLOGY
      </h2>

      <form action={formAction}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <CustomInput
              type={"text"}
              label={"Name"}
              name={"name"}
              placeholder={"Enter name"}
              errors={state.errors?.name && state.errors.name}
              defaultValue={state.defaultValues.name}
            />

            <CustomInput
              type={"text"}
              label={"Label"}
              name={"label"}
              placeholder={"Enter label"}
              errors={state.errors?.label && state.errors.label}
              defaultValue={state.defaultValues.label}
            />
          </div>

          <div className="flex flex-row gap-4">
            <CustomSelect
              label={"Logo Type"}
              name={"logo"}
              options={[
                { value: "png", label: "PNG" },
                { value: "svg", label: "SVG" },
              ]}
              errors={state.errors?.logo && state.errors.logo}
            />

            <CustomInput
              type={"text"}
              label={"Color"}
              name={"color"}
              placeholder={"Enter color"}
              errors={state.errors?.color && state.errors.color}
              defaultValue={state.defaultValues.color}
            />
          </div>

          <div className="flex flex-row gap-4">
            <CustomInput
              type={"url"}
              label={"Official Link"}
              name={"officialLink"}
              placeholder={"Enter official link"}
              errors={state.errors?.officialLink && state.errors.officialLink}
              defaultValue={state.defaultValues.officialLink}
            />

            <CustomInput
              type={"number"}
              label={"Relevance Score"}
              name={"relevanceRank"}
              placeholder={"Enter relevance score"}
              errors={state.errors?.relevanceRank && state.errors.relevanceRank}
              defaultValue={state.defaultValues.relevanceRank}
            />
          </div>

          <div className="flex flex-row gap-4">
            <button
              className="mt-2 flex w-fit font-mono text-lg tracking-widest py-1 font-medium bg-foreground text-background px-4 rounded-lg hover:bg-accent-600 hover:text-foreground"
              type="submit"
            >
              CREATE
            </button>
          </div>
        </div>
      </form>
    </Box>
  );
}
