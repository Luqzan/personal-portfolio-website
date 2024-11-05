export default function ProjectDates({ start, complete }) {
  return (
    <p className="uppercase font-sans font-light text-foreground text-xs tracking-widest opacity-80">
      {start.toLocaleDateString()}
      {` - ${complete ? complete.toLocaleDateString() : "Ongoing"}`}
    </p>
  );
}
