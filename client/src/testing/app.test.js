import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders App without crashing", () => {
  render(<App />);
});


test('main header showing', ()=>{

//Arrange
const {getByText} = render(<App/>);
// Act
const title = getByText(/Womans World Cup/i);
//Assert
expect(title).toBeTruthy();

});

test('subTitle title showing', ()=>{
    // Arrange
    const {getByText} = render(<App/>);
    // Act
    const subTitle = getByText(/players of world cup/i);
// Assert
    expect(subTitle).toBeTruthy();
}) ;

test('toggle function visible' ,() => {
const {getByTestId} = render(<App/>);

const toggle = getByTestId(/toggle/i)

expect(toggle).toBeTruthy();
expect(toggle).not.toBeFalsy();
});

test('' ,() => {
const {getByTestId} = render(<App/>);

const toggle = getByTestId(/toggle/i)

expect(toggle).toBeTruthy();
expect(toggle).not.toBeFalsy();
});

