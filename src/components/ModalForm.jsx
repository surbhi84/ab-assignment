import Cross from "../assets/times.svg";

export const ModalForm = ({ modalProps }) => {
  return (
    <div
      className='flex flex-row items-center justify-center bg-abBlack/50 fixed h-screen p-2 inset-0 overflow-hidden'
      onClick={() => modalProps.setIsOpen(false)}
    >
      <div
        className='flex flex-col bg-abWhite rounded z-1 w-[424px] px-5'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-row items-center py-4'>
          <span className='text-xl font-semibold text-abBlack'>
            Edit {modalProps.blockType}
          </span>
          <img
            src={Cross}
            alt='cross_icon'
            className='ml-auto'
            onClick={() => modalProps.setIsOpen(false)}
          />
        </div>

        <hr className='text-abBlack/[0.07] mx-[-20px]' />

        <div className='pt-6'>
          <label>Text</label>
          <input
            className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
            placeholder='This is a label'
          ></input>
        </div>

        <div className='pt-8'>
          <label>X</label>
          <input
            className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
            placeholder='This is a label'
          ></input>
        </div>

        <div className='pt-8'>
          <label>Y</label>
          <input
            className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
            placeholder='This is a label'
          ></input>
        </div>

        <div className='pt-8'>
          <label>Font Size</label>
          <input
            className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
            placeholder='This is a label'
          ></input>
        </div>

        <div className='pt-8'>
          <label>Font Weight</label>
          <input
            className='border-abLightGray border-black border-[1px] px-3 py-2 w-full'
            placeholder='This is a label'
          ></input>
        </div>

        <button className='bg-abBtn text-abWhite px-4 py-2 w-fit rounded mt-10 mb-8'>
          Save Changes
        </button>
      </div>
    </div>
  );
};
