const express = require('express')
const {createShortenedUrl, singleUrl, deleteUrl, updateUrl} = require('../controller/shortener.controller')
const { auth } = require('../utils/token')


const shortenerRouter = express.Router()

shortenerRouter.post('', auth, createShortenedUrl)
shortenerRouter.get('/:identifier', singleUrl)
shortenerRouter.delete('/:identifier', auth, deleteUrl)
shortenerRouter.patch('/:identifier', auth, updateUrl)

module.exports = shortenerRouter