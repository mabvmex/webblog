const jwt = require('../services/jwt');
const moment = require('moment');
const USer = require('../models/user');
const user = require('../models/user');


function WillExpireToken(token){
    const { exp } = jwt.decodedToken(token);
    const currentDate = moment().unix();

    if(currentDate > exp) {
        return true;
    }

    return false;
}

function refreshAccessToken(req, res) {
    const { refreshToken } = req.body;
    const isTokenExpired = WillExpireToken(refreshToken);

    if (isTokenExpired) {
        res.status(404).send({
            message: 'El refreshToken ha expirado.'
        });
    } else {
        const { id } = jwt.decodedToken(refreshToken);
        USer.findOne({_id: id}, (err, userStored) => {
            if (err) {
                res.estatus(500).send({
                    message: 'Error del servidor'
                })
            } else {
                if (!userStored) {
                    res.status(404).send({
                        message: 'Usuario no encontrado'
                    });
                } else {
                    res.status(200).send({
                        accessToken: jwt.createAccessToken(userStored),
                        refreshToken: refreshToken
                    });
                }
            }
        })
    }


}


module.exports = {
    refreshAccessToken
};