import Image from "next/image";
import pageData from "../data/page.json";

import FileUploader from "@/components/file-uploader/file-uploader";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center align-top justify-start gap-12 py-32 px-16 bg-white dark:bg-black">

        <div className="flex flex-col items-center gap-6 justify-center">
          <h1 className="flex text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
            {pageData.heading}
          </h1>

          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {pageData.description}
          </h2>

          <p className="flex text-lg tracking-tight leading-6 text-zinc-500 dark:text-zinc-400">
            {pageData.subtext}
          </p>

        </div>

        <div className="mx-auto w-full">
          <FileUploader />
        </div>

      </main>
    </div>
  );
}
