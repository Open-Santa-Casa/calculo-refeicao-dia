/* 
  🟢 --> Formulário: + Compras 🍇📦🛒  
  
  💱 Função responsável por ler e converter todas as planilhas existentes na pasta "+ Compras 🍇📦🛒 (File responses)"
      no formato gSheets 

*/
function conversorGSheet() {
  const folderBId ="1bpF4di0oBhUeVw-XvJAP-XU71Iq1NM28X5S-K3gMHiWCalCDhZy65JTheZPC0R_ZAp2X_lx7"
  const driveFolder = DriveApp.getFolderById(String(folderBId))
  const files = driveFolder.getFiles();
  
  while (files.hasNext()) {
    let file = files.next();
    let name = file.getName();
    /**
    * 🎄✨🎇 🥂 ☃⛄
    * |Google Sheets | MimeType == application/vnd.google-apps.spreadsheet
    * |Excel         | MimeType == application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      🎆
    **/
    if (file.getMimeType() == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      let fileID = file.getId()
      let blobFile = file.getBlob()
      let newFile = {
        title : name+'_converted',
        parents: [{id: folderBId}] //  Added
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


/*
🔍 Pesquisa itens
🔖 Relaciona Preços Unitários
✂️ Recorta Valores
*/
function getData(){
  const ss = SpreadsheetApp
  const folderBId ="1bpF4di0oBhUeVw-XvJAP-XU71Iq1NM28X5S-K3gMHiWCalCDhZy65JTheZPC0R_ZAp2X_lx7"
  const driveFolder = DriveApp.getFolderById(String(folderBId))
  const files = driveFolder.getFiles();
  let resultadoNewRange = Array()  
  
  while (files.hasNext()) {
    let file = files.next();
    let name = file.getName();
    let fileID = file.getId();
//  📺
    console.log(name)
    let currentSheet = ss.openById(fileID).getSheets()
    let itemColumn = currentSheet[0].getRange("G2:G").getValues().filter(function(item){return item[0] != ""})
    let priceColumn = currentSheet[0].getRange("I2:I").getValues().filter(function(item){return item[0] != ""})
    let listaEscolhida = function(dataItemColumn,dataPriceColumn){
      if(dataItemColumn.length > dataPriceColumn.length){
        return dataItemColumn
      }else {
        return dataPriceColumn
      }
    }
    let escolhida = listaEscolhida(itemColumn, priceColumn)
    console.log(escolhida.length)
    for (let i =0; i <= escolhida.length; i++){
      //var obj = {item:String(itemColumn[i][0]), price:Number(priceColumn[i][0])}
      console.log(escolhida[i])
    }
//  📺      
  /**                                       🚧 Em Construção 🚧
   * 👷‍♂️ Exceções a serem tratadas:                                                                        💧🛢️
   * 
   * ⚠️ Correspondência de 50-100% do texto com um único valor na planilha de itens = match e atribuir valor
   * ⚠️ Correspondência de 0-49% do texto inserir um novo valor (Onde?) 🤦‍♂️
   *      - Sugestões: Descartáveis com possível e-mail alerta para atualização
   * ⚠️ (Em Aberto)
   * 
   */
  }

  const planilhaCentral = ss.openById("1arAl4cB0kFQCAnCca9jkFVvMXwc8o4SDBGob9JM7ag0").getSheetByName("Cardápio 📖")
}

