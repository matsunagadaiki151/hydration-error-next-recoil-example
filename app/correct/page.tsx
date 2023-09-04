import CorrectDisplayButton from "@/components/CorrectDisplayButton";
import DisplayButton from "@/components/DisplayButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between items-center space-y-4">
        <p>リロードしてもエラーが発生しない例</p>
        <div>
          <CorrectDisplayButton />
        </div>
        <Link
          href="/"
          className="text-blue-500 border-blue-400 hover:text-blue-300"
        >
          エラーが出る例
        </Link>
      </div>
    </>
  );
}
