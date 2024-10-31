"use client";
import Box from "@/app/ui/components/Box";
import CustomError from "@/app/ui/components/CustomError";
import CustomUploadButton from "@/app/ui/components/CustomUploadButton";
import { nanoid } from "nanoid";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const [errorMessage, setErrorMessage] = useState("");

  function handleUploadComplete(response) {
    // console.log("-------------------------------------");
    // console.log("UPLOAD COMPLETE:");
    // console.log(response);
    // console.log("-------------------------------------");
  }

  function handleUploadError(err) {
    setErrorMessage(err.message);

    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }

  function handleBeforeUploadBegin(files) {
    return files.map(
      (f) =>
        new File([f], `project-${params.id}-${nanoid()}`, {
          type: f.type,
        })
    );
  }

  return (
    <Box className="flex flex-col gap-4 items-center">
      <CustomUploadButton
        endpoint="projectImageUploader"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={handleUploadError}
        onBeforeUploadBegin={handleBeforeUploadBegin}
      />

      {errorMessage && <CustomError error={errorMessage} />}
    </Box>
  );
}
