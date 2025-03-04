import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Main from "../components/Main"; // Ensure the correct import path

test("renders the main heading", () => {
    render(
        <MemoryRouter>
            <Main />
        </MemoryRouter>
    );

    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
});


// import App from "../App.js"; 

// test("renders the main heading", () => {
//     render(<App />);
//     const headingElement = screen.getByText(/Reserve Your Table/i); // Case insensitive match
//     expect(headingElement).toBeInTheDocument();
// });

// test("renders the booking form", () => {
//     render(<App />);
//     const buttonElement = screen.getByText(/Book Now/i); // Check for the submit button
//     expect(buttonElement).toBeInTheDocument();
// });
