export function getFileName(path) {
    const file = path.split("/").pop();
    const fileName = file.substring(0, file.lastIndexOf("."));
    return fileName ? fileName : file;
}