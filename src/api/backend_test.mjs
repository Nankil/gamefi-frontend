
import {register, existsPromotion, login, accountRegistered} from './backend.mjs';

const main = async () => {
  let res = await register('0x01244', 'js_test', '123', '', 'PDszehcgqK');
  console.log(res);

  res = await existsPromotion('AETIyTlbkD');
  console.log(res);

  res = await login('0x01244');
  console.log(res);

  res = await accountRegistered('0x01244');
  console.log(res);
};

main();
