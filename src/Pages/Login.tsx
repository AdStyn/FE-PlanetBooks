import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <form
      ref={formRef}
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        axios
          .post("https://z17xzb9r-3000.asse.devtunnels.ms/login", {
            Headers: {
              "Content-Type": "application/json",
            },
            email,
            password,
          })
          .then((response) => {
            console.log("User created:", response.data);
            localStorage.setItem("token", response.data.token);

            navigate("/layout");
          })
          .catch((error) => {
            console.error(
              "kata sandi salah atau email tidak terdaftar:",
              error.response.data
            );
            alert(error.response.data.message);
          });
      }}
    >
      <div className="flex flex-col min-h-screen bg-blue-950 text-white items-center justify-center">
        <h1 className="text-4xl font-bold text-white absolute top-16 left-1/2 transform -translate-x-1/2">
          Planet Books
        </h1>

        <div className="w-full max-w-md space-y-6">
          <p className="font-bold text-white">Email</p>
          <input
            id="email"
            type="email"
            name="email"
            className="px-5 w-full p-2 text-black border rounded-full"
            placeholder="Masukkan Email"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full">
  <p className="font-bold text-white mb-5">Kata Sandi</p>
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
      <AiFillEyeInvisible size={30} color="gray"/>
    ) : (
      <AiFillEye size={30} color="gray" />
    )}
  </div>
</div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-blue-900 hover:text-white font-medium bg-white text-blue-900 hover:font-medium hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Masuk
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
