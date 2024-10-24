import Badge from "@/app/ui/components/Badge";

export default function Home() {
  return (
    <div className="flex flex-col h-[48rem] w-full items-center gap-12 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden py-60 pr-1">
      <div className="flex flex-col gap-8 snap-center w-full flex-shrink-0 flex-grow-0">
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-3xl tracking-widest">
            nextjs-financial-web-app
          </h3>

          <div className="flex gap-4 flex-wrap">
            <Badge
              src={"/nextjs-logo.svg"}
              brand={"nextjs"}
              alt={"nextjs logo"}
            >
              NextJS
            </Badge>

            <Badge
              src={"/tailwind-logo.svg"}
              brand={"tailwind"}
              alt={"tailwind logo"}
            >
              Tailwind CSS
            </Badge>

            <Badge
              src={"/typescript-logo.svg"}
              brand={"typescript"}
              alt={"typescript logo"}
            >
              Typescript
            </Badge>

            <Badge
              src={"/postgres-logo.png"}
              brand={"postgres"}
              alt={"postgres logo"}
            >
              Postgres
            </Badge>
          </div>
        </div>

        <div className="border max-w-[32rem] h-[18rem] rounded-lg"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          mi risus. Nulla volutpat lacus ac nisl sodales, non pharetra justo
          ornare. Nunc volutpat condimentum interdum. Fusce sollicitudin enim in
          tellus maximus, ut elementum est feugiat. Quisque imperdiet dictum
          accumsan. Pellentesque tortor libero, facilisis et volutpat sed,
          ullamcorper ut ipsum. Donec sit amet erat id tellus dapibus molestie.
          Suspendisse nec nulla commodo augue iaculis gravida sit amet sed erat.
          Aenean dignissim arcu vel metus dapibus facilisis a at risus.
          Phasellus accumsan, turpis vel rhoncus volutpat, lorem metus
          pellentesque ipsum, vitae placerat nibh tellus vitae est.
        </p>
      </div>
    </div>
  );
}
