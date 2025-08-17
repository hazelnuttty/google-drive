const { zipFolder } = require("./src/zip");
const { getDriveClient, uploadToDrive } = require("./src/drive");

/**
 * Upload folder ke Google Drive (as zip)
 * @param {Object} options
 * @param {string} options.source - folder to zip
 * @param {string} options.output - output .zip file
 * @param {Object} options.credentials - Google service account JSON
 * @param {string} [options.folderId] - Optional Google Drive folder ID
 */
async function uploadDatabase({
  source = "./data",
  output = "./data.zip",
  credentials,
  folderId,
}) {
  try {
    console.log("📦 Zipping folder...");
    await zipFolder(source, output);

    console.log("☁️ Uploading to Google Drive...");
    const drive = getDriveClient(credentials);
    const result = await uploadToDrive(drive, output, folderId);

    console.log("✅ Uploaded:", result.webViewLink);
    return result;
  } catch (err) {
    console.error("❌ Error:", err.message);
    throw err;
  }
}

module.exports = { uploadDatabase };
