export function getFileName(path) {
    const file = path.split("/").at(-1);
    return file.substring(0, file.lastIndexOf("."));
}