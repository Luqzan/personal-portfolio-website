"use client";

import { createProject } from "@/app/lib/actions";
import Box from "@/app/ui/components/Box";
import CustomInput from "@/app/ui/components/CustomInput";
import CustomSelect from "@/app/ui/components/CustomSelect";
import { useState, useEffect, useActionState } from "react";
import ClearButton from "@/app/ui/components/ClearButton";
import TechBadge from "@/app/ui/components/TechBadge";

export default function Page() {
  const initialState = {
    defaultValues: {
      title: null,
      type: null,
      role: null,
      status: null,
      technologies: null,
      liveLink: null,
      githubLink: null,
      apiLink: null,
      downloadLink: null,
      startDate: null,
      completeDate: null,
    },
    message: null,
    errors: {},
  };

  const [state, formAction] = useActionState(createProject, initialState);
  const [technologyList, setTechnologyList] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState(
    state.defaultValues.technologies
      ? state.defaultValues.technologies.split(",").map((item) => item.trim())
      : []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-all-technologies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            columns: ["id", "name", "label", "src", "color"],
            orderBy: "name",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch technology list");
        }

        const result = await response.json();
        setTechnologyList(result);
      } catch (err) {
        console.error("Error fetching technologies:", err);
      }
    }

    fetchData();
  }, []);

  function handleTechnologyChange(e) {
    if (
      !selectedTechnologies.includes(e.target.value) &&
      e.target.value !== ""
    ) {
      setSelectedTechnologies((prev) => [...prev, e.target.value]);
    }
  }

  function handleTechnologyRemove(e) {
    e.preventDefault();

    setSelectedTechnologies(
      selectedTechnologies.filter(
        (selectedTech) => selectedTech !== this.id.toString()
      )
    );
  }

  return (
    <Box>
      <h2 className="font-mono text-2xl tracking-widest mb-4">
        CREATE NEW PROJECT
      </h2>

      <form action={formAction}>
        <div className="flex flex-col gap-4">
          <CustomInput
            type={"text"}
            label={"Title"}
            name={"title"}
            placeholder={"project-title"}
            errors={state.errors?.title && state.errors.title}
            defaultValue={state.defaultValues.title}
          />

          <div className="w-full flex flex-row gap-4">
            <CustomSelect
              label={"Type"}
              name={"type"}
              options={[
                { value: "WebApplication", label: "Web Application" },
                { value: "MobileApplication", label: "Mobile Application" },
                { value: "API", label: "API" },
                { value: "Website", label: "Website" },
              ]}
              errors={state.errors?.type && state.errors.type}
            />

            <CustomSelect
              label={"Role"}
              name={"role"}
              options={[
                {
                  value: "FullStackEngineer",
                  label: "Full-Stack Engineer",
                },
                { value: "FrontEndEngineer", label: "Front-End Engineer" },
                { value: "BackEndEngineer", label: "Back-End Engineer" },
              ]}
              errors={state.errors?.role && state.errors.role}
            />
          </div>

          <div className="w-full flex flex-row gap-4 items-start">
            <div className="flex-1">
              <CustomSelect
                label={"Technologies"}
                name={"technology"}
                onChange={handleTechnologyChange}
                options={technologyList.map(({ id, label }) => ({
                  value: id,
                  label: label,
                }))}
                errors={state.errors?.technologies && state.errors.technologies}
              />

              <input
                type="hidden"
                name="technologies"
                value={selectedTechnologies}
              />
            </div>

            <div className="flex-1">
              <CustomSelect
                label={"Status"}
                name={"status"}
                options={[
                  { value: "Ongoing", label: "Ongoing" },
                  { value: "Completed", label: "Completed" },
                  { value: "Abandoned", label: "Abandoned" },
                ]}
                errors={state.errors?.status && state.errors.status}
              />
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            {technologyList.map((technology) => {
              return (
                selectedTechnologies.includes(technology.id.toString()) && (
                  <div key={technology.id} className="relative group">
                    <TechBadge key={technology.id} technology={technology} />

                    <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                      <ClearButton
                        onClick={handleTechnologyRemove.bind(technology)}
                      />
                    </div>
                  </div>
                )
              );
            })}
          </div>

          <div className="w-full flex flex-row gap-4 items-start">
            <div className="w-2/3 flex flex-col gap-4 items-center">
              <CustomInput
                type={"date"}
                label={"Start Date"}
                name={"startDate"}
                errors={state.errors?.startDate && state.errors.startDate}
                defaultValue={state.defaultValues.startDate}
              />

              <CustomInput
                type={"date"}
                label={"Complete Date"}
                name={"completeDate"}
                errors={state.errors?.completeDate && state.errors.completeDate}
                defaultValue={state.defaultValues.completeDate}
              />

              <button
                className="self-start mt-2 flex w-fit font-mono text-lg tracking-widest py-1 font-medium bg-foreground text-background px-4 rounded-lg hover:bg-accent-600 hover:text-foreground"
                type="submit"
              >
                CREATE
              </button>
            </div>

            <div className="w-1/3 flex flex-col">
              <CustomInput
                type={"url"}
                label={"Links"}
                placeholder={"Live"}
                name={"liveLink"}
                errors={state.errors?.liveLink && state.errors.liveLink}
                defaultValue={state.defaultValues.liveLink}
              />

              <CustomInput
                type={"url"}
                placeholder={"Github"}
                name={"githubLink"}
                errors={state.errors?.githubLink && state.errors.githubLink}
                defaultValue={state.defaultValues.githubLink}
              />

              <CustomInput
                type={"url"}
                placeholder={"API"}
                name={"apiLink"}
                errors={state.errors?.apiLink && state.errors.apiLink}
                defaultValue={state.defaultValues.apiLink}
              />

              <CustomInput
                type={"url"}
                placeholder={"Download"}
                name={"downloadLink"}
                errors={state.errors?.downloadLink && state.errors.downloadLink}
                defaultValue={state.defaultValues.downloadLink}
              />
            </div>
          </div>
        </div>
      </form>
    </Box>
  );
}
