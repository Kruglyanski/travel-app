const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const ImgLink = require('../models/ImgLink')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/register роут регистрации

router.post(
    '/register',
    [
        check('email','Некорректный email').isEmail(), // валидация формы регистрации
        check('password','Минимальная длина пароля 6 символов')
            .isLength({min: 6}),
    ],
    async (req, res) =>{

        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array(), message: "Некоректные данные", ok: false})
            }

            const {email, password, name} = req.body

            const candidate = await User.findOne({email: email})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким email уже существует", ok: false})
            }

            const hashedPassword = await bcrypt.hash(password, 12) //хеширование пароля
            const user = new User({email, password: hashedPassword, name})
            await user.save()
            res.status(201).json({message: "Пользователь успешно создан", ok: true})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }
    })

// /api/login

router.post(
    '/login',
    [
        check('email','Некорректный email').normalizeEmail().isEmail(), // валидация формы входа
        check('password','Введите пароль').exists()

    ],

    async (req, res) =>{
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json(({errors: errors.array(), message: "Некорректные данные", ok: false}))
            }
            const {email, password} = req.body

            const user = await User.findOne({email: email})

            if(!user) {
                return res.status(400).json({ message: "Некорректные данные", ok: false})
            }
            const isMatch =  await bcrypt.compare(password, user.password) //сопоставление паролей

            if(!isMatch) {
                return res.status(400).json({ message: "Некорректные данные", ok: false})
            }

            const token = jwt.sign( // создание токена
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )
            res.json({token, userId: user.id, name:user.name, ok: true})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё", ok: false})
        }

    })

//api/me
router.post(
    '/me',
    async (req, res) =>{
        try {

            const {userId} = req.body

            const imgLink = await ImgLink.findOne({userId: userId}) || ''
            const {name} = await User.findById(userId)

            res.json({ avatar: imgLink.avatar, name: name, ok: true})
        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again", ok: false})
        }

    })


module.exports = router
