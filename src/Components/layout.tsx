// import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,   
  Input,
} from "@nextui-org/react";
import SearchIcon from "../assets/iconcari.png";
import {
  Outlet,
  useLocation,
  useNavigation,
  useNavigate,
} from "react-router-dom";


const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const navigate = useNavigate();
 
  
  console.log(location.pathname);
  // menu items yang tidak terkait dengan router

  return (
    <div className="flex h-screen bg-[#bdbdbd]">
      {/* Navbar */}
      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        <header className="w-full z-19">
          {/* Navbar */}
          <nav className="w-full fixed mx-auto py-4 flex justify-between items-center bg-blue-950 shadow">
            <h1
              className="text-2xl md:text-4xl text-white font-bold cursor-pointer ml-5"
              onClick={() => navigate("/Layout")}
            >
              Planet Books
            </h1>
            <Input 
              classNames={{
                base: "ml-5 max-w-full sm:max-w-[500px] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "absolute h-full font-normal text-default-500 bg-default-400/20 dark:bg-white",
              }}
              placeholder="Cari"
              size="sm"
              src={SearchIcon}
              type="search"
            />
            <div className="ml-8 flex items-center justify-center">
              <Dropdown>
                <DropdownTrigger>
                  <Button className="ml-2 bg-tranparan text-white hover:text-blue-950 hover:bg-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                  <DropdownItem
                    key="terbaru"
                    onClick={() => navigate("terbaru")}
                  >
                    Terbaru
                  </DropdownItem>
                  <DropdownItem
                    key="Termurah"
                    onClick={() => navigate("termurah")}
                  >
                    Termurah
                  </DropdownItem>
                  <DropdownItem
                    key="Termahal"
                    onClick={() => navigate("termahal")}
                  >
                    Termahal
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Button className="ml-2 bg-tranparan text-white hover:text-blue-950 hover:bg-gray-300">
                <svg
                  width="59"
                  height="59"
                  viewBox="0 0 59 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => navigate("history")}
                >
                  <path
                    d="M54.0835 14.75V20.6991C54.0835 24.5833 51.6252 27.0416 47.741 27.0416H39.3335V9.85787C39.3335 7.12912 41.5706 4.91663 44.2993 4.91663C46.9789 4.94121 49.4372 6.02287 51.2072 7.79287C52.9772 9.58745 54.0835 12.0458 54.0835 14.75Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.9165 17.2083V51.625C4.9165 53.6654 7.22734 54.8208 8.84984 53.5916L13.0536 50.445C14.0369 49.7075 15.4136 49.8058 16.2986 50.6908L20.3794 54.7962C21.3382 55.755 22.9115 55.755 23.8703 54.7962L28.0003 50.6662C28.8607 49.8058 30.2373 49.7075 31.1961 50.445L35.3998 53.5916C37.0223 54.7962 39.3332 53.6408 39.3332 51.625V9.83329C39.3332 7.12913 41.5457 4.91663 44.2498 4.91663H17.2082H14.7498C7.37484 4.91663 4.9165 9.31704 4.9165 14.75V17.2083Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.125 31.9829H29.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.125 22.1497H29.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7393 31.9584H14.7613"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7393 22.125H14.7613"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                className="ml-2 bg-tranparan text-white hover:text-blue-950 hover:bg-gray-300"
                onClick={() => navigate("profil")}
              >
                <svg
                  width="71"
                  height="71"
                  viewBox="0 0 71 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 items-center justify-center"
                >
                  <path
                    d="M35.4997 35.4999C42.0376 35.4999 47.333 30.2045 47.333 23.6666C47.333 17.1287 42.0376 11.8333 35.4997 11.8333C28.9618 11.8333 23.6663 17.1287 23.6663 23.6666C23.6663 30.2045 28.9618 35.4999 35.4997 35.4999ZM35.4997 41.4166C27.6009 41.4166 11.833 45.3808 11.833 53.2499V59.1666H59.1663V53.2499C59.1663 45.3808 43.3984 41.4166 35.4997 41.4166Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </nav>
        </header>
        {/* Main content area */}
        <main
        //className={`flex-1 p-6 overflow-auto`}
        >
          {navigation.state !== "idle" && (
            <p className="fixed top-0 right-0 bg-yellow-100 p-2 rounded">
              Navigation in progress...
            </p>
          )}
          <Outlet />
        </main>
        <div className="">
          <footer className="mx-auto py-4 text-center bg-blue-950 text-white">
            <p>Planet Books</p>
            <p>&copy; _Adstyn|2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
