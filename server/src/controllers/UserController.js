module.exports={


    index (req, res) {
        res.send('เรียกขอ้ มูลผใู้ชง้านทDงัหมด')
        },
        // create user
        create (req, res) {
        res.send('ทําการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
        },
        // edit user, suspend, active
        put (req, res) {
        res.send('ทาํการแกไ้ขผใุ้ชง้าน: ' + req.params.userId + ' : ' + 
       JSON.stringify(req.body))
        },

        remove (req, res) {
            res.send('ทําการลบผุ้ใช้งาน: ' + req.params.userId + ' : ' + 
           JSON.stringify(req.body))
            },
            // get user by id
            show (req, res) {
            res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
            }
           }


