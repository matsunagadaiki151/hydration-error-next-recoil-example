import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isClickedState = atom<boolean>({
  key: "isClickedState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
