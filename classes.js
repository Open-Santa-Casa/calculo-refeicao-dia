class TabelaPrice{
  constructor(cod_item, description, price_quote, sinonimos){
    this.cod_item = cod_item,
    this.description = description,
    this.price_quote = price_quote
    this.sinonimos = sinonimos
  }
}



class novoRegistro {
  constructor(
    timestamp,
    refeicao_tipo,	
    setor_destino,	
    destinatario,	
    qtd_ref_funcionario, 
    qtd_ref_livre,	
    qtd_ref_branda,	
    qtd_ref_pastosas, 
    qtd_ref_liquida,	
    qtd_ref_liquida_restrita, 
    qtd_ref_acompanhante) {
      this.timestamp=timestamp;
      this.refeicao_tipo = refeicao_tipo	
      this.setor_destino = setor_destino	
      this.destinatario = destinatario	
      this.qtd_ref_funcionario = qtd_ref_funcionario 
      this.qtd_ref_livre = qtd_ref_livre	
      this.qtd_ref_branda = qtd_ref_branda	
      this.qtd_ref_pastosas = qtd_ref_pastosas 
      this.qtd_ref_liquida = qtd_ref_liquida	
      this.qtd_ref_liquida_restrita = qtd_ref_liquida_restrita 
      this.qtd_ref_acompanhante = qtd_ref_acompanhante  
      }
    }


    class criadorCardapio {
  constructor(
    timestamp,
    convenio,
    refeicao,
    tipo_refeicao,
    descartaveis,
    proteina,
    porc_proteina,
    vegetais,
    porc_salada,
    frutas,
    porc_frutas,
    condimentos,
    porc_condimentos,
    carb_legume,
    porc_carb_legume,
    bebidas,
    porc_bebidas) {
      this.timestamp=timestamp;
      this.convenio=convenio;
      this.refeicao=refeicao;
      this.tipo_refeicao=tipo_refeicao;
      this.descartaveis=descartaveis;
      this.proteina=proteina;
      this.porc_proteina=porc_proteina;
      this.vegetais=vegetais;
      this.porc_salada=porc_salada;
      this.frutas=frutas;
      this.porc_frutas=porc_frutas;
      this.condimentos=condimentos;
      this.porc_condimentos=porc_condimentos;
      this.carb_legume=carb_legume;
      this.porc_carb_legume=porc_carb_legume;
      this.bebidas=bebidas;
      this.porc_bebidas=porc_bebidas;
  }
}
