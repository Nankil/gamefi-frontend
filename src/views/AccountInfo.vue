<script>
export default {
  data() {
    return {
      promote_code: 'code',
      wallet_addr: 'wallet',
      id: 'id',
      privilege: 'privilege',
      username: 'username',
      region: 'region',
      phone: 'phone',
      email: 'email',
      registered_at: 'registered_at',
    };
  },
};
</script>

<template>
  <div class="border-2 p-5">
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">Promote Code</div>
      <div class="border-2 p-2 lg:w-1/3">{{ promote_code }}</div>
      <button class="m-2 text-teal-200">[Copy]</button>
    </div>
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">Wallet</div>
      <div class="border-2 p-2 lg:w-1/3">{{ wallet_addr }}</div>
    </div>
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">ID</div>
      <div class="border-2 p-2 lg:w-1/3">{{ id }}</div>
      <div class="lg:w-1/3 inline-block
      justify-center p-2">{{ registered_at }}</div>
    </div>
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">Privilege</div>
      <div class="border-2 p-2 lg:w-1/3">{{ privilege }}</div>
      <button class="p-2">check</button>
    </div>
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">Username</div>
      <div class="border-2 p-2 lg:w-1/3">{{ username }}</div>
      <button class="ml-2 p-2 bg-orange-100">Alter</button>
    </div>
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">Phone</div>
      <div class="border-2 p-2 lg:w-1/3">{{ phone }}</div>
      <button class="ml-2 p-2 bg-orange-100">Alter</button>
    </div>
    <div class="flex flex-row p-2">
      <div class="lg:w-1/6 inline-block align-middle m-2">Email</div>
      <div class="border-2 p-2 lg:w-1/3">{{ email }}</div>
      <button class="ml-2 p-2 bg-orange-100">Alter</button>
    </div>
  </div>
</template>
