import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="mt-3 grid grid-cols-4 gap-4">
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
        </div>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-1">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          </div>
          <div className="col-span-1 lg:hidden">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          </div>
          <div className="col-span-1 lg:hidden">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          </div>
          <div className="hidden lg:block col-span-1">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          </div>
          <div className="hidden lg:block col-span-1">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          </div>
        </div>

        <div className="mt-2 h-[8px] w-[60vw] md:w-[30vw] rounded-full">
          <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
        <div className="mt-1 h-[6px] w-[30vw] md:w-[15vw] rounded-full">
          <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
