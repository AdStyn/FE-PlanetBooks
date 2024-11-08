import SectionCard from "../Components/Section/SectionCard";
import { produk } from "../dummy/data";

const terbaru = () => {
  return (
    <div className="bg-white text-white mt-12 flex-1 flex flex-col gap-36 transition-all duration-300">
      <SectionCard
        title="Buku Novel"
        data={produk.filter((item: { type: string; }) =>item.type=="terbaru")}
      /></div>
  );
};

export default terbaru;
