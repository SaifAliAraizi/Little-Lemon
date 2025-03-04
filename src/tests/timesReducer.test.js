import { initializeTimes, updateTimes } from "../components/Main.js";


test("initializeTimes returns correct initial available times", () => {
    expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state when updating times", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = { type: "UPDATE_DATE", payload: "2025-03-03" };
    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initializeTimes());
});
