import axios from "axios";
import SectionCard from "../Components/Section/SectionCard";
import { produk } from "../dummy/data";



export default function App() {
  // axios
  // .post("https://z17xzb9r-3000.asse.devtunnels.ms/login", {
  //   Headers: {
  //     "Content-Type": "application/json",
  //   },
  //   image,
  //   author,
  //   judul,
  //   harga,
  //   kategory
  // })
  // .then((response) => {
  //   console.log()
  // })
  // .catch((error) => {
  //   console.error(
  //     "kata sandi salah atau email tidak terdaftar:",
  //     error.response.data
  //   );
  //   alert(error.response.data.message);
  // });
  return (
    <div className="bg-white text-white mt-12 flex-1 flex flex-col gap-36 transition-all duration-300">
      <SectionCard
        title="Buku Novel"
        data={produk.filter((item) => item.type == "Novel")}
      />
    </div>
  );
}
