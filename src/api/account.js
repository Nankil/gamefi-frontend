import request from "./index.js"

//验证推荐人码
export const existsPromotion = (promote_code) => request.get(`/invitationexists?promote_code=${promote_code}`)


//验证昵称
export const userexists = (username) => request.get(`/userexists?username=${username}`)


//发送验证码
export const sendSmsVerification = (phone) => request.post(`/sendverificationcode?phone=${phone}`)


//验证验证码
export const verifySms = () => request.post(`/checkverificationcode?phone=+17542001818&&code=041685`)


//链接钱包
export const accountRegistered = (pubkey) => request.get(`/walletexists?wallet_address=${pubkey}`)


