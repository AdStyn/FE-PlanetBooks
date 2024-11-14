import React, { useState, useEffect } from "react";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: { image: string | undefined };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  const userImage = user?.image || "/default-profile.png";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState(userImage);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(userImage);
    }
  };

  const handleImageUpdate = async () => {
    setIsLoading(true);
    setError(null);

    if (!selectedFile) {
      setError("Please select an image file to upload.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "https://px973nrz-3000.asse.devtunnels.ms/users/updateImage",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image updated successfully:", response.data);
      onClose();
    } catch (error) {
      console.error("Error updating image:", error);
      setError("An error occurred while uploading the image. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setSelectedFile(null);
      setPreviewImage(userImage);
      setIsLoading(false);
      setError(null);
    };
  }, [onClose, userImage]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Perbarui Foto Profil</h2>
          <button
            className="text-gray-500"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
            {/* Display the image or the alt text */}
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-gray-400">
                Profile Preview
              </span>
            )}
          </div>
          <label htmlFor="profile-image" className="text-blue-500 mb-4 cursor-pointer">
            Pilih Gambar
            <input
              type="file"
              id="profile-image"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </label>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleImageUpdate}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Perbarui Gambar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
