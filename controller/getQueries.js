const { validateToken } = require('../helper/hasAccess');

module.exports.getRoutes = async function (req, res) {

    const bearerHeader = req.headers['authorization'];

    console.log(bearerHeader);

    if (typeof bearerHeader !== 'undefined') {

        // executives only
        const roles = [2];

        const bearer = bearerHeader.split(' ');

        const jwt = bearer[1];

        console.log('\n\n\n\n');

        console.log(jwt);

        console.log('\n\n\n\n');

        const result = await validateToken(jwt, roles);

        console.log(result);
        
        if (result === true) {
            res.status(200).json({
                success: true,
                access: 'Access granted',
                query: 'This is Query'
            })
        }
        else {
            res.status(401).json({
                success: false,
                access: 'Access denied'
            })
        }

    }
    else {
        res.status(403).json({
            success: false,
            access: 'Access denied'
        })
    }




}