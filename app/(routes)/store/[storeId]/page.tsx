import StoreList from "@/components/store-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info-store";
import getStore from "@/actions/get-store";
import getStores from "@/actions/get-stores";
import Container from "@/components/ui/container";

export const revalidate = 0;

interface StorePageProps {
  params: {
    storeId: string;
  };
}

const StorePage: React.FC<StorePageProps> = async ({ params }) => {
  const product = await getStore(params.storeId);
  // const suggestedStores = await getStores({
  //   categoryId: product?.category?.id
  // });

  const suggestedStores = await getStores();

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <StoreList title="Related Items" items={suggestedStores} />
        </div>
      </Container>
    </div>
  );
};

export default StorePage;
