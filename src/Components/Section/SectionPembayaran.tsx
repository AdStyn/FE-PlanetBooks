import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { produk } from "../../dummy/data";
import axios from "axios";

function PembayaranBook() {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    judulpembayaran: string;
    autorpemabyaran: string;
    bukupembayaran: string;
    hargapembayaran: string;
  }>({
    judulpembayaran: "",
    autorpemabyaran: "",
    bukupembayaran: "",
    hargapembayaran: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://z17xzb9r-3000.asse.devtunnels.ms/showprofile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData({
          name: response.data.data.username,
          email: response.data.data.email,

        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        
      });
    if (id) {
      const product = produk.find((item) => item.id === parseInt(id));
      if (product) {
        setData({
          judulpembayaran: product.judul,
          autorpemabyaran: product.author,
          bukupembayaran: product.gambarbuku,
          hargapembayaran: product.harga,
        });
      }
    }
    
  }, [id]);

  console.log(data);

  return (
    <div className="w-full flex-wrap mt-12 bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="flex flex-row bg-white p-6">
          <img
            src={data.bukupembayaran}
            alt="Cover imaage"
            className="w-40 h-52 mb-4 ml-5 shadow-md object-cover mr-6"
          />

          <div className="w-full">
            <div className="w-full text-black py-2 px-4 mb-2 rounded-full">
              <h1 className="text-3xl font-bold mb-1">
                {data.judulpembayaran}
              </h1>
              <p className="text-gray-600 mb-4">{data.autorpemabyaran}</p>

             <div  className="w-full p-2 text-black text-center border border-blue-950 rounded-full">
             {userData.name ||"username"}
             </div>
            </div>
            <div className="w-full text-gray-600 py-2 px-4 mb-2 rounded-full">
             <div  className="w-full p-2 text-black text-center border border-blue-950 rounded-full">
             {userData.email ||"Email"}
             </div>
            </div>
            <button className="w-full bg-gray-200 text-gray-600 py-2 px-4 mb-4 rounded-full flex items-center justify-between">
              Pilih metode pembayaran
              <select className=" text-black text-[20px] rounded-lg">
          <option>
            <img src="/bri.png" alt="BRI" className="inline-block mr-2 h-6 w-6" />
            BRI
          </option>
          <option>
            <img src="/dana.png" alt="Dana" className="inline-block mr-2 h-6 w-6" />
            Dana
          </option>
          <option>
            <img src="/mandiri.png" alt="Mandiri" className="inline-block mr-2 h-6 w-6" />
            Mandiri
          </option>
        </select>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full max-w-md mt-6">
          <button
            className="bg-blue-900 text-white py-2 px-6 rounded-full"
            onClick={() => navigate("/Layout")}
          >
            Kembali
          </button>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Harga:</span>
            <span className="text-blue-600 text-2xl font-bold">
              {data.hargapembayaran}
            </span>
          </div>
          <button className="bg-blue-900 text-white py-2 px-6 rounded-full ">
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
export default PembayaranBook;
