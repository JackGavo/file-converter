export function validateFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Please upload a JPEG, PNG, or PDF file.');
        return false;
    }

    if (file.size > maxSizeInBytes) {
        alert('File size exceeds the maximum limit of 5MB.');
        return false;
    }

    return true;
}