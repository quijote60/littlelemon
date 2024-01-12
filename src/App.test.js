import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { initializeTimes, updateTimes, state } from './Components/pages/BookingPage';
import { fetchAPI } from './bookingsAPI';

const mockedUsedNavigate = jest.fn();
test("initializeTimes validate that it returns expected value", () => {
  const expectedResult = { availableTimes: fetchAPI(new Date()) };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

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
describe("BookingForm", () => {
  test("Renders DATE input with correct attributes", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Select Date");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput.getAttribute("type")).toBe("date");
  });
  test("Renders the TIME input field with correct attributes", () => {
    render(<BookingForm />);
    const timeInput = screen.getByLabelText("Select Time");
    expect(timeInput).toBeInTheDocument();
    expect(timeInput.getAttribute("id")).toBe("time");
  });

  test("Renders GUESTS input with correct attributes", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput.getAttribute("type")).toBe("number");
    expect(guestsInput.getAttribute("min")).toBe("1");
    expect(guestsInput.getAttribute("max")).toBe("10");
  });

  test("Renders the OCCASION input field with correct attributes", () => {
    render(<BookingForm />);
    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput.getAttribute("id")).toBe("occasion");
  });

  // It is important to add a unit test for both valid and invalid states to
  // ensure good test coverage of your code. Without this, there is a risk of a bug existing
  // in a code path that is not tested.

  // Checks if GUESTS input is invalid

  test("Input GUESTS should have input-error class if > 10 or < 0", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByPlaceholderText("1");
    fireEvent.change(guestsInput, { target: { value: 11 } });
    expect(guestsInput).toHaveClass("input-error");
  });
});