import gripVertical from "./assets/grip-vertical.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [elements, setElements] = useState([]);
  // console.log(elements);
  return (
    <>
      <main
        className='h-screen'
        // onDragOver={(e) => {
        //   console.log({ e });
        // }}
      >
        <div className='h-auto'>{elements.map((item) => item)}</div>

        {/* SIDEBAR */}
        <div className='bg-sidebarBg h-screen w-[326px] ml-auto'>
          <div className='px-6'>
            <div className='text-abWhite font-bold text-xl py-4'>BLOCKS</div>
            <div className=' flex flex-col gap-2 text-base'>
              {/* LABEL */}
              <div
                className='flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
                draggable
                onDragEnd={(e) => {
                  setElements((p) => [
                    ...p,
                    <div
                      className='absolute flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'
                      style={{
                        top: `${e.pageY}px`,
                        left: `${e.pageX}px`,
                      }}
                      key={`${e.screenX}ss${e.screenY}`}
                      draggable
                    >
                      <img src={gripVertical} alt='grip-icon' />
                      <div className='ml-2'>Label</div>
                    </div>,
                  ]);
                }}
              >
                <img src={gripVertical} alt='grip-icon' />
                <div className='ml-2'>Label</div>
              </div>

              {/* INPUT */}
              <div className=' flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'>
                <img src={gripVertical} alt='grip-icon' />
                <div className='ml-2'>Input</div>
              </div>

              {/* BUTTON */}
              <div className=' flex bg-abWhite w-[278px] h-[48px] rounded items-center px-4'>
                <img src={gripVertical} alt='grip-icon' />
                <div className='ml-2'>Button</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
