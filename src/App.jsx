import "./App.css";
import { useEffect, useState } from "react";

import { Blocks } from "./components/Blocks";
import { Element } from "./components/Element";
import { useElementDict } from "./hooks/reducer/useElementDict";

function App() {
  const [elementsId, setElementsId] = useState(
    JSON.parse(localStorage.getItem("elementIds"))
  ); // stores an array with id's of all elements
  const [elementsDict, elementsDispatch] = useElementDict(
    JSON.parse(localStorage.getItem("elementDictionary"))
  );
  const [selectedId, setSelectedId] = useState("");

  const [initialPos, setInitialPos] = useState({ top: 0, left: 0 }); //initial position of element before drag starts

  useEffect(() => {
    localStorage.setItem("elementDictionary", JSON.stringify(elementsDict));
    localStorage.setItem("elementIds", JSON.stringify(elementsId));
  }, [elementsDict, elementsId]);

  return (
    <>
      <main className='h-screen flex'>
        <div className='h-full flex-grow droppable bg-dropBackground'>
          {elementsId.map((id) => (
            <Element
              key={id}
              id={id}
              elementsDict={elementsDict}
              elementsDispatch={elementsDispatch}
              setElementsId={setElementsId}
              initialPos={initialPos}
              setInitialPos={setInitialPos}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
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
