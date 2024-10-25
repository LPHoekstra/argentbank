import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Home from ".";

describe("features section", () => {
    describe("when a features item is created", () => {
        it("render the title of the 3 items", () => {
            render(<Home />)

            screen.getByText("You are our #1 priority")
            screen.getByText("More savings means higher rates")
            screen.getByText("Security you can trust")
        })
    })
})