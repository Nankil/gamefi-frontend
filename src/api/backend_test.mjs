
import {login, updatePhone, updateUsername, updateEmail} from './backend.mjs';

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
      case 'login': {
        const pubkey = cmd[1];
        res = await login(pubkey);
        console.log(res);
        token = res.token;
        break;
      }
      case 'updatephone': {
        const phone = cmd[1];
        res = await updatePhone(phone, token);
        console.log(res);
        break;
      }
      case 'updateusername': {
        const username = cmd[1];
        res = await updateUsername(username, token);
        console.log(res);
        break;
      }
      case 'updateemail': {
        const email = cmd[1];
        res = await updateEmail(email, token);
        console.log(res);
        break;
      }
    }
  }
};


main();
