const express = require('express');
const { StatusCodes } = require('http-status-codes')
const app = express();

function pingRequest(req, res) {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "PONG",
        error: {},
        data: {
            ping: "pong"
        }
    })
}

module.exports = pingRequest;