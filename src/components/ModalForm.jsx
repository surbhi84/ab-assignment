import { useState } from "react";
import Cross from "../assets/times.svg";
import { EDITELEMENT } from "../hooks/reducer/types";

export const ModalForm = ({
  id,
  isOpen,
  setIsOpen,
  blockType,
  elementsDict,
  elementsDispatch,
}) => {
  const [formValues, setFormValues] = useState(elementsDict[id]);

  const onChangeHandler = (details) => {
    setFormValues((p) => ({ ...p, ...details }));
  };

  const onClickHandler = () => {
    elementsDispatch({
      type: EDITELEMENT,
      payload: { id, details: formValues },
    });
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className='flex flex-row items-center justify-center bg-abBlack/50 fixed h-screen p-2 inset-0 overflow-hidden z-10'
          onClick={(e) => {
            onClickHandler();
            e.stopPropagation();
          }}
        >
          <div
            className='flex flex-col bg-abWhite rounded z-1 w-[424px] px-5'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex flex-row items-center py-4'>
              <span className='text-xl font-semibold text-abBlack'>
                Edit {blockType}
              </span>
              <img
                src={Cross}
                alt='cross_icon'
                className='ml-auto'
                onClick={onClickHandler}
              />
            </div>

            <hr className='text-abBlack/[0.07] mx-[-20px]' />

            <div className='pt-6'>
              <label>Text</label>
              <input
                className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
                value={formValues.text}
                onChange={(e) => onChangeHandler({ text: e.target.value })}
              ></input>
            </div>

            <div className='pt-8'>
              <label>X</label>
              <input
                className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
                value={formValues.left}
                onChange={(e) => onChangeHandler({ left: e.target.value })}
              ></input>
            </div>

            <div className='pt-8'>
              <label>Y</label>
              <input
                className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
                value={formValues.top}
                onChange={(e) => onChangeHandler({ top: e.target.value })}
              ></input>
            </div>

            <div className='pt-8'>
              <label>Font Size</label>
              <input
                className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
                value={formValues.fontSize}
                onChange={(e) => onChangeHandler({ fontSize: e.target.value })}
              ></input>
            </div>

            <div className='pt-8'>
              <label>Font Weight</label>
              <input
                className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
                value={formValues.fontWeight}
                onChange={(e) =>
                  onChangeHandler({ fontWeight: e.target.value })
                }
              ></input>
            </div>

            <button
              className='bg-abBtn text-abWhite px-4 py-2 w-fit rounded mt-10 mb-8'
              onClick={onClickHandler}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};
