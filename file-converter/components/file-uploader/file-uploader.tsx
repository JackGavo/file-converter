import data from "../../data/page.json";

export default function FileUploader() {
    return (
        <label
            htmlFor="file-input"
            className="flex h-65 w-full cursor-pointer items-center justify-center rounded-md border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
        >
            <input id="file-input" type="file" className="hidden" />
            {data.uploadButtonText}
        </label>
    );
}