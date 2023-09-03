"use client";

import { isClickedState } from "@/stores/isClickedState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const DisplayButton = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);

  useEffect(() => {
    setIsClicked(false);
  }, [setIsClicked]);

  const clickHandler = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={clickHandler}
        className="text-white bg-blue-500 rounded-xl px-4 py-2"
      >
        ボタンを押す
      </button>
      {isClicked && <div>ボタンがクリックされました。</div>}
    </div>
  );
};

export default DisplayButton;
