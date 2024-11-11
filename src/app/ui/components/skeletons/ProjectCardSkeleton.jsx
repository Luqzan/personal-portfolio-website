import Box from "@/app/ui/components/Box";

export default function ProjectCardSkeleton() {
  return (
    <Box className="flex flex-col gap-8 animate-pulse">
      {/* Header Section */}
      <div className="flex flex-col gap-2 sm:gap-0">
        <div className="flex flex-row gap-2 items-start">
          <div className="flex-grow flex flex-col">
            <div className="h-8 w-3/4 bg-neutral-800 rounded-md" />

            <div className="mt-2 h-4 w-1/2 bg-neutral-800 rounded-md" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-6 w-20 bg-neutral-800 rounded-md" />

            <div className="flex flex-row gap-2 flex-nowrap justify-end">
              <div className="h-6 w-6 bg-neutral-800 rounded-full" />
              <div className="h-6 w-6 bg-neutral-800 rounded-full" />
              <div className="h-6 w-6 bg-neutral-800 rounded-full" />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-row flex-wrap gap-2 mt-4">
          <div className="h-4 w-20 bg-neutral-800 rounded-md" />
          <div className="h-4 w-20 bg-neutral-800 rounded-md" />
        </div>
      </div>

      {/* Image/Upload Section */}
      <div className="relative rounded-lg overflow-clip w-full aspect-[16/9] bg-neutral-800">
        {/* Placeholder for image or upload button */}
      </div>

      {/* Technology Badges */}
      <div className="flex flex-row flex-wrap gap-2 mt-4">
        <div className="h-8 w-16 bg-neutral-800 rounded-lg" />
        <div className="h-8 w-16 bg-neutral-800 rounded-lg" />
        <div className="h-8 w-16 bg-neutral-800 rounded-lg" />
      </div>
    </Box>
  );
}
