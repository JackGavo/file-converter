export default function FileUploader() {
    return (
        <div className="flex flex-col items-center gap-4">
            <label htmlFor="file-input" className="cursor-pointer">
                <div className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                    Upload File
                </div>
            </label>
            <input id="file-input" type="file" className="hidden" />
        </div>
    );
}