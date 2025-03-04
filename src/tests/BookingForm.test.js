import { render, screen, fireEvent } from "@testing-library/react"; // Keep only one import statement
import BookingForm from "../components/BookingForm.js";


test("submits the booking form", () => {
    // Mock console.log
    jest.spyOn(console, "log").mockImplementation(() => {});

    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

    // Select form elements and simulate user input
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByText(/book now/i);

    fireEvent.change(dateInput, { target: { value: "2025-03-05" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: 3 } });

    fireEvent.click(submitButton); // Simulate form submission

    // Check if form submission logic is triggered
    expect(console.log).toHaveBeenCalled();

    // Restore console.log after the test to avoid affecting other tests
    console.log.mockRestore();
});

// test("Renders the BookingForm button", () => {
//     render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
//     const buttonElement = screen.getByText("Book Now");
//     expect(buttonElement).toBeInTheDocument();
// });

// test("submits the booking form", () => {
//     render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
//     fireEvent.submit(screen.getByRole("form")); // Or userEvent.click on submit button
// });


