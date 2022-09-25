const fs = require('fs-extra');
const path = require('path');

const pathToFolder1 = path.join(process.cwd(), '/dz4-folder-1');
const pathToFolder2 = path.join(process.cwd(), '/dz4-folder-2');
const pathToFolder3 = path.join(process.cwd(), '/dz4-folder-3');
const pathToFile1 = path.join(process.cwd(), '/dz4-folder-1/file.txt');
const pathToFile2 = path.join(process.cwd(), '/dz4-folder-2/file.txt');
const pathToFile3 = path.join(process.cwd(), '/dz4-folder-3/file.txt');

run();

async function run() {
    try {
        await fs.ensureDir(pathToFolder1);
        await fs.ensureFile(pathToFile1);
        await fs.ensureDir(pathToFolder2);
        await fs.move(pathToFile1, pathToFile2);
        await fs.ensureDir(pathToFolder3);
        await fs.copy(pathToFile2, pathToFile3);
        await fs.remove(pathToFile2);
        await fs.remove(pathToFile3);
        await fs.remove(pathToFolder1);
        await fs.remove(pathToFolder2);
        await fs.remove(pathToFolder3);
    } catch (error) {
        console.error(error);
    }
}
