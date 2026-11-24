import Image from "next/image";
import pageData from "../data/page.json";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
            {pageData.heading}
          </h1>

          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {pageData.description}
          </h2>

          <p className="mx-auto text-lg tracking-tight leading-6 text-zinc-500 dark:text-zinc-400">
            {pageData.subtext}
          </p>

        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Button
          </a>
          
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Second Test Button
          </a>
          
        </div>

      </main>
    </div>
  );
}
