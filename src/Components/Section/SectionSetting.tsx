import React, { useState, FC, useEffect } from "react";
import axios from "axios";

interface User {
  image: string; // URL or path to user's current profile image
}

interface OnClose {
  (): void;
}

const SectionSetting: FC<{ user: User; onClose: OnClose }> = ({
  user,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState(user.image);
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
      setPreviewImage(user.image);
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
      const Response = await axios.post(
        "https://z17xzb9r-3000.asse.devtunnels.ms/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image updated successfully:", Response.data);
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
      setPreviewImage(user.image);
      setIsLoading(false);
      setError(null);
    };
  }, [onclose]);

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-medium mb-4 text-center">Update Profile Picture</h3>
        <div className="flex flex-col items-center">
          <img
            src={previewImage}
            alt="image"
            className="w-40 h-40 rounded-full bg-gray-200 border-2 border-gray-300 mb-4 object-cover"
          />
          <label htmlFor="profile-image">
            <input
              type="file"
              id="profile-image"
              onChange={handleFileChange}
              accept="image/*"
            />
            Select Image
          </label>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleImageUpdate}
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Update Image"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSetting;
