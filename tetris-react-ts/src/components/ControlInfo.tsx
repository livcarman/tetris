const ControlInfo = () => (
  <div className="ControlInfo" data-testid="ControlInfo">
    <table>
      <tbody>
        <tr>
          <th scope="row">Rotate</th>
          <td>Arrow Up</td>
          <td>W</td>
        </tr>
        <tr>
          <th scope="row">Move Left</th>
          <td>Arrow Left</td>
          <td>A</td>
        </tr>
        <tr>
          <th scope="row">Move Down</th>
          <td>Arrow Down</td>
          <td>S</td>
        </tr>
        <tr>
          <th scope="row">Move Right</th>
          <td>Arrow Right</td>
          <td>D</td>
        </tr>
        <tr>
          <th scope="row">Pause/Unpause</th>
          <td>Spacebar</td>
          <td></td>
        </tr>
      </tbody>
      <caption>Keyboard Controls</caption>
    </table>
  </div>
);

export default ControlInfo;
