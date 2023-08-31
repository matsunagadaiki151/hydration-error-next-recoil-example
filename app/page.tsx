import DisplayButton from "@/component/DisplayButton";
import AppProvider from "./AppProvider";

export default function Home() {
  return (
    <>
      <div>
        recoilPersistを有効化しているとき、リロード時にエラーが発生する。
        <AppProvider>
          <DisplayButton />
        </AppProvider>
      </div>
    </>
  );
}
