import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
{/* 
      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} /> */}
    </Routes>
  );
}