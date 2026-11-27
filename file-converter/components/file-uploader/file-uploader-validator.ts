import data from "../../data/page.json";

export function validateFile(file: File): boolean {
    const allowedTypes = data.allowedFileTypes;

    if (!allowedTypes.includes(file.type)) {
        //alert('Invalid file type. Please upload one of the allowed file types: ' + allowedTypes.join(', '));
        return false;
    }


    // const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

    // if (file.size > maxSizeInBytes) {
    //     alert('File size exceeds the maximum limit of 5MB.');
    //     return false;
    // }

    return true;
}