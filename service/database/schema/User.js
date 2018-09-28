const mongoose = require('mongoose')  //引入Mongoose
const Schema = mongoose.Schema  //声明Schema
const bcrypt = require('bcrypt')  //引入bcrypt

let ObjectId = Schema.Types.ObjectId  //声明Object类型

//创建我们的用户Schema
const userSchema = new Schema({
  UserId: ObjectId,
  userName: {unique: true, type: String},
  passWord: String,
  creatAt: {type: Date, default: Date.now()},
  lastLoginAt:{type: Date, default: Date.now()}
})

//每次存储数据时都要执行
userSchema.pre('save', function (next) {
  console.log(this)

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(this.passWord, salt, (err, hash) => {
      if (err) return next(err)
      this.passWord = hash
      next()
    })
  })
})

//发布模型
mongoose.model('User', userSchema)