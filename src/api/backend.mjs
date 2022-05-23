// import fetch from 'node-fetch';

const baseUrl = 'http://localhost:8081';

/**
 *
 * @param {String} code
 * @return {Object}
 */
export async function existsPromotion(code) {
  try {
    const res = await fetch(baseUrl + '/invitationexists?' +
      new URLSearchParams({
        promote_code: code,
      }));

    const resObj = await res.json();
    if (resObj.exists) {
      return {
        status: true,
        code: resObj.name,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (e) {
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}

/**
 *
 * @param {String} wallet
 * @param {String} username
 * @param {String} phone
 * @param {String} email
 * @param {String} invitation_code
 * @return {Object}
 */
export async function register(wallet, username, phone, email, invitation_code) {
  const formData = new URLSearchParams();
  formData.append('wallet_pubkey', wallet);
  formData.append('username', username);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('promote_code', invitation_code);

  try {
    const res = await fetch(baseUrl + '/register', {
      method: 'POST',
      body: formData,
    });
    const resObj = await res.json();
    if (resObj.status === 0) {
      return {
        status: true,
        message: resObj.message,
      };
    } else {
      return {
        status: false,
        message: resObj.message,
      };
    }
  } catch (e) {
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}

/**
 *
 * @param {String} pubkey
 * @return {Object}
 */
export async function login(pubkey) {
  try {
    const res = await fetch(baseUrl + '/login', {
      method: 'POST',
      body: new URLSearchParams({
        type: 'wallet',
        pubkey: pubkey,
      }),
    });
    const resObj = await res.json();
    if (resObj.code === 200) {
      return {
        status: true,
        expired_at: resObj.expire,
        token: resObj.token,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (e) {
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}

/**
 *
 * @param {String} pubkey
 * @return {Object}
 */
export async function accountRegistered(pubkey) {
  try {
    const res = await fetch(baseUrl + '/walletexists?' + new URLSearchParams({
      wallet_address: pubkey,
    }));
    const resObj = await res.json();
    if (resObj.exists) {
      return {
        status: true,
        username: resObj.name,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (e) {
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}
