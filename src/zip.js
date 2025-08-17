const fs = require("fs");
const archiver = require("archiver");

/**
 * @param {string} sourceFolder - path to folder
 * @param {string} outPath - output zip path
 */

function zipFolder(sourceFolder, outPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => resolve(outPath));
    archive.on("error", (err) => reject(err));

    archive.pipe(output);
    archive.directory(sourceFolder, false);
    archive.finalize();
  });
}

module.exports = { zipFolder };
