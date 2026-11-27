"use client";

export function LoadingBar(progress: number) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}