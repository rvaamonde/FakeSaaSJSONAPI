const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

// Wrap response depending on the object being called.
router.render = (req, res) => {
    if (req.url === '/workspace_one_uem') {
        res.jsonp({
            Devices: res.locals.data
        })
    } else {
        res.jsonp(res.locals.data)
    }
}

// Run server on indicated port.
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Generate data dynamically.
function getdata() {
    const data = { workspace_one_uem: [] }

    for (let i = 0; i < 1000; i++) {
        data.workspace_one_uem.push({
            id: i,
            name: `user${i}`
        })
    }

    return data
}