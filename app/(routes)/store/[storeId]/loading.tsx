import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Skeleton className="bg-[rgba(255,0,0,0.54)] rounded-xl aspect-square" />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="mt-2 h-[8px] w-[60vw] md:w-[15vw] rounded-full">
          <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
        <div className="w-full h-[2px] mt-2 mb-2">
        <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
        <div className="mt-1 h-[6px] w-[30vw] md:w-[10vw] rounded-full">
          <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
        <div className="mt-1 h-[6px] w-[50vw] md:w-[13vw] rounded-full">
          <Skeleton className="aspect-square rounded-full w-full h-full bg-[rgba(255,0,0,0.54)]" />
        </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
          </div>
        </div>
      </div>
    </Container>
  );
}
 
export default Loading;
