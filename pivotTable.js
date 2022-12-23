// 🟢
/**
 * @Dev
 * Essa função tem o objetivo de iterar todos os arquivos da pasta que recebe os arquivos de respostas 
 * e criar uma tabela de dinâmica calculando o preço médio dos itens
 */
function pivotTable(folderId) {
  const driveFolder = DriveApp.getFolderById(String(folderId))
  const files = driveFolder.getFiles();
  const ss = SpreadsheetApp
  while (files.hasNext()) {
    let file = files.next();
    let sheet = ss.openById(String(file.getId()))
    if(sheet.getSheets().length <2){

      // CAPTURA CONFIGURAÇÕES
      sheet.getRange('A1').activate();
      var sourceData = sheet.getRange('A1:J1000');
      sheet.insertSheet(sheet.getActiveSheet().getIndex() + 1).activate();
      sheet.getActiveSheet().setHiddenGridlines(true);
      var pivotTable = sheet.getRange('A1').createPivotTable(sourceData);
      pivotTable = sheet.getRange('A1').createPivotTable(sourceData);
      var pivotGroup = pivotTable.addRowGroup(6);
      pivotGroup.showTotals(false);
      var pivotGroup = pivotTable.addRowGroup(7);
      pivotGroup.showTotals(false);
      var criteria = SpreadsheetApp.newFilterCriteria().setVisibleValues(sheet.getRange('A1:A').activate().getValues())
      .build();
      
      // SETA AS CONFIGURAÇÕES
      pivotTable = sheet.getRange('A1').createPivotTable(sourceData);
      var pivotValue = pivotTable.addPivotValue(9, SpreadsheetApp.PivotTableSummarizeFunction.AVERAGE);
      pivotGroup = pivotTable.addRowGroup(6);
      pivotGroup.showTotals(false);
      pivotGroup = pivotTable.addRowGroup(7);
      pivotGroup.showTotals(false);
      criteria = SpreadsheetApp.newFilterCriteria()
      .setVisibleValues(sheet.getRange('A1:A').activate().getValues().filter(function(item){return item[0] != ""}))
      .build();
      pivotTable.addFilter(6, criteria);

      let lista = sheet.getRange("A2:A").activate().getValues().filter(function(item){return item[0] != ""})
   }
  }
};

// 🟢
function readPivotTable(folderId){
  const driveFolder = DriveApp.getFolderById(String(folderId))
  const files = driveFolder.getFiles();
  const ss = SpreadsheetApp
  while (files.hasNext()) {
    let file = files.next();
    let sheet = ss.openById(String(file.getId()))
    let currentSheet = sheet.getSheets()[1]
    let itemColumn = currentSheet.getRange("A2:A").getValues().filter(function(item){return item[0] != "" && ['#DIV/0!']})
    let descColumn = currentSheet.getRange("B2:B").getValues().filter(function(item){return item[0] != "" && ['#DIV/0!']})
    let priceColumn = currentSheet.getRange("C2:C").getValues().filter(function(item){return item[0] != "" && ['#DIV/0!']})
    for (let i=0; i<itemColumn.length; i++){
      let objeto = new TabelaPrice(itemColumn[i][0], descColumn[i][0], priceColumn[i][0])
      console.log(objeto)
    }
  }
}