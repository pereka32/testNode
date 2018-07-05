octokit = require('@octokit/rest')({
  debug: true
})
octokit.authenticate({
  type: 'oauth',
  token: 'd2c5f9f355f3deb7a8945f9128028738f8f4f3eb' //token authentication
})
octokit.repos.addCollaborator({
  owner: 'pereka32',
  repo: 'testNode',
  username: 'ivanperez97'
}, function (err, res){
	if(err){
		console.log("Se ha producido un error");
		console.log(err);
	}else{
		console.log('Se ha enviado la invitacion correctamente');
	}

})