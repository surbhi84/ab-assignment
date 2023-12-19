import { ModalForm } from "./ModalForm";
import gripVertical from "../assets/grip-vertical.svg";

export const Element = ({
  id,
  elementsDict,
  setElementsDict,
  isOpen,
  setIsOpen,
  initialPos,
  setInitialPos,
}) => {
  console.log(elementsDict, id);

  return (
    <div
      className='absolute flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
      style={{
        top: `${elementsDict[id].top}px`,
        left: `${elementsDict[id].left}px`,
        fontWeight: elementsDict[id].fontWeight,
        fontSize: elementsDict[id].fontSize,
      }}
      key={id}
      onClick={() => {
        setIsOpen(true);
      }}
      draggable
      onDragStart={(e) => setInitialPos({ top: e.pageY, left: e.pageX })}
      onDragEnd={(e) => {
        setElementsDict((p) => ({
          ...p,
          [id]: {
            ...p[id],
            top: p[id].top - initialPos.top + e.pageY,
            left: p[id].left - initialPos.left + e.pageX,
          },
        }));
      }}
    >
      <ModalForm
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        blockType={elementsDict[id].blockType}
      />
      <img src={gripVertical} alt='grip_icon' />
      <div className='ml-2'>{elementsDict[id].blockType}</div>
    </div>
  );
};
