import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
type Props = {
  visible: boolean;
  onClose: () => void;
  gambarbuku: string;
  autorbuku: string;
  judulbuku: string;
  isi: string;
  hargabuku: string;
  id: number;
};

function BookModal({
  visible,
  onClose,
  gambarbuku,
  autorbuku,
  judulbuku,
  isi,
  hargabuku,
  id
  
}: Props) {

  return (
    <Modal isOpen={visible} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-1 items-center justify-center mb-4">
            <img
              src={gambarbuku}
              alt=""
              className="rounded-lg grid-cols-4 gap-4 shadow-md h-auto w-48"
            />
             <h3 className="flex items-center justify-center">{autorbuku}</h3>
             <h1 className="flex font-bold text-black text-2xl items-center justify-center">{judulbuku}</h1>
          </div>
          <h2 className="font-bold text-3xl">Sipnosis:</h2>
          <p>{isi}</p>
        </ModalBody>
        <ModalFooter>
          <h1 className="mb-2 font-bold">
            Harga: <span className="text-blue-600 text-2xl">{hargabuku}</span>
          </h1>
          <Button color="primary" onClick={() => window.location.assign("/Layout/pembayaran?id="+id)}>
            CheckOut
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    
  );
}
export default BookModal;