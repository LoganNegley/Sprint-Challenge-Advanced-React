import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders App without crashing", () => {
  render(<App />);
});


// test('main header showing', ()=>{

// //Arrange
// const {getByText} = render(<App/>);
// // Act
// const title = getByText(/Womans World Cup/i)
// //Assert
// expect(title).toBeInTheDocument()

// });