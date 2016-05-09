#! /usr/bin/env node
var prompt = require('prompt');
var fs = require('fs');

console.log('Gerador de classes java');

//variáveis padrão
var caminhoEntidade = '\\src\\main\\java\\br\\gov\\stn\\dominio\\entidade\\';
var caminhoRepositorio = '\\src\\main\\java\\br\\gov\\stn\\infraestrutura\\repositorio\\';
var caminhoServico = '\\src\\main\\java\\br\\gov\\stn\\dominio\\service\\';
var caminhoEndpoint = '\\src\\main\\java\\br\\gov\\stn\\aplicacao\\endpoint\\';

var modeloEntidade = __dirname + '\\templates\\Entidade.java';
var modeloRepositorio = __dirname + '\\templates\\Repositorio.java';
var modeloServico = __dirname + '\\templates\\Servico.java';
var modeloEndpoint = __dirname + '\\templates\\Endpoint.java';



//estrutura dos dados a serem coletados'
var schema = {
    properties: {
      nomeEntidade: {
        description:'Informe o nome base da entidade',
		message:'O nome da entidade é obrigatório',
        required: true
      },
      diretorioRaiz: {
        description:'Informe o diretório base do projeto, onde está localizado o POM.',
		message:'O diretório é obrigatório',
        required: true
      }
    }
  };

//obtenção dos parâmetros
var parametros = {};
prompt.get(schema,function(err,result){
	parametros = result;
	
	//escrita dos arquivos	
	escreverArquivo(caminhoEntidade,'',modeloEntidade);
	escreverArquivo(caminhoRepositorio,'DAO',modeloRepositorio);
	escreverArquivo(caminhoServico,'Service',modeloServico);
	escreverArquivo(caminhoEndpoint,'Endpoint',modeloEndpoint); 
});

//função responsável por escrever os arquivos
var escreverArquivo = function(_caminho,_complementoNome,_modelo){
	var nomeClasse = parametros.nomeEntidade+_complementoNome;
	var nomeArquivoEntidade = parametros.diretorioRaiz+_caminho+nomeClasse+'.java';	
	var conteudo = lerModelo(_modelo,nomeClasse,parametros.nomeEntidade);
	
	if (fs.existsSync(nomeArquivoEntidade)){
		console.log('Atenção!!! Já existe o arquivo ' + nomeArquivoEntidade + '. O arquivo não será reescrito.');
	} else {
		fs.writeFile(nomeArquivoEntidade,conteudo,function(err){
			if (err){
				return console.log(err);
			}
			console.log(nomeArquivoEntidade + ' gravado com sucesso.');
			console.log();
		});
	}
};

//função para leitura dos arquivos de modelo
var lerModelo = function(caminhoModelo,nomeClasse,nomeEntidade){	
	var modelo = '';
	modelo = fs.readFileSync(caminhoModelo).toString();	
	modelo = modelo.replace(/##ENTIDADE/g,nomeEntidade);
	modelo = modelo.replace(/##CLASSE-NORMAL/g,nomeClasse);
	modelo = modelo.replace(/##CLASSE-LOWER/g,nomeClasse.toLowerCase());
	modelo = modelo.replace(/##CLASSE-UPPER/g,nomeClasse.toUpperCase());
	return modelo;
};