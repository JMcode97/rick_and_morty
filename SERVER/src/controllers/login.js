const users = require('../utils/users')

const login = (req, res) => {
    let { email, password } = req.query

    let getUser = users.find((user) => user.email === email && user.password === password)
    if(getUser) return res.status(200).json({access: true})
    return res.status(200).json({access: false})
}

module.exports = login