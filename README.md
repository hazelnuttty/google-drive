## Google Drive Node.js Library 
This Node.js library provides a robust and efficient solution for managing and uploading files to Google Drive. It is specifically designed to simplify the process of backing up and organizing data, allowing developers to upload files of any supported format with ease. During the upload process, all files are automatically converted into a ZIP archive, ensuring a compact and well-structured backup. The library emphasizes reliability, performance, and ease of integration, making it an ideal choice for both individual developers and enterprise-level applications that require seamless cloud storage management.

---

## Features
Convert all files like JSON, JS, SQL, and more into a ZIP, then upload them to your Google Drive. We highly recommend subscribing to Google Drive for increased storage.

---

## Example Code
``` Javascript
const { uploadDatabase } = require("@hazeloffc/google-drive");
const credentials = require("./credentials.json");

(async () => {
  try {
    const result = await uploadDatabase({
      source: "./",                
      output: "./backup.zip",     
      credentials,                   
      folderId: "YOUR_DRIVE_FOLDER_ID"
    });

    console.log("🚀 Done! File uploaded:");
    console.log("🔗 Drive Link:", result.webViewLink);
  } catch (err) {
    console.error("❌ Failed:", err);
  }
})();
```
## Example Code: Monthly Upload
``` Javascript
const { uploadDatabase } = require("@hazeloffc/google-drive");
const credentials = require("./credentials.json");

function getMonthlyBackupName() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `backup-${year}-${month}.zip`;
}

(async () => {
  try {
    const output = `./${getMonthlyBackupName()}`;
    const result = await uploadDatabase({
      source: "./",                
      output,                     
      credentials,                 
      folderId: "YOUR_DRIVE_FOLDER_ID" 
    });

    console.log("🚀 Done! File uploaded:");
    console.log("📦 Local File:", output);
    console.log("🔗 Drive Link:", result.webViewLink);
  } catch (err) {
    console.error("❌ Failed:", err);
  }
})();
```
## Example credentials.json
``` Json 
{
  "type": "service_account",
  "project_id": "my-project-id",
  "private_key_id": "123abc456def789ghi...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BA...\n-----END PRIVATE KEY-----\n",
  "client_email": "my-service-account@my-project-id.iam.gserviceaccount.com",
  "client_id": "123456789012345678901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/my-service-account%40my-project-id.iam.gserviceaccount.com"
}
```
---

## How to Obtain credentials.json
1. Create a project in the [Google Cloud Console](https://console.cloud.google.com)
2. Enable the Google Drive API for your project.
3. Create a service account under IAM & Admin → Service Accounts.
4. Generate a JSON key for the service account and download the credentials.json file.

---

## Console Output
``` Text
🚀 Done! File uploaded:
🔗 Drive Link: https://drive.google.com/drive/folders/1A2bC3D4E5*********
```

## Monthly Upload Output
``` Text
🚀 Done! File uploaded:
📦 Local File: ./backup-2025-08.zip
🔗 Drive Link: https://drive.google.com/file/d/FILE_ID/view?usp=drives***
```
---

## Example Error Output
``` Text
❌ Failed: Error: Invalid credentials
```
---

## Information
> Our module for uploading files to Google Drive is completely free of charge. All data is fully private, and we do not collect any information or make any profit from it.

---

## Thanks To
A special thanks to the following contributors for their support and inspiration:

- Nathan  
- Finix  
- Syall  

--- 

### Technologies & Tools Used
[![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)]  [![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)]  [![Google Drive](https://img.shields.io/badge/Google_Drive-0F9D58?style=for-the-badge&logo=googledrive&logoColor=white)]  [![Google](https://img.shields.io/badge/Google-DB4437?style=for-the-badge&logo=google&logoColor=white)]  [![Google Database](https://img.shields.io/badge/Google_Database-F4B400?style=for-the-badge&logo=google&logoColor=white)]  [![Gemini](https://img.shields.io/badge/Gemini-FFD700?style=for-the-badge&logo=gemini&logoColor=black)]

---
## Developer
- Hazel  
Don’t forget to follow my GitHub for future updates: [Github](https://github.com/hazelnuttty)
