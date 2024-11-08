import axios from "axios";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const username = target.username.value;
    const email = target.email.value;
    const password = target.password.value;
    axios
      .post("https://z17xzb9r-3000.asse.devtunnels.ms/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log("User created:", response.data);
        alert("Registrasi Berhasil");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error creating user:", error.response.data);
        alert(error.response.data.message);
      });
  };

  return (
    <form
      className="max-w-md mx-auto sm:max-w-xl lg:max-w-3xl"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col min-h-screen bg-white text-blue-900 items-center justify-center">
        <h1 className="md:shrink-0 sm:text-center text-4xl font-bold text-blue-900 absolute top-16 left-1/2 transform -translate-x-1/2">
          Planet Books
        </h1>

        <div className="w-full max-w-md space-y-6">
          <p className="font-bold text-blue-900">Username</p>
          <input
            type="text"
            className="px-5 w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Username"
            id="usename"
            name="username"
          />
          <p className="font-bold text-blue-900">Email</p>
          <input
            type="email"
            className="px-5 w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Email"
            id="email"
            name="email"
          />
         <div className="relative w-full">
  <p className="font-bold text-blue-900 mb-5">Kata Sandi</p>
  <input
    id="password"
    type={showPassword ? "text" : "password"}
    name="katasandi"
    className="px-5 w-full p-2 text-black border rounded-full"
    placeholder="Masukkan Kata Sandi"
    // onChange={(e) => setKatasandi(e.target.value)}
  />
  <div
    className="absolute top-2/3 right-5 transform -translate-y-1/4 cursor-pointer"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? (
      <AiFillEyeInvisible size={30} />
    ) : (
      <AiFillEye size={30}/>
    )}
  </div>
</div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-white hover:text-white font-medium bg-blue-900 hover:font-medium text-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Daftar
          </button>
           <a href="/login" className="text-gray-00 flex items-center justify-center">sudah punya akun?<span className="text-blue-900 font-bold">Masuk Disini</span></a>
        </div>
      </div>
    </form>
  );
};
export default Register;
