import DisplayButton from "@/components/DisplayButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center space-y-4">
        <p>
          recoilPersistを有効化しているとき、リロード時に特定条件下でエラーが発生する。
        </p>
        <div>
          <DisplayButton />
        </div>
        <Link
          href="/correct"
          className="text-blue-500 border-blue-400 hover:text-blue-300"
        >
          エラーが出ない例
        </Link>
      </div>
    </>
  );
}
