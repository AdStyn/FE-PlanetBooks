import SectionCard from "../Components/Section/SectionCard";
import { produk } from "../dummy/data";

export default function App() {
  return (
    <div className="bg-white text-white mt-12 flex-1 flex flex-col gap-36 transition-all duration-300">
      <SectionCard
        title="Buku Sci-Fi"
        data={produk.filter((item) => item.type == "Sci-fi")}
      />
    </div>
  );
}
