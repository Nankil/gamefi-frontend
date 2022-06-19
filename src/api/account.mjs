import {get_request, post_request} from "./index.mjs"
import qs from 'qs'

//验证推荐人码
export const existsPromotion = (promote_code) => get_request.get(`/invitationexists?promote_code=${promote_code}`)


//验证昵称
export const userExists = (username) => get_request.get(`/userexists?username=${username}`)


//发送验证码
export const sendSmsVerification = (phone) => post_request.post('/sendverificationcode', qs.stringify({ 'phone': phone }))


//验证验证码
export const verifySms = (phone, code) => post_request.post('/checkverificationcode', qs.stringify({ 'phone': phone, 'code': code }))


//链接钱包
export const accountRegistered = (pubkey) => get_request.get(`/walletexists?wallet_address=${pubkey}`)


