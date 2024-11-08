import gambar1 from "../assets/gambar1.png";
import bukunovel from "../assets/bukunovel.png";
import bukucerpen from "../assets/bukucerpen.png";
import bukudongeng from "../assets/bukudongeng.png";
import bukuscifi from "../assets/bukuscifi.png";
import { useNavigate } from "react-router-dom";
import SectionCard from "../Components/Section/SectionCard";
import { produk } from "../dummy/data";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-white mt-12 flex-1 flex flex-col gap-36 transition-all duration-300">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-48 px-4"> 
        <div className="text-black mt-16 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-bold">Selamat Datang</h1>
          <h1 className="text-2xl md:text-4xl font-bold">
            di Toko Buku Terpercaya:
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Planet Books
          </h1>
        </div>
        <img src={gambar1} alt="" className="w-auto md:w-[500px] object-cover max-w-full" /> 
      </div>
      {/* Book Categories Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 py-16 bg-white">
        <img
          src={bukunovel}
          alt=""
          onClick={() => navigate("halnvl")}
          className="w-24 md:w-32 rounded-lg shadow-sm bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <img
          src={bukucerpen}
          alt=""
          onClick={() => navigate("halcrp")}
          className="w-24 md:w-32 rounded-lg shadow-sm bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <img
          src={bukudongeng}
          alt=""
          onClick={() => navigate("haldgn")}
          className="w-24 md:w-32 rounded-lg shadow-sm bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <img
          src={bukuscifi}
          alt=""
          onClick={() => navigate("halscifi")}
          className="w-24 md:w-32 rounded-lg shadow-sm bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
      
      {/* Section Cards */}
        <SectionCard 
          title="Rekomendasi Buku"
          data={produk.filter(item => item.type === "Favorit")} 
        />
      <SectionCard 
        title="Buku Favorit"
        data={produk.filter(item => item.type === "Favorit")} 
      />
    </div>
  );
}
export default Home;