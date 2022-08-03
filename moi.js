const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1" });
// GET ALL
const params = {
  TableName: "http-crud-tutorial-items",
};
async function listItems() {
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (err) {
    return err;
  }
}
handler = async (event, context) => {
  console.log("moi");
  try {
    const data = await listItems();
    console.log(JSON.stringify(data));
    return { body: JSON.stringify(data) };
  } catch (err) {
    return { error: err };
  }
};
handler();
