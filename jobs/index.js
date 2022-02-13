const cron = require("node-cron");
const { receiveMessage } = require("../custigrow-core-bus/index");

module.exports= () => {
  cron.schedule("*/10 * * * *", () => {
    const received = await receiveMessage(process.env.AWS_SQS_CU_AUTHSERVICE);
    if (!received) return;
    if (!received.Messages[0].Body) return;
      const data = JSON.parse(received.Messages[0].Body);
      console.log(data);    
  });
};
