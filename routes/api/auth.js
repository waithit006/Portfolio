const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const DBservices = require('../../services/db')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.get('/', auth, async (req, res) => {
    try {

        await DBservices.findByuser(await req.user.username, (result) => {
            console.log(result.length)
        })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')

    }
})

router.post('/',
    [check('username', "Username is required!").exists(),
    check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { username, password } = req.body

        DBservices.findByuser(username, async (result) => {
 
            
            if (result.length > 0) {

                const isMatch = await bcrypt.compare(password,result[0].password)

                if(!isMatch){
                    res.status(400)
                    .json({ errors: [{ msg: 'Password is not invalid' }] })
                }


                const payload = {
                    user: {
                        username: username
                    }
                }
                jwt.sign(payload,
                    config.get('jwtSecret'),
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token })
                    }
                )
            }
            else {
                res.status(400)
                    .json({ errors: [{ msg: 'User is not exist' }] })
            }
        })

    })

module.exports = router;