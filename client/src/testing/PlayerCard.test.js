import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "../components/PlayerCards";

test('submit button showing', ()=>{
    // Arrange
    const {getByTestId} = render(<PlayerCard/>);
    // Act
    const cards = getByTestId(//i);
// Assert
    expect(button).toBeInTheDocument();
}) ;