const fs = require("fs");
const { google } = require("googleapis");

/*
 * Create Google Drive client with service account credentials
 */

function getDriveClient(credentials) {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });
  return google.drive({ version: "v3", auth });
}

/*
 * @param {any} drive - Google Drive client
 * @param {string} filePath - Path to file
 * @param {string} [folderId] - Folder ID in Google Drive
 */

async function uploadToDrive(drive, filePath, folderId) {
  const fileMetadata = {
    name: filePath.split("/").pop(),
    parents: folderId ? [folderId] : undefined,
  };

  const media = {
    mimeType: "application/zip",
    body: fs.createReadStream(filePath),
  };

  const res = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: "id, webViewLink",
  });

  return res.data;
}

module.exports = { getDriveClient, uploadToDrive };
