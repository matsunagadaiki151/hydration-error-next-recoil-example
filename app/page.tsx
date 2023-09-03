import DisplayButton from "@/components/DisplayButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center space-y-4">
        <p>recoilPersistを有効化しているとき、リロード時にエラーが発生する。</p>
        <div>
          <DisplayButton />
        </div>
      </div>
    </>
  );
}
