octokit = require('@octokit/rest')({
  debug: true
})
octokit.authenticate({
  type: 'oauth',
  token: 'd2c5f9f355f3deb7a8945f9128028738f8f4f3eb' //token authentication
})

octokit.repos.createStatus({
  owner: 'pereka32',
  repo: 'testNode',
  sha: '7c5ef572f939dc62272d8c6344fac70591f29c0a',
  state: 'success'
})