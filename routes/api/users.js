const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const DBservices = require('../../services/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/',
    [check('username', "Username is required!").not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters!').isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { username, password } = req.body

        DBservices.checkUsername(username, async (result) => {
            if (result === 1) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }] })
            }
            else {
                const salt = await bcrypt.genSalt(10);

                DBservices.register(username, await bcrypt.hash(password, salt), (result) => {
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
                });

            }
        })

    })

module.exports = router;
