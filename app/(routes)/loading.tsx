import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="w-full h-[200px] ">
          <div className="h-[100px] w-max gap-4 grid grid-cols-4 ">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
          </div>
        </div>
        <div className="h-[10px] w-[60vw] md:w-[30vw] rounded-full">
          <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
