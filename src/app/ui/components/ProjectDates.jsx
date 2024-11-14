export default function ProjectDates({ start, complete }) {
  const startDate = new Date(start);
  const completeDate = new Date(complete);
  return (
    <p className="uppercase font-sans font-light text-foreground text-xs tracking-widest opacity-80">
      {startDate.toLocaleDateString()}
      {` - ${complete ? completeDate.toLocaleDateString() : "Ongoing"}`}
    </p>
  );
}
