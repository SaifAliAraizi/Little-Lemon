import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage"; // Correct import path

test("renders static text in the BookingPage component", () => {
    render(<BookingPage availableTimes={[]} dispatch={() => {}} />);

    expect(screen.getByText("Reserve Your Table")).toBeInTheDocument();
});
