import { render, screen } from "@testing-library/react"
import FeatureItem from "."

const iconChat = 'icon-chat.png';

jest.mock("../../assets/img/icon-chat.png", () => iconChat);

describe("When a FeatureItem is created", () => {
    it("render correctly", () => {
        render(
            <FeatureItem
                title="You are our #1 priority"
                icon={iconChat}
                iconAlt="Chat icon"
                content="Need to talk to a representative?" 
            />
        )

        screen.getByText("You are our #1 priority")
        screen.getByRole("img", { name: /chat icon/i})
        screen.getByAltText("Chat icon")
        screen.getByText("Need to talk to a representative?")
    })
})