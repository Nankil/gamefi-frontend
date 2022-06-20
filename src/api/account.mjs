import { get_request, post_request } from "./index.mjs"
import qs from 'qs'
import { red } from "tailwindcss/colors.js"

//验证推荐人码
export const existsPromotion = (promote_code) => get_request.get(`/invitationexists?promote_code=${promote_code}`).then(res => {
    return res
}).catch(err => {
    return err.response
})


//验证昵称
export const userExists = (username) => get_request.get(`/userexists?username=${username}`).then(res => {
    return res
}).catch(err => {
    return err.response
})


//发送验证码
export const sendSmsVerification = (phone) => post_request.post('/sendverificationcode', qs.stringify({ phone })).then(res => {
    return res
}).catch(err => {
    return err.response
})


//验证验证码
export const verifySms = (phone, code) => get_request.post('/checkverificationcode', qs.stringify({ 'phone': phone, 'code': code })).then(res => {
    console.log(phone, code)
    return res
}).catch(err => {
    return err.response
})

//验证邮箱
export const emailVerified = (username) => get_request.get(`/emailverified?username=${username}`).then(res => {
    return res
}).catch(err => {
    return err.response
})

//注册
export const register = (obj) => post_request.post('/register', qs.stringify(obj)).then(res => {
    console.log(88888)
    console.log(obj)
    return res
}).catch(err => {
    console.log(99999)
    return err.response
})

//链接钱包
export const accountRegistered = (pubkey) => get_request.get(`/walletexists?wallet_address=${pubkey}`)


