import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Biblioteca } from "../pages/Biblioteca";
import { Favoritos } from "../pages/Favoritos";
import { Header } from "../components/Header";
export const AppRouter = () => {
  return (
    <>
      <Header></Header>
      <div  className ="bg-stone-200 min-h-screen">
      <Routes >
        <Route path="/*" element={<Navigate to="/home"  />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
      </Routes>
      </div>
    </>
  );
};
