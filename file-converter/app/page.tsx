import Image from "next/image";
import pageData from "../data/page.json";

import FileUploader from "@/components/file-uploader/file-uploader";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="mx-auto text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
            {pageData.heading}
          </h1>

          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {pageData.description}
          </h2>

          <p className="mx-auto text-lg tracking-tight leading-6 text-zinc-500 dark:text-zinc-400">
            {pageData.subtext}
          </p>

        </div>

        <FileUploader />

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

        </div>

      </main>
    </div>
  );
}
