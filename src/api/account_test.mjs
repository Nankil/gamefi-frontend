
import {existsPromotion, userExists, sendSmsVerification, verifySms, accountRegistered} from './account.mjs';

import * as readline from 'node:readline';
import {stdin, stdout} from 'node:process';


let token = '';
let res;

const main = async () => {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });


  for await (const line of rl) {
    const cmd = line.split(' ');
    console.log(cmd);

    switch (cmd[0]) {
      case 'existspromotion': {
        const promote_code = cmd[1];
        res = await existsPromotion(promote_code);
        console.log(res);
        break;
      }
      case 'userexists': {
        const username = cmd[1];
        res = await userExists(username);
        console.log(res);
        break;
      }
      case 'sendsms': {
        const phone = cmd[1];
        res = await sendSmsVerification(phone);
        console.log(res);
        break;
      }
      case 'verifysms': {
        const phone = cmd[1];
        const code = cmd[2];    
        res = await verifySms(phone, code);
        console.log(res);
        break;
      }
      case 'accountregistered': {
        const pubkey = cmd[1];
        console.log(pubkey);   
        res = await accountRegistered(pubkey);
        console.log(res);
        break;
      }
    }
  }
};


main();
