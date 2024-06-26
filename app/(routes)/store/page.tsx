import getBillboard from "@/actions/get-billboard";
import getStores from "@/actions/get-stores";
import StoreList from "@/components/store-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const StorePage = async () => {
  const products = await getStores();
  const billboard = await getBillboard("53331988-8c0f-4374-bb5d-75e197bd5505");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <StoreList title="Fashion Stores" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default StorePage;
