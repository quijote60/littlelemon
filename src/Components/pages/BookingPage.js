import React from 'react'
import Heading from '../Heading'
import { BookingForm } from '../BookingForm'
import { useReducer } from "react";
import {fetchAPI} from '../../bookingsAPI';

const reducer = (state, action) => {
    switch (action.type) {
      case "update_times":
        return {
          ...state,
          availableTimes: updateTimes(action.selectedDate),
        };
      default:
        return state;
    }
  };
  
  export function updateTimes(selectedDate) {
    const date = new Date(selectedDate);
    return fetchAPI(date);
  }
  
  export function initializeTimes() {
    return {
      availableTimes: fetchAPI(new Date()),
    };
  }
  
export const BookingPage = () => {
    const [state, dispatch] = useReducer(reducer, initializeTimes());
  return (
    <>
        
        <Heading/>

        <BookingForm dispatch={dispatch} state={state}/>
        
    </>
  )
}
export default BookingPage
