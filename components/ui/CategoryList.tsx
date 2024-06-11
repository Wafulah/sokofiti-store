import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryProps {
  title: string;
  data: Category[];
}

const CategoryList: React.FC<CategoryProps> = ({ title, data }) => {
  return (
    <div className="w-full h-[200px] ">
      <div className="w-11/12 mx-auto h-5/6 mt-7 ">
        <h3 className="font-bold text-3xl">{title}</h3>
        <ScrollArea className="w-full h-3/4 ">
          <div className="flex h-[100px] w-max gap-4 ">
            {data.map((item) => (
              <figure key={item.id} className="w-[30vw] shrink-0">
                <Link
                  href={`category/${item.name}`}
                  key={item.id}
                  className="w-[70px] h-3/4 mt-2 "
                >
                  <div className="rounded-[50%] relative w-full h-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="aspect-square object-cover rounded-md"
                      sizes="(max-width: 640px) 70px, 70px"
                    />
                  </div>
                  <figcaption className="text-gray-500">{item.name}</figcaption>
                </Link>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryList;
