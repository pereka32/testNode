octokit = require('@octokit/rest')({
  debug: true
})

octokit.authenticate({
  type: 'oauth',
  token: 'd2c5f9f355f3deb7a8945f9128028738f8f4f3eb'
})

octokit.issues.addLabels({
  owner: 'pereka32',
  repo: 'testNode',
  number: '1',
  labels: ['testX']
}, function (err, res){
	if(err){
		console.log("Se ha producido un error");
		console.log(err);
	}else{
		console.log('Se ha creado correctamente');
	}
})