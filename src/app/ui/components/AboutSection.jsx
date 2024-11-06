export default function AboutSection({ mainHeader, subHeader, children }) {
  return (
    <section>
      <h3 className="font-mono font-medium text-2xl text-foreground tracking-wider mb-4">
        {mainHeader}
      </h3>

      {subHeader && (
        <h4 className="uppercase font-sans text-foreground tracking-wide opacity-60 mb-2">
          {subHeader}
        </h4>
      )}

      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
