type CellProps = {
  color: number;
  x: number;
  y: number;
};

const Cell = ({ x, y, color }: CellProps) => {
  return (
    <div
      className={`Cell Cell--color-${color}`}
      data-testid={`Cell-${x},${y}`}
    ></div>
  );
};

export default Cell;
