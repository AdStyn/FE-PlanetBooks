import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Layout from "./Components/layout";
import HalNvl from "./Pages/HalNvl";
import HalCrp from "./Pages/HalCrp";
import HalDgn from "./Pages/HalDgn";
import HalScifi from "./Pages/HalScifi";
import Terbaru from "./Pages/Terbaru";
import Profil from "./Pages/Profil";
import Termurah from "./Pages/Termurah";
import Termahal from "./Pages/Termahal";
import History from "./Pages/History";
import Pembayaran from "./Components/Section/SectionPembayaran";
import SectionHistori from "./Components/Section/SectionHistori";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "layout",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "halnvl",
        element: <HalNvl />,
      },
      {
        path: "halcrp",
        element: <HalCrp />,
      },
      {
        path: "haldgn",
        element: <HalDgn />,
      },
      {
        path: "halscifi",
        element: <HalScifi />,
      },
      {
        path: "terbaru",
        element: <Terbaru />,
      },
      {
        path: "termurah",
        element: <Termurah />,
      },
      {
        path: "termahal",
        element: <Termahal />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "pembayaran",
        element: <Pembayaran  />,
      },
      {
        path: "SectionHistori",
        element: <SectionHistori  />,
      },
    ],
  },
]);