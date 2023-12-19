import { ModalForm } from "./ModalForm";
import gripVertical from "../assets/grip-vertical.svg";
import { EDITELEMENT } from "../hooks/reducer/types";

export const Element = ({
  id,
  elementsDict,
  elementsDispatch,
  isOpen,
  setIsOpen,
  initialPos,
  setInitialPos,
}) => {
  return (
    <div
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
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        blockType={elementsDict[id]?.blockType}
      />
      <img src={gripVertical} alt='grip_icon' />
      <div className='ml-2'>{elementsDict[id]?.blockType}</div>
    </div>
  );
};
