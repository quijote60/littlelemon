import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { BookingPage } from "./pages/BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/confirmation" element={<ConfirmedBooking />} /> 
{/* 
      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} /> */}
    </Routes>
  );
}