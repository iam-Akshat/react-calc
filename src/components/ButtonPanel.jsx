/* eslint-disable react/prop-types */
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="buttons_container">
    <div className="buttonRow">
      <Button name="AC" clickHandler={clickHandler} />
      <Button name="-/+" clickHandler={clickHandler} />
      <Button name="%" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} specialClassNames="bg-orange" />
    </div>
    <div className="buttonRow">
      <Button name="7" clickHandler={clickHandler} />
      <Button name="8" clickHandler={clickHandler} />
      <Button name="9" clickHandler={clickHandler} />
      <Button name="X" clickHandler={clickHandler} specialClassNames="bg-orange" />
    </div>
    <div className="buttonRow">
      <Button name="4" clickHandler={clickHandler} />
      <Button name="5" clickHandler={clickHandler} />
      <Button name="6" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} specialClassNames="bg-orange" />
    </div>
    <div className="buttonRow">
      <Button name="1" clickHandler={clickHandler} />
      <Button name="2" clickHandler={clickHandler} />
      <Button name="3" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} specialClassNames="bg-orange" />
    </div>
    <div className="buttonRow">
      <Button name="0" clickHandler={clickHandler} specialClassNames="fg-2" />
      <Button name="." clickHandler={clickHandler} />
      <Button name="=" clickHandler={clickHandler} specialClassNames="bg-orange" />
    </div>
  </div>
);

export default ButtonPanel;
