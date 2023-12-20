import { v4 as uuid } from "uuid";
import gripVertical from "../assets/grip-vertical.svg";
import { useRef, useState } from "react";
import { ADDELEMENT } from "../hooks/reducer/types";

export const Blocks = ({
  setElementsId,
  initialPos,
  setInitialPos,
  elementsDispatch,
}) => {
  const labelRef = useRef();
  const InputRef = useRef();
  const ButtonRef = useRef();

  const [mouseInitial, setMouseInitial] = useState({ top: 0, left: 0 });

  const handleDragEnd = (e, blockType) => {
    if (
      initialPos.left - 24 >
      e.pageX - (mouseInitial.left - initialPos.left) + 278
    ) {
      const id = uuid();
      setElementsId((p) => [...p, id]);
      elementsDispatch({
        type: ADDELEMENT,
        payload: {
          [id]: {
            blockType,
            fontWeight: "",
            fontSize: "",
            text: blockType === "Label" ? ` This is a Label` : blockType==="Input" ? "" : "Button",
            top: e.pageY - (mouseInitial.top - initialPos.top),
            left: e.pageX - (mouseInitial.left - initialPos.left),
          },
        },
      });
    }
  };

  return (
    <div className=' flex flex-col gap-2 text-base'>
      {/* LABEL */}
      <div
        className='flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4 cursor-grab'
        ref={labelRef}
        draggable
        onDragStart={(e) => {
          const tempPos = labelRef.current.getBoundingClientRect(); // element initiial pos
          setInitialPos({
            top: tempPos.y,
            left: tempPos.x,
          });
          setMouseInitial({
            top: e.pageY,
            left: e.pageX,
          });
        }}
        onDragEnd={(e) => {
          if (
            e.pageX - (mouseInitial.left - initialPos.left) > 0 &&
            e.pageY - (mouseInitial.top - initialPos.top) > 0
          )
            handleDragEnd(e, "Label");
        }}
      >
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>Label</div>
      </div>

      {/* INPUT */}
      <div
        className=' flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4 cursor-grab'
        ref={InputRef}
        draggable
        onDragStart={(e) => {
          const tempPos = InputRef.current.getBoundingClientRect(); // element initiial pos
          setInitialPos({
            top: tempPos.y,
            left: tempPos.x,
          });
          setMouseInitial({
            top: e.pageY,
            left: e.pageX,
          });
        }}
        onDragEnd={(e) => {
          if (
            e.pageX - (mouseInitial.left - initialPos.left) > 0 &&
            e.pageY - (mouseInitial.top - initialPos.top) > 0
          )
            handleDragEnd(e, "Input");
        }}
      >
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>Input</div>
      </div>

      {/* BUTTON */}
      <div
        className=' flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4 cursor-grab'
        ref={ButtonRef}
        draggable
        onDragStart={(e) => {
          const tempPos = ButtonRef.current.getBoundingClientRect(); // element initiial pos
          setInitialPos({
            top: tempPos.y,
            left: tempPos.x,
          });
          setMouseInitial({
            top: e.pageY,
            left: e.pageX,
          });
        }}
        onDragEnd={(e) => {
          if (
            e.pageX - (mouseInitial.left - initialPos.left) > 0 &&
            e.pageY - (mouseInitial.top - initialPos.top) > 0
          )
            handleDragEnd(e, "Button");
        }}
      >
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>Button</div>
      </div>
    </div>
  );
};
