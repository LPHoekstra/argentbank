import { fireEvent, render, screen } from "@testing-library/react"
import InputWrapper from "."

describe("When a inputWrapper is created", () => {
    it("render correctly a email input", () => {
        const mockOnChange = jest.fn()

        render(
            <InputWrapper 
                type="email"
                onChange={mockOnChange}
            />
        )

        const input = screen.getByRole("textbox")

        fireEvent.change(input, { target: {value: "textEmail@exemple.fr"}})

        expect(mockOnChange).toHaveBeenCalledWith("textEmail@exemple.fr")
        screen.getByLabelText("Email")
    })
    it("render correctly a username input with a placeholder", () => {
        const mockOnChange = jest.fn()

        render(
            <InputWrapper 
                type="username"
                onChange={mockOnChange}
                placeholder="Iron"
            />
        )

        screen.getByPlaceholderText("Iron")
    })
})