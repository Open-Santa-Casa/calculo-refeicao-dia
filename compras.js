
/* 
  🟢 --> Formulário: + Compras 🍇📦🛒  
  
  💱 Função responsável por ler e converter todas as planilhas existentes na pasta "+ Compras 🍇📦🛒 (File responses)"
      no formato gSheets 

*/
function compras(){
  conversorGSheet(folder_id_compras)
  pivotTable(folder_id_compras)
  readPivotTable(folder_id_compras)
}

/*
🔍 Pesquisa itens
🔖 Relaciona Preços Unitários
✂️ Recorta Valores
*/
function getData(){
  const ss = SpreadsheetApp
  const folderBId ="FOLDER ID"
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

  const planilhaCentral = ss.openById("PLANILHA ID").getSheetByName("Cardápio 📖")
}

