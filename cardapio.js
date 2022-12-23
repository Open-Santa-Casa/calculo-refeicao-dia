  
 function cardapio(){
  conversorGSheet(folder_id_cardapio)
}
 
  
  // 🟢 --> FORMULÁRIO: "Cardápio 📖"
function populateCheckboxItem() {
  // call your form and connect to the drop-down item
  const ss = SpreadsheetApp
  var form = FormApp.openById("FORM ID");
  const ssItens = ss.openById("PLANILHA ID").getSheetByName("Cardápio 📖")

  
  const obj_itens = ["70132812","776748188", "2118690767", "2030824657","2041890130","332434288","1206063857" ]
  const colunasItens = ['A2','B2','C2','D2','E2','F2', 'G2']
  let itens = [];
  
  for (let i=0; i < colunasItens.length; i++){
    let itemFormCategoria = form.getItemById(String(obj_itens[i])).asCheckboxItem()
    ssItens.getRange(String(colunasItens[i])).activate();

    var currentCell = ssItens.getCurrentCell();
    let value1 = ssItens.getSelection().getNextDataRange(ss.Direction.DOWN).activate().getValues();
    currentCell.activateAsCurrentCell();

    for(let i = 0; i < value1.length; i++){
      if(value1[i][0] != ""){
        console.log(`Lista ${i} - ${value1[i][0]}`)
        itens[i] = value1[i][0]
      }
    }
    itemFormCategoria.setChoiceValues(itens)
    itens = []
  }
};

//========================================== 🚧   ⚠️ EM CONSTRUÇÃO ⚠️   🚧 ===========================================
function capturaCardapio(){
  const ss = SpreadsheetApp
  const cardapio = ss.openById("PLANILHA ID")
  .getSheetByName("Respostas ao formulário Cardápio 📖")
  const carimboDataHora = String("A2:A")
  const carimboDataHoraRange = cardapio.getRange(carimboDataHora).activate()
  const listaCarimboDataHoraRange = carimboDataHoraRange.getValues().filter(function(item){return item[0] != ""})
  const listaColunasItensCardapio = ["E", "F", "H", "J", "L", "N", "P"]
 
  //--------------
    /* 
    @disclaimer
      Esta iteração tem o intuito de fazer a leitura de linhas por coluna
    */
  let resultadoNewRange = Array()  
  for (let i =1; i <= listaCarimboDataHoraRange.length;i++){
    let rangeLetra = String(`A${i +1}:Q${i +1}`)
    let newRange = cardapio.getRange(String(rangeLetra)).activate()
    let valueObject = newRange.getValues()
    let obj = new criadorCardapio(
      valueObject[0][0], valueObject[0][1], valueObject[0][2], valueObject[0][3], valueObject[0][4], 
      valueObject[0][5], valueObject[0][6], valueObject[0][7], valueObject[0][8], valueObject[0][9], 
      valueObject[0][10], valueObject[0][11],valueObject[0][12], valueObject[0][13], valueObject[0][14],
      valueObject[0][15], valueObject[0][16]
      )
    resultadoNewRange.push(obj)
    }
    // 📺
    console.log(resultadoNewRange)

    //------------
            // --------> Possivel divisão entre duas funções <-----------
    //------------

    /* 
    @disclaimer
      Esta iteração tem o intuito de fazer o split dos itens lidos da celula para a captura 
      futura do preço médio dos itens
    */
    for (let i = 0; i < resultadoNewRange.length; i++){
      let chaves = Object.keys(resultadoNewRange[i])
      for (let n = 0; n < chaves.length; n++){
        let valorQuebrados =  String(resultadoNewRange[i][String(chaves[n])]).split(",")
        resultadoNewRange[i][String(chaves[n])] = valorQuebrados
      }
    }
    // 📺
    console.log(resultadoNewRange)
 
}
