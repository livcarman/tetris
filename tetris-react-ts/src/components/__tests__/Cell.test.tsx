import { render, screen } from "@testing-library/react";
import Cell from "../Cell";

describe("Cell", () => {
  it("renders a cell with coordinates", async () => {
    render(<Cell x={0} y={3} color={0} />);
    expect(await screen.findByTestId("Cell-0,3")).toBeTruthy();
  });
});
