import { render, screen } from "@testing-library/react";
import ControlInfo from "../ControlInfo";

describe("ControlInfo", () => {
  it("renders keyboard control info", async () => {
    render(<ControlInfo />);
    expect(await screen.findByTestId("ControlInfo")).toBeTruthy();
    expect(screen.getByText(/Rotate/i)).toBeTruthy();
    expect(screen.getByText(/Move Left/i)).toBeTruthy();
    expect(screen.getByText(/Move Down/i)).toBeTruthy();
    expect(screen.getByText(/Move Right/i)).toBeTruthy();
    expect(screen.getByText(/Pause\/Unpause/i)).toBeTruthy();
  });
});
