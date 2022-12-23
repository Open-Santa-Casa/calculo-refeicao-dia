// 🟢 --> FOLDER -> PLANILHAS: + Compras 📦🛒 (File responses)
/**
 * @Dev
 * Essa função tem o objetivo de iterar todos os arquivos da pasta que recebe os arquivos de respostas 
 * e criar uma tabela de dinâmica calculando o preço médio dos itens
 */
function pivotTable() {

  const folderBId ="#################### FOLDER ID ##########################"
  const driveFolder = DriveApp.getFolderById(String(folderBId))
  const files = driveFolder.getFiles();
  const ss = SpreadsheetApp
  while (files.hasNext()) {
    let file = files.next();
    let sheet = ss.openById(String(file.getId()))
    if(sheet.getSheets().length <2){
      sheet.getRange('A1').activate();
      var sourceData = sheet.getRange('A1:J1000');
      sheet.insertSheet(sheet.getActiveSheet().getIndex() + 1).activate();
      sheet.getActiveSheet().setHiddenGridlines(true);
      var pivotTable = sheet.getRange('A1').createPivotTable(sourceData);
      pivotTable = sheet.getRange('A1').createPivotTable(sourceData);
      var pivotGroup = pivotTable.addRowGroup(7);
      pivotGroup.showTotals(false);
      pivotTable = sheet.getRange('A1').createPivotTable(sourceData);
      var pivotValue = pivotTable.addPivotValue(9, SpreadsheetApp.PivotTableSummarizeFunction.AVERAGE);
      pivotGroup = pivotTable.addRowGroup(7);
      pivotGroup.showTotals(false);

      let lista = sheet.getRange("A2:A").activate().getValues().filter(function(item){return item[0] != ""})
   }
  }
};
