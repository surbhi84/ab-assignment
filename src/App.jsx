import "./App.css";
import { useEffect, useState } from "react";

import { Blocks } from "./components/Blocks";
import { Element } from "./components/Element";
import { useElementDict } from "./hooks/reducer/useElementDict";
import { ADDELEMENT } from "./hooks/reducer/types";

function App() {
  const [elementsId, setElementsId] = useState(
    JSON.parse(localStorage.getItem("elementIds")) ?? []
  ); // stores an array with id's of all elements
  const [elementsDict, elementsDispatch] = useElementDict(
    JSON.parse(localStorage.getItem("elementDictionary")) ?? {}
  );
  const [selectedId, setSelectedId] = useState("");
  const [isImported, setIsImported] = useState(false);

  const [initialPos, setInitialPos] = useState({ top: 0, left: 0 }); //initial position of element before drag starts

  useEffect(() => {
    if (elementsId.length) {
      localStorage.setItem("elementDictionary", JSON.stringify(elementsDict));
      localStorage.setItem("elementIds", JSON.stringify(elementsId));
    }
  }, [elementsDict, elementsId]);

  function onReaderLoad(event) {
    console.log(event);
    const importedData = JSON.parse(event.target.result);
    setElementsId((p) => [...p, ...importedData.data.elementsId]);
    elementsDispatch({
      type: ADDELEMENT,
      payload: { ...importedData.data.elementsDict },
    });
  }

  function onInputChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
    setIsImported(true);
  }

  return (
    <>
      <main className='h-screen flex'>
        <div className='h-full flex-grow droppable bg-dropBackground overflow-hidden'>
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
              isImported={isImported}
            />
          ))}
        </div>

        {/* SIDEBAR */}
        <div className='bg-sidebarBg h-screen w-[326px] ml-auto z-20'>
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

            <a
              href={
                "data:" +
                "application/json;charset=utf-8;" +
                "," +
                encodeURIComponent(
                  JSON.stringify({ data: { elementsDict, elementsId } })
                )
              }
              download='export.json'
              target='_blank'
              rel='noreferrer'
            >
              <button
                className='bg-dropBackground font-bold px-4 py-2 w-fit rounded mt-10 mb-8'
                onClick={() => {}}
              >
                Export
              </button>
            </a>

            <div className='flex flex-col items-center bg-dropBackground font-bold py-2 w-fit rounded mb-8'>
              Import File
              <input
                type='file'
                onChange={onInputChange}
                className='bg-dropBackground font-bold px-4 py-2 rounded w-[278px]'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
