/**
 * @Dev
 * Conversor de arquivos tem por finalidade transformar todos os arquivos de MimeType Excel
 * para o MimeType GSheet, a função itera em todos os arquivos da pasta e como referência
 * para localização da pasta deve ser informado o ID.
 */
function conversorGSheet(folderId) {
  const driveFolder = DriveApp.getFolderById(String(folderId))
  const files = driveFolder.getFiles();
  
  while (files.hasNext()) {
    let file = files.next();
    let name = file.getName();
    /**
    * 🎄✨🎇 🥂 ⛄
    * |Google Sheets | MimeType == application/vnd.google-apps.spreadsheet
    * |Excel         | MimeType == application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      🎆
    **/
    if (file.getMimeType() == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      let fileID = file.getId()
      let blobFile = file.getBlob()
      let newFile = {
        title : name+'_converted',
        parents: [{id: folderId}] //  Added
      };

  /* ⚠️  <----->  🗝️
  ❗Inicia Drive API adicionada em: https://developers.google.com/apps-script/guides/services/advanced#enable_advanced_services
  ❗E ativada em: App Script > "Projeto" > Serviços + > Drive API
  */

      gfile = Drive.Files.insert(newFile, blobFile, {
        convert: true,
        filetype: "Google Sheets"
      })
      Drive.Files.remove(fileID)
    }
  }
}
