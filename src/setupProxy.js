function proxy(app) {
  app.get(/^\/$/, (req, res) => res.redirect('/list'))

  // if you can figure out how we can avoid this that'd be great
  // it's only necessary for the "test:e2e" script
  app.head(/^\/list$/, (req, res) => res.status(200).end())
}

module.exports = proxy
