var fs = require('fs');

module.exports = function(nomeEntidade){
	fs.writeFile(nomeEntidade+'.java','Conteúdo do arquivo',function(err){
		if(err) throw err;
		console.log('salvo no mesmo local');
	});
};
