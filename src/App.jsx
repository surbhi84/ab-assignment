import "./App.css";
import { useState } from "react";

import { Blocks } from "./components/Blocks";
import { Element } from "./components/Element";
import { useElementDict } from "./hooks/reducer/useElementDict";

function App() {
  const [elementsId, setElementsId] = useState([]); // stores an array with id's of all elements
  const [elementsDict, elementsDispatch] = useElementDict();
  const [isOpen, setIsOpen] = useState(false); // manages opening and closing of modalForm

  const [initialPos, setInitialPos] = useState({ top: 0, left: 0 }); //initial position of element before drag starts

  return (
    <>
      <main className='h-screen '>
        <div className='h-auto droppable'>
          {elementsId.map((id) => (
            <Element
              key={id}
              id={id}
              elementsDict={elementsDict}
              elementsDispatch={elementsDispatch}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              initialPos={initialPos}
              setInitialPos={setInitialPos}
            />
          ))}
        </div>

        {/* SIDEBAR */}
        <div className='bg-sidebarBg h-screen w-[326px] ml-auto'>
          <div className='px-6'>
            <div className='text-abWhite font-bold text-xl py-4'>BLOCKS</div>

            <Blocks
              elementsId={elementsId}
              setElementsId={setElementsId}
              elementsDict={elementsDict}
              elementsDispatch={elementsDispatch}
              initialPos={initialPos}
              setInitialPos={setInitialPos}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
