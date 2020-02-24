import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "../components/PlayerCards";

test('subTitle title showing', ()=>{
    // Arrange
    const {getByText} = render(<PlayerCard/>);
    // Act
    const subTitle = getByText(/players of the world cup/i);
// Assert
    expect(subTitle).toBeInTheDocument();
}) ;

// 