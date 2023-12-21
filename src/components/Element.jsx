import { ModalForm } from "./ModalForm";
// import gripVertical from "../assets/grip-vertical.svg";
import { EDITELEMENT, REMOVEELEMENT } from "../hooks/reducer/types";
import { useState } from "react";

export const Element = ({
  id,
  elementsDict,
  elementsDispatch,
  setElementsId,
  initialPos,
  setInitialPos,
  selectedId,
  setSelectedId,
}) => {
  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("elementIds")).find((i) => i === id)
      ? false
      : true
  ); // manages opening and closing of modalForm

  return (
    <div
      onKeyDown={(e) => {
        if (selectedId !== "") {
          if (e.key === "Enter") setIsOpen(true);
          else if (e.key === "Delete") {
            elementsDispatch({ type: REMOVEELEMENT, payload: id });
            setElementsId((p) => p.filter((i) => i !== id));
          }
        }
      }}
    >
      {elementsDict[id].blockType === "Label" && (
        <label
          tabIndex='0'
          className={` absolute bg-abWhite cursor-grab ${
            selectedId === id && " border-2 border-abRed "
          }`}
          style={{
            top: `${elementsDict[id]?.top}px`,
            left: `${elementsDict[id]?.left}px`,
            fontWeight: `${elementsDict[id]?.fontWeight}`,
            fontSize: `${elementsDict[id]?.fontSize}px`,
          }}
          key={id}
          onClick={() => {
            setSelectedId(id);
          }}
          draggable
          onDragStart={(e) => setInitialPos({ top: e.pageY, left: e.pageX })}
          onDragEnd={(e) => {
            elementsDispatch({
              type: EDITELEMENT,
              payload: {
                id,
                details: {
                  top: elementsDict[id].top - initialPos.top + e.pageY,
                  left: elementsDict[id].left - initialPos.left + e.pageX,
                },
              },
            });
          }}
        >
          {elementsDict[id].text}
        </label>
      )}

      {elementsDict[id].blockType === "Input" && (
        <input
          className={`absolute bg-abWhite w-[298px] h-12 px-3 border-2 border-solid cursor-grab outline-none ${
            selectedId === id ? "border-abRed " : "border-abLightBlack"
          }`}
          style={{
            top: `${elementsDict[id]?.top}px`,
            left: `${elementsDict[id]?.left}px`,
            fontWeight: `${elementsDict[id]?.fontWeight}`,
            fontSize: `${elementsDict[id]?.fontSize}px`,
          }}
          key={id}
          onClick={() => {
            setSelectedId(id);
          }}
          value={elementsDict[id].text}
          onChange={(e) => {
            elementsDispatch({
              type: EDITELEMENT,
              payload: { id, details: { text: e.target.value } },
            });
          }}
          draggable
          onDragStart={(e) => setInitialPos({ top: e.pageY, left: e.pageX })}
          onDragEnd={(e) => {
            elementsDispatch({
              type: EDITELEMENT,
              payload: {
                id,
                details: {
                  top: elementsDict[id].top - initialPos.top + e.pageY,
                  left: elementsDict[id].left - initialPos.left + e.pageX,
                },
              },
            });
          }}
        />
      )}

      {elementsDict[id].blockType === "Button" && (
        <button
          className={`absolute bg-abBtn text-abWhite flex items-center justify-center px-3 h-12 cursor-grab  ${
            selectedId === id && " border-2 border-abRed "
          }`}
          style={{
            top: `${elementsDict[id]?.top}px`,
            left: `${elementsDict[id]?.left}px`,
            fontWeight: `${elementsDict[id]?.fontWeight}`,
            fontSize: `${elementsDict[id]?.fontSize}px`,
          }}
          key={id}
          onClick={() => {
            setSelectedId(id);
          }}
          value={elementsDict[id].text}
          onChange={(e) => {
            elementsDispatch({
              type: EDITELEMENT,
              payload: { id, details: { text: e.target.value } },
            });
          }}
          draggable
          onDragStart={(e) => setInitialPos({ top: e.pageY, left: e.pageX })}
          onDragEnd={(e) => {
            elementsDispatch({
              type: EDITELEMENT,
              payload: {
                id,
                details: {
                  top: elementsDict[id].top - initialPos.top + e.pageY,
                  left: elementsDict[id].left - initialPos.left + e.pageX,
                },
              },
            });
          }}
        >
          {elementsDict[id].text}
        </button>
      )}

      <ModalForm
        id={id}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        blockType={elementsDict[id]?.blockType}
        elementsDict={elementsDict}
        elementsDispatch={elementsDispatch}
      />

      {/* <div
        className='absolute flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
        style={{
          top: `${elementsDict[id]?.top}px`,
          left: `${elementsDict[id]?.left}px`,
          fontWeight: elementsDict[id]?.fontWeight,
          fontSize: elementsDict[id]?.fontSize,
        }}
        key={id}
        onClick={() => {
          setIsOpen(true);
        }}
        draggable
        onDragStart={(e) => setInitialPos({ top: e.pageY, left: e.pageX })}
        onDragEnd={(e) => {
          elementsDispatch({
            type: EDITELEMENT,
            payload: {
              id,
              details: {
                top: elementsDict[id].top - initialPos.top + e.pageY,
                left: elementsDict[id].left - initialPos.left + e.pageX,
              },
            },
          });
        }}
      >
        <ModalForm
          id={id}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          blockType={elementsDict[id]?.blockType}
          elementsDict={elementsDict}
          elementsDispatch={elementsDispatch}
        />
        <img src={gripVertical} alt='grip_icon' />
        <div className='ml-2'>{elementsDict[id]?.blockType}</div>
      </div> */}
    </div>
  );
};
