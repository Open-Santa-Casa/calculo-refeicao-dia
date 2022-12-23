//========================================== 🚧   ⚠️ EM CONSTRUÇÃO ⚠️   🚧 ===========================================
function registroRefeicao(){
  const ss = SpreadsheetApp
  const cardapio = ss.openById("1arAl4cB0kFQCAnCca9jkFVvMXwc8o4SDBGob9JM7ag0")
  .getSheetByName("Respostas ao formulário Refeições Diárias 🥣")
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
    let rangeLetra = String(`A${i +1}:K${i +1}`)
    let newRange = cardapio.getRange(String(rangeLetra)).activate()
    let valueObject = newRange.getValues()
    let obj = new novoRegistro(
      valueObject[0][0], valueObject[0][1], valueObject[0][2], valueObject[0][3], valueObject[0][4], 
      valueObject[0][5], valueObject[0][6], valueObject[0][7], valueObject[0][8], valueObject[0][9], 
      valueObject[0][10]
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

