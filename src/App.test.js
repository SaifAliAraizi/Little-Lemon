// API Unit Tets

// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom'; //
// import BookingForm from './components/BookingForm/BookingForm';
// import { initializeTimes, updateTimes } from './pages/BookingPage';
// import { submitAPI, fetchAPI } from './utils/temp';

// // Mock localStorage
// beforeEach(() => {
//   Storage.prototype.setItem = jest.fn();
//   Storage.prototype.getItem = jest.fn(() => JSON.stringify({ key: 'value' }));
//   Storage.prototype.removeItem = jest.fn();
// });

// test('Renders the Choose Date Label', () => {
//   render(
//     <MemoryRouter> {/* ✅ Wrap in MemoryRouter */}
//       <BookingForm availableTimes={{ times: [] }} dispatch={expect.anything()} />
//     </MemoryRouter>
//   );
//   const labelElement = screen.getByText('Date:');
//   expect(labelElement).toBeInTheDocument();
// });

// test('initializeTimes returns the correct expected value', () => {
//   const today = new Date();
//   const initialState = initializeTimes();
//   const expectedResult = { times: fetchAPI(today) };
//   expect(initialState).toEqual(expectedResult);
// });

// test('updateTimes returns the same state', () => {
//   const state = { times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };
//   const action = { type: 'SOME_ACTION' };
//   const newState = updateTimes(state, action);
//   expect(newState).toEqual(state);
// });

// test('submitAPI returns true', () => {
//   const formData = { date: '2022-10-12', time: '20:00', guests: '5', occasion: 'Birthday' };
//   const result = submitAPI(formData);
//   expect(result).toBe(true);
// });

// // Test for writing to localStorage
// test('writes to localStorage', () => {
//   localStorage.setItem('testKey', JSON.stringify({ data: 'testData' }));
//   expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify({ data: 'testData' }));
// });

// // Test for reading from localStorage
// test('reads from localStorage', () => {
//   localStorage.getItem('testKey');
//   expect(localStorage.getItem).toHaveBeenCalledWith('testKey');
// });




// FORM VALIDATION TEST
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm/BookingForm';

// Mock the navigate function from react-router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('BookingForm Component', () => {
  test('renders form inputs with required attributes', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={{ times: ['17:00', '18:00'] }} dispatch={jest.fn()} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(dateInput).toBeRequired();
    expect(timeSelect).toBeRequired();
    expect(guestsInput).toBeRequired();
    expect(occasionSelect).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '20');
  });

  test('shows validation errors when required fields are empty', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={{ times: ['17:00', '18:00'] }} dispatch={jest.fn()} />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    const dateInput = screen.getByLabelText(/date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(dateInput).toBeInvalid();
    expect(guestsInput).toBeInvalid();
  });

  test('allows form submission when valid data is provided', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={{ times: ['17:00', '18:00'] }} dispatch={jest.fn()} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: '2025-03-10' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.click(submitButton);

    expect(dateInput).toHaveValue('2025-03-10');
    expect(guestsInput).toHaveValue(4);
  });
});
