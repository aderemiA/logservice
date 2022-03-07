const servicesEnum = Object.freeze({
    orgServiceName: `CUSTIGROW_USER_ORGSERVICE`,
    commServiceName: `CUSTIGROW_USER_COMMSERVICE`,
    authServiceName: `CUSTIGROW_USER_AUTHSERVICE`,
    inventoryServiceName: `CUSTIGROW_USER_INVENTORYSERVICE`,
    orderServiceName: `CUSTIGROW_USER_ORDERSERVICE`,
    promoServiceName: `CUSTIGROW_USER_PROMOSERVICE`,
    supplierServiceName: `CUSTIGROW_USER_SUPPLIERSERVICE`,
    
});

const redisEnum = Object.freeze({
    saveToRedis: 'SAVE_TO_REDIS'
});


module.exports = { 
    servicesEnum,
    redisEnum
};