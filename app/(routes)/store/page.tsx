import getBillboard from "@/actions/get-billboard";
import getStores from "@/actions/get-stores";
import StoreList from "@/components/store-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getStores();
  const billboard = await getBillboard("fcd238a6-478c-4d63-8377-58eaf8978e14");

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

export default HomePage;
