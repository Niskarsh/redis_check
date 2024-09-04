const { ElastiCacheClient, ListTagsForResourceCommand } = require("@aws-sdk/client-elasticache");

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

// a client can be shared by different commands.
const client = new ElastiCacheClient({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   credentials: {
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   },
});

const params = {
    ResourceName: 'arn:aws:elasticache:ap-south-1:637423643468:replicationgroup:posk-fe-dev'
};
const command = new ListTagsForResourceCommand(params);

async function main() {
    try {
        const data = await client.send(command);
        console.log(data)
        // process data.
      } catch (error) {
        // error handling.
        console.error(error);
      } finally {
        // finally.
      }
}
main()