import React, {useRef, useState} from "react";
import "./FormArea.css";
import {format, isValid, parse} from "date-fns";
import FocusTrap from "focus-trap-react";
import {DayPicker} from "react-day-picker";
import {usePopper} from "react-popper";
import "react-day-picker/dist/style.css";

export default function FormArea() {
  const [selected, setSelected] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef(null);
  const buttonRef = useRef(null);
  const [popperElement, setPopperElement] = useState(null);
  const popper = usePopper(popperRef.current, popperElement, {
    placement: "bottom-end",
  });

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange = e => {
    const {value} = e.currentTarget;
    setInputValue(value);
    const date = parse(value, "y-MM-dd", new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  const handleDaySelect = date => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, "y-MM-dd"));
      closePopper();
    } else {
      setInputValue("");
    }
  };

  return (
    <div ref={popperRef} className="FormArea">
      <input className="taskInput" type="text" placeholder="Add a task..." />
      {/* <select placeholder="Add a task..." /> */}
      <input
        type="text"
        className="dateInput"
        placeholder={format(new Date(), "y-MM-dd")}
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleButtonClick}
      />
      <button id="add">Add</button>

      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper,
          }}
        >
          <div
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
          >
            <DayPicker
              styles={{
                caption: {color: "red"},
              }}
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
            />
          </div>
        </FocusTrap>
      )}
    </div>
  );
}
