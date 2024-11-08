import { useState } from "react";
import BookModal from "./SectionModal";
type Props = {
  data: {
    img: string;
    author: string;
    judul: string;
    harga: string;
    gambarbuku: string;
    autorbuku: string;
    judulbuku: string;
    isimodal: string;
    hargabuku: string;
    id: number;
  }[];
  title: string;
};
type PropsChild = {
  img: string;
  author: string;
  judul: string;
  harga: string;
  gambarbuku: string;
  autorbuku: string;
  judulbuku: string;
  isimodal: string;
  hargabuku: string;
  id: number;
};
const SectionCard = ({ data, title }: Props) => {
  return (
    <div className="justity-center items-center max-w-6xl mx-auto bg-white p-6 rounded-lg">
      <h1 className="sm:mt-16 md:mt-0 text-4xl text-black font-bold mb-4 md:text-4xl cursor-pointer">
        {title}
      </h1>
      <div className="  grid bg-white rounded-lg gap-4 shadow-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => (
          <SubCard
            key={index}
            img={item.img}
            author={item.author}
            judul={item.judul}
            harga={item.harga}
            id={item.id}
            gambarbuku={item.gambarbuku}
            autorbuku={item.autorbuku}
            judulbuku={item.judulbuku}
            isimodal={item.isimodal}
            hargabuku={item.hargabuku}
          />
        ))}
      </div>
    </div>
  );
};
const SubCard = ({
  img,
  author,
  judul,
  harga,
  gambarbuku,
  autorbuku,
  judulbuku,
  isimodal,
  hargabuku,
  id,
}: PropsChild) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg justity-center items-center">
      <img
        src={img}
        alt="image"
        className="w-[200px] h-auto mb-2 cursor-pointer"
        onClick={() => setModalVisible(true)}
      />
      <p className="text-sm text-gray-700">{author}</p>
      <p className="font-bold text-black text-lg">{judul}</p>
      <p className="text-blue-600 text-lg font-bold">{harga}</p>
      <BookModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        gambarbuku={gambarbuku}
        autorbuku={autorbuku}
        judulbuku={judulbuku}
        isi={isimodal}
        hargabuku={hargabuku}
        id={id}
      />
    </div>
  );
};
export default SectionCard;
