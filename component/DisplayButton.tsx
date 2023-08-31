"use client";

import { isClickedState } from "@/stores/isClickedState";
import { useRecoilState } from "recoil";

const DisplayButton = () => {
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);

  const clickHandler = () => {
    setIsClicked(true);
  };

  return (
    <>
      <button onClick={clickHandler}>ボタンを押す</button>
      {isClicked && <div>ボタンがクリックしてください。</div>}
    </>
  );
};

export default DisplayButton;
