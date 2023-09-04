"use client";

import { isClickedState } from "@/stores/isClickedState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const CorrectDisplayButton = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
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
      {isClicked && isMounted && <div>ボタンがクリックされました。</div>}
    </div>
  );
};

export default CorrectDisplayButton;
