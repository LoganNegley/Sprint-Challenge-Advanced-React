import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "../components/PlayerCards";

test('player cards are showing', ()=>{
    // Arrange
    const {getByTestId} = render(<App/>);
    // Act
    const cards = getByTestId(/cards/i);
// Assert
    expect(cards).toBeInTheDocument();
}) ;