import { v4 as uuid } from "uuid";
import gripVertical from "../assets/grip-vertical.svg";
import { useRef } from "react";

export const Blocks = ({
  setElementsId,
  // elememtsId,
  // elementsDict,
  //   setElements,
  //   setIsDragged,
  //   setIsOpen,
  //   setModelId,
  initialPos,
  setInitialPos,
  setElementsDict,
}) => {
  const labelRef = useRef();
  const InputRef = useRef();
  const ButtonRef = useRef();

  const handleDragEnd = (e, blockType) => {
    console.log(initialPos.left,"lllll"); // prints 200px

    const id = uuid();
    setElementsId((p) => [...p, id]);
    setElementsDict((p) => ({
      ...p,
      [id]: {
        blockType,
        fontWeight: "",
        fontSize: "",
        text: "",
        // top: e.pageY,
        // left: e.pageX,

        top: e.pageY - initialPos.top,
        left: e.pageX - initialPos.left,
      },
    }));
  };

  return (
    <div className=' flex flex-col gap-2 text-base'>
      {/* LABEL */}
      <div
        className='flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
        ref={labelRef}
        draggable
        onDragStart={(e) => {
          const tempPos = labelRef.current.getBoundingClientRect(); // element initiial pos
          setInitialPos({
            top: e.pageY - tempPos.y,
            left: e.pageX - tempPos.x,
          });
        }}
        onDragEnd={(e) => handleDragEnd(e, "Label")}
      >
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>Label</div>
      </div>

      {/* INPUT */}
      <div
        className=' flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
        ref={InputRef}
        draggable
        onDragStart={(e) => {
          const tempPos = InputRef.current.getBoundingClientRect(); // element initiial pos
          setInitialPos({
            top: e.pageY - tempPos.y,
            left: e.pageX - tempPos.x,
          });
        }}
        onDragEnd={(e) => handleDragEnd(e, "Input")}
      >
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>Input</div>
      </div>

      {/* BUTTON */}
      <div
        className=' flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
        ref={ButtonRef}
        draggable
        onDragStart={(e) => {
          const tempPos = ButtonRef.current.getBoundingClientRect(); // element initiial pos
          setInitialPos({
            top: e.pageY - tempPos.y,
            left: e.pageX - tempPos.x,
          });
        }}
        onDragEnd={(e) => handleDragEnd(e, "Button")}
      >
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>Button</div>
      </div>
    </div>
  );
};
