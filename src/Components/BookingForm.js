import React, {useState} from 'react'
import { Link } from "react-router-dom";
export const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccassion] = useState("")

  return (
    <>
    <form className="reservation-form">
        <label htmlFor="res-date" >Choose date</label> <br></br>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/><br/>
        <label htmlFor="res-time" >Choose time</label> <br></br>
        <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select> <br/>
        <label htmlFor="guests" >Number of guests</label> <br></br>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e) => setGuest(e.target.value)}/><br/>
        <label htmlFor="occassion" >Occasion</label> <br></br>
        <select id="occasion" value={occasion} onChange={(e) => setOccassion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select> <br/>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
    </form>
    </>
  )
}
