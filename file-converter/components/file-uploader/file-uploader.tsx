"use client";

import {useState} from "react";

import data from "../../data/page.json";
import { validateFile } from "./file-uploader-validator";

export default function FileUploader() {
    const [isDragging, setIsDragging] = useState(false);
    const handleFile = (file: File | undefined) => {
        if (!file) { 
            return; 
        }
        else
        {
            validateFile(file);
        }
    };

    return (
        <label
            htmlFor="file-input"
            className="flex h-65 w-full cursor-pointer items-center justify-center rounded-md border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            onDragOver={
                (e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }
            }
            onDragLeave={() => {
                setIsDragging(false)
            }}
            onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFile(e.dataTransfer.files[0]);
            }}
        >
            <input id="file-input" type="file" className="hidden" />
            {data.uploadButtonText}
        </label>
    );
}