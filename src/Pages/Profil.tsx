import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../Components/Section/SectionSetting"; // Import komponen Modal yang sudah dibuat
import { MdEdit } from "react-icons/md";

const Account: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    img: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk kontrol modal

  useEffect(() => {
    const token = localStorage.getItem("token");

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
          name: response.data.data.username,
          email: response.data.data.email,
          img: `https://px973nrz-3000.asse.devtunnels.ms/${response.data.data.img}`, // URL gambar
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="absolute top-4 right-4">
          <i className="fas fa-cog text-xl text-gray-600"></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-blue-900 rounded-full flex items-center justify-center mb-6">
            <img
              src={userData.img || "/user.svg"}
              alt="Profile"
              className="object-cover rounded-full"
            />
            <i className="fas fa-user text-white text-4xl"></i>
          </div>
          <button
            onClick={() => setIsModalOpen(true)} // Membuka modal
            className="translate-x-12 bg-blue-900 text-white py-3 px-3 rounded-full -translate-y-16"
          >
            <MdEdit />
          </button>

          {/* Menampilkan Modal */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={{
            image: undefined
          }} />

          <div className="w-[500px] mb-4">
            <div className="bg-gray-300 rounded-full py-4 px-4 text-center text-gray-600">
              {userData.name || "Username"}
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="bg-gray-300 rounded-full py-4 px-4 text-center text-gray-600">
              {userData.email || "Email"}
            </div>
          </div>
          <div className="flex flex-row">
            <button
              className="bg-blue-900 text-white py-4 px-6 rounded-full mr-16"
              onClick={() => window.location.assign("/Layout")}
            >
              Back
            </button>
            {localStorage.getItem("token") ? (
              <button
                className="bg-blue-900 text-white py-4 px-6 rounded-full"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-blue-900 text-white py-4 px-6 rounded-full"
                onClick={() => {
                  navigate("/login"); // Redirect to login page
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
