import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
// import { produk } from "../../dummy/data";
import axios from "axios";
// import { image } from "@nextui-org/react";


function PembayaranBook() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [pembayaran, setPembayaran] = useState({
    image: "",
    judulbuku: "",
    author: "",
    harga:"",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      console.log("Get data");
      const token = localStorage.getItem("token");
      console.log();

      console.log(token);
      if (!token) {
        setError("Token not found. Please login.");
        setLoading(false);
        return;
      }
      axios
        .get("https://z17xzb9r-3000.asse.devtunnels.ms/showprofile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData({
            name: response.data.data.name,         
            email: response.data.data.email,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setError("Failed to fetch user data.");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getTransaksi = async () => {
    try {
      console.log("Get data");
      const token = localStorage.getItem("token");
      console.log();

      console.log(token);
      if (!token) {
        setError("Token not found. Please login.");
        setLoading(false);
        return;
      }
      axios
        .get("https://z17xzb9r-3000.asse.devtunnels.ms/transaksi", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPembayaran({
            image: response.data.data.image,
            judulbuku: response.data.data.judulbuku,         
            author: response.data.data.author,
            harga: response.data.data.harga,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setError("Failed to fetch user data.");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=>{
  getData();
  getTransaksi();
})
  return (
    <div className="w-full flex-wrap mt-12 bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="flex flex-row bg-white p-6">
          <img
            src={pembayaran.image}
            alt="Cover imaage"
            className="w-40 h-52 mb-4 ml-5 shadow-md object-cover mr-6"
          />

          <div className="w-full">
            <div className="w-full text-black py-2 px-4 mb-2 rounded-full">
              <h1 className="text-3xl font-bold mb-1">
                {pembayaran.judulbuku}
              </h1>
              <p className="text-gray-600 mb-4">{pembayaran.author}</p>

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
              {pembayaran.harga}
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


// digunakan untuk memanggil data dari dummi
 // const [data, setData] = useState<{
  //   judulpembayaran: string;
  //   autorpemabyaran: string;
  //   bukupembayaran: string;
  //   hargapembayaran: string;
  // }>({
  //   judulpembayaran: "",
  //   autorpemabyaran: "",
  //   bukupembayaran: "",
  //   hargapembayaran: "",
  // });
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  // });
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get("id");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   axios
  //     .get("https://z17xzb9r-3000.asse.devtunnels.ms/showprofile", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setUserData({
  //         name: response.data.data.username,
  //         email: response.data.data.email,

  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
        
  //     });
  //   if (id) {
  //     const product = produk.find((item) => item.id === parseInt(id));
  //     if (product) {
  //       setData({
  //         judulpembayaran: product.judul,
  //         autorpemabyaran: product.author,
  //         bukupembayaran: product.gambarbuku,
  //         hargapembayaran: product.harga,
  //       });
  //     }
  //   }
    
  // }, [id]);

  // console.log(data);