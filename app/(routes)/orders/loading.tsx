import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
          <div className="mt-2 h-[8px] w-[60vw] md:w-[30vw] rounded-full">
            <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
          </div>
          <div className="mt-1 h-[6px] w-[30vw] md:w-[15vw] rounded-full">
            <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
            <Skeleton className="bg-[rgba(255,0,0,0.54)] aspect-square rounded-xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
