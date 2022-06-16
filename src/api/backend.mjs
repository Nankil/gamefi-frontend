<<<<<<< HEAD
// import fetch from 'node-fetch';

import { rewriteDefault } from 'vue/compiler-sfc';

const baseUrl = 'http://103.117.102.225:8081';

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
                invitor: resObj.name,
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

/**
 *
 * @param {String} username
 * @return {Object}
 */
export async function userexists(username) {
    try {
        const res = await fetch(baseUrl + '/userexists?' + new URLSearchParams({
            username: username,
        }));
        const resObj = await res.json();
        if (resObj.exists) {
            return {
                status: true,
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
 * @param {String} username
 * @return {Object}
 */
export async function emailVerified(username) {
    try {
        const res = await fetch(baseUrl + '/emailverified?' + new URLSearchParams({
            username: username,
        }));

        const resObj = await res.json();

        if (resObj.verified) {
            return {
                status: true,
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
 * @param {String} phone
 * @return {Object}
 */
export async function sendSmsVerification(phone) {
    try {
        const res = await fetch(baseUrl + '/sendverificationcode', {
            method: 'POST',
            body: new URLSearchParams({
                phone: phone,
            }),
        });

        const resObj = await res.json();
        console.log(resObj);
        if (resObj.status === 'success') {
            return {
                status: true,
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
 * @param {String} phone
 * @param {String} code
 * @return {Object}
 */
export async function verifySms(phone, code) {
    try {
        const res = await fetch(baseUrl + '/checkverificationcode', {
            method: 'POST',
            body: new URLSearchParams({
                phone: phone,
                code: code,
            }),
        });

        const resObj = await res.json();
        if (resObj.status === 'success') {
            return {
                status: true,
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
 * @param {String} phone
 * @param {String} token
 */
export async function updatePhone(phone, token) {
    const bearer = 'Bearer ' + token;
    try {
        const res = await fetch(baseUrl + '/app/updatephone', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
            },
            body: new URLSearchParams({
                phone: phone,
            }),
        });
        const resObj = await res.json();
        return resObj;
    } catch (e) {
        console.log(e);
        return {
            status: false,
            message: 'Error connecting to server',
        };
    }
}

/**
 *
 * @param {String} username
 * @param {String} token
 * @return {Object}
 */
export async function updateUsername(username, token) {
    const bearer = 'Bearer ' + token;
    try {
        const res = await fetch(baseUrl + '/app/updateusername', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
            },
            body: new URLSearchParams({
                username: username,
            }),
        });
        const resObj = await res.json();
        return resObj;
    } catch (e) {
        console.log(e);
        return {
            status: false,
            message: 'Error connecting to server',
        };
    }
}

/**
 *
 * @param {String} email
 * @param {String} token
 * @return {Object}
 */
export async function updateEmail(email, token) {
    const bearer = 'Bearer ' + token;
    try {
        const res = await fetch(baseUrl + '/app/updateemail', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
            },
            body: new URLSearchParams({
                email: email,
            }),
        });
        const resObj = await res.json();
        return resObj;
    } catch (e) {
        console.log(e);
        return {
            status: false,
            message: 'Error connecting to server',
        };
    }
}

=======
// import fetch from 'node-fetch';

import {rewriteDefault} from 'vue/compiler-sfc';

const baseUrl = 'http://geneplayer.io/api';

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
        invitor: resObj.name,
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

/**
 *
 * @param {String} username
 * @return {Object}
 */
export async function userexists(username) {
  try {
    const res = await fetch(baseUrl + '/userexists?' + new URLSearchParams({
      username: username,
    }));
    const resObj = await res.json();
    if (resObj.exists) {
      return {
        status: true,
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
 * @param {String} username
 * @return {Object}
 */
export async function emailVerified(username) {
  try {
    const res = await fetch(baseUrl + '/emailverified?' + new URLSearchParams({
      username: username,
    }));

    const resObj = await res.json();

    if (resObj.verified) {
      return {
        status: true,
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
 * @param {String} phone
 * @return {Object}
 */
export async function sendSmsVerification(phone) {
  try {
    const res = await fetch(baseUrl + '/sendverificationcode', {
      method: 'POST',
      body: new URLSearchParams({
        phone: phone,
      }),
    });

    const resObj = await res.json();
    console.log(resObj);
    if (resObj.status === 'success') {
      return {
        status: true,
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
 * @param {String} phone
 * @param {String} code
 * @return {Object}
 */
export async function verifySms(phone, code) {
  try {
    const res = await fetch(baseUrl + '/checkverificationcode', {
      method: 'POST',
      body: new URLSearchParams({
        phone: phone,
        code: code,
      }),
    });

    const resObj = await res.json();
    if (resObj.status === 'success') {
      return {
        status: true,
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
 * @param {String} phone
 * @param {String} token
 */
export async function updatePhone(phone, token) {
  const bearer = 'Bearer ' + token;
  try {
    const res = await fetch(baseUrl + '/app/updatephone', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json',
      },
      body: new URLSearchParams({
        phone: phone,
      }),
    });
    const resObj = await res.json();
    return resObj;
  } catch (e) {
    console.log(e);
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}

/**
 *
 * @param {String} username
 * @param {String} token
 * @return {Object}
 */
export async function updateUsername(username, token) {
  const bearer = 'Bearer ' + token;
  try {
    const res = await fetch(baseUrl + '/app/updateusername', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json',
      },
      body: new URLSearchParams({
        username: username,
      }),
    });
    const resObj = await res.json();
    return resObj;
  } catch (e) {
    console.log(e);
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}

/**
 *
 * @param {String} email
 * @param {String} token
 * @return {Object}
 */
export async function updateEmail(email, token) {
  const bearer = 'Bearer ' + token;
  try {
    const res = await fetch(baseUrl + '/app/updateemail', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json',
      },
      body: new URLSearchParams({
        email: email,
      }),
    });
    const resObj = await res.json();
    return resObj;
  } catch (e) {
    console.log(e);
    return {
      status: false,
      message: 'Error connecting to server',
    };
  }
}

>>>>>>> a788dbcc07581f81353ba36d100632605b586564
