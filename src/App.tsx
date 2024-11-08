// import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
import { router } from "./routes";

function App() {
  return (
    <>
      <NextUIProvider>
        <RouterProvider
          router={router}
          fallbackElement={<h1>Loading....</h1>}
        />
      </NextUIProvider>
    </>
  );
}
export default App;
