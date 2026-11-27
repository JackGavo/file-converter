"use client";

import {useState} from "react";

import data from "../../data/page.json";
import { validateFile } from "./file-uploader-validator";
import { LoadingBar } from "../loading-bar/loading-bar";

export default function FileUploader() {

    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const handleFile = (file: File | undefined) => {
        if (!file) return;

        if (!validateFile(file)) {
            setIsUploading(false);
            // add error message state here
            return;
        };

        setFile(file);
        setIsUploading(true);
        setUploadProgress(0);
             
    }

    if (isUploading) {
        return <LoadingBar progress={50} />
    }

    return (
        <label
            htmlFor="file-input"
            className={`flex h-65 w-full cursor-pointer items-center justify-center 
                rounded-md border border-solid border-black/[.08] px-5 
                transition-colors hover:border-transparent hover:bg-black/[.04] 
                dark:border-white/[.145] dark:hover:bg-[#1a1a1a]
                ${isDragging ? "bg-black/[.04] dark:bg-[#1a1a1a]" : ""}
            `}
            
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