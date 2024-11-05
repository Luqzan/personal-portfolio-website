import clsx from "clsx";

export default function ProjectStatusBadge({ status }) {
  return (
    <p
      className={clsx(
        "uppercase font-sans font-light text-xs tracking-widest border rounded-xl px-2 text-nowrap",
        {
          "text-yellow-500 border-yellow-500": status === "Ongoing",
          "text-green-500 border-green-500": status === "Completed",
          "text-red-500 border-red-500": status === "Abandoned",
        }
      )}
    >
      {status === "Ongoing" ? "In Progress" : status}
    </p>
  );
}
