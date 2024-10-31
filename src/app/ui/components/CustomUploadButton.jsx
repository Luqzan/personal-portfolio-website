import { generateUploadButton } from "@uploadthing/react";
import { twMerge } from "tailwind-merge";

const UploadButton = generateUploadButton();

export default function CustomUploadButton({
  endpoint,
  input,
  headers,
  onClientUploadComplete,
  onUploadError,
  onUploadAborted,
  onUploadProgress,
  onBeforeUploadBegin,
  onUploadBegin,
  disabled,
}) {
  return (
    <UploadButton
      config={{ appendOnPaste: true, mode: "auto", cn: twMerge }}
      appearance={{
        button:
          "w-fit uppercase font-mono text-lg tracking-widest py-1 font-medium bg-foreground text-background px-4 rounded-lg hover:bg-accent-600 hover:text-foreground",
        container: "w-fit h-fit flex flex-col gap-1",
        allowedContent: "font-sans text-neutral-500 tracking-widest",
      }}
      endpoint={endpoint}
      input={input}
      headers={headers}
      onClientUploadComplete={onClientUploadComplete}
      onUploadError={onUploadError}
      onUploadAborted={onUploadAborted}
      onUploadProgress={onUploadProgress}
      onBeforeUploadBegin={onBeforeUploadBegin}
      onUploadBegin={onUploadBegin}
      disabled={disabled}
    />
  );
}
