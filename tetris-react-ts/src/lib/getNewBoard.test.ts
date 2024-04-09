import getNewBoard from "./getNewBoard";

describe("getNewBoard()", () => {
  it("returns a 10x18 grid of zeroes", () => {
    const board = getNewBoard();
    expect(board.length).toBe(18);
    expect(board.every((subarray) => subarray.length == 10)).toBeTruthy();
    expect(board.flat().every((val) => val == 0)).toBeTruthy();
  });
});
