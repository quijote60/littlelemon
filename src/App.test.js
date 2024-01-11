import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { initializeTimes, updateTimes, state } from './Components/pages/BookingPage';
import { fetchAPI } from './bookingsAPI';

test("initializeTimes validate that it returns expected value", () => {
  const expectedResult = { availableTimes: fetchAPI(new Date()) };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

test("updateTimes", () => {
  const selectedDate = new Date("2023-01-11");
  const availableTimes = updateTimes(selectedDate);

  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes).toEqual([
    "17:00",
    "17:30",
    "18:30",
    "19:00",
    "20:00",
    "20:30",
    "21:00",
    "23:00"

  ]);
});