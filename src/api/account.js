import request from "./index.js"

//验证推荐人码
export const existsPromotion = (promote_code) => request.get(`/invitationexists?promote_code=${promote_code}`)


//验证昵称
export const userexists = (username) => request.get(`/userexists?username=${username}`)


//发送验证码
export const sendSmsVerification = (phone) => request.post('/sendverificationcode', { phone })


//验证验证码
export const verifySms = (phone, code) => request.post('/checkverificationcode', { phone, code })


//链接钱包
export const accountRegistered = (pubkey) => request.get(`/walletexists?wallet_address=${pubkey}`)


