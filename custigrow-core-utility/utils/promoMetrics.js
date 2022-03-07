const client = require("prom-client");

const register = new client.Registry();

register.setDefaultLabels({
    app: `${process.env.APP_NAME}`
});

client.collectDefaultMetrics({ register });

exports.promoMetrics = async () => {
    return register.metrics();

}