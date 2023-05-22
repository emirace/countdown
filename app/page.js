"use client";
import { useState } from "react";
import Timer from "../utils/utils";

export default function Home() {
  const [time, setTime] = useState(0);
  const [word, setWord] = useState("Welcome");
  const [input, setInput] = useState({});
  const [add, setAdd] = useState(false);

  const start = () => {
    setWord(input.word);
    setTime(input.time);
    setAdd(false);
  };

  return (
    <div className="flex flex-col bg-red-800 justify-center items-center w-full h-screen">
      <div className="font-extrabold text-[100px] mb-0 capitalize">{word}</div>
      <div>
        <Timer initialMinute={time} initialSeconds={0} />
      </div>
      {add ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <input
              className="border mx-3 px-3 border-width rounded bg-transparent"
              placeholder="Name"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, word: e.target.value }))
              }
            />
            <input
              className="border mx-3 px-3 border-width rounded bg-transparent"
              placeholder="Time"
              type="number"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, time: e.target.value }))
              }
            />
          </div>
          <button className="m-3" onClick={start}>
            Start
          </button>
        </div>
      ) : (
        <button className="m-3" onClick={() => setAdd(true)}>
          Add
        </button>
      )}
    </div>
  );
}
