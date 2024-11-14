import gambar1 from "../assets/gambar1.png";
import bukunovel from "../assets/bukunovel.png";
import bukucerpen from "../assets/bukucerpen.png";
import bukudongeng from "../assets/bukudongeng.png";
import bukuscifi from "../assets/bukuscifi.png";
import { useNavigate } from "react-router-dom";
import SectionCard from "../Components/Section/SectionCard";
import { produk } from "../dummy/data";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const navigate = useNavigate();
  const [pilihBuku, setPilihBuku] = useState([]); // State untuk menyimpan data produk
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState<string | null>(null); // Bisa menerima string atau null

  // Function untuk mengambil data produk dari backend
  const fetchProdukBukuData = async () => {
    try {
      const response = await axios.get(
        "https://z17xzb9r-3000.asse.devtunnels.ms/kategori/tampil"
      );
      setPilihBuku(response.data.data); // Set data yang diterima dari backend
      setLoading(false); // Matikan loading saat data sudah didapat
    } catch (error) {
      console.error("Error fetching produk data:", error);
      setError("Failed to load produk data, please try again later.");
      setLoading(false); // Matikan loading meski terjadi error
    }
  };

  // Panggil function untuk mendapatkan data produk saat komponen dimuat
  useEffect(() => {
    fetchProdukBukuData();
  }, []); // Dependency array kosong supaya hanya dipanggil sekali

  // Jika masih loading, tampilkan loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  // Jika ada error, tampilkan pesan error
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

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