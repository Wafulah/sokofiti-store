import ProductCard from "@/components/ui/product-card";
import { ProductCart } from "@/types";
import NoResults from "@/components/ui/no-results";

interface ProductListProps {
  title: string;
  items: ProductCart[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item,index) => (
          <ProductCard key={item.id} data={item} index={index} />
        ))}
      </div>
    </div>
   );
}
 
export default ProductList;
