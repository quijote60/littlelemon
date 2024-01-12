import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { submitAPI } from '../bookingsAPI';
export const BookingForm = ({ dispatch, state }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("")
    //const [finalTime, setFinalTime] = useState(
      //  props.availableTimes.map((times, i) => <option key={i}>{times}</option>)
    //);
    const navigate = useNavigate();
    const handleDateChange = (e) => {
      setDate(e.target.value);
      dispatch({ type: "update_times", selectedDate: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = {
          date: date,
          time: time,
          guests: guest,
          occasion: occasion,
        };
        console.log(reservation);
        const submitResponse = submitAPI(reservation);
        if (submitResponse === true) {
            //<Link className="action-button" to="/confirmation"/>
            navigate("/confirmation", { state: reservation });
        }
      };
      const [guestsError, setGuestsError] = useState(false);
      const handleGuestsChange = (e) => {
        const value = e.target.value;
        setGuestsError(value > 10 || value < 1);
        setGuest(value);
      };
  return (
    <>
    <form className="reservation-form" onSubmit={handleSubmit}>
    <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
          aria-label="Enter date mm/dd/yyyy"
        ></input>
      </div>
      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" value={time} required onChange={(e) => {
          setTime(e.target.value);
        }} aria-label="Select time HH:MM">
         {state?.availableTimes?.map((time) => (
          <option key={time} value={time} aria-label={time}>
            {time}
          </option>
        ))}
        </select>
      </div>
        <div>
        <label htmlFor="guests" >Number of guests</label> <br></br>
        <input type="number" className={guestsError ? "input-error" : ""} placeholder="1" min="1" max="10" id="guests" value={guest} onChange={handleGuestsChange} aria-label="Enter number of guests"/><br/>
        </div>
        <div>
        <label htmlFor="occasion" >Occasion</label> <br></br>
        <select id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)} aria-label="Select an Occasion">
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
        </select> <br/> <br/>
        </div>
        <input
        type="submit"
        className="submit-button"
        style={
          !date
            ? { backgroundColor: "#d9d9d9" }
            : { backgroundColor: "#f4ce14" }
        }
        value="Make Your reservation"
        disabled={!date}
        aria-label="Submit your reservation"
      />
    </form>
    </>
  )
}
