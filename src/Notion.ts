const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const listAllUsers = async () => {
  const response = await notion.users.list();
  console.log(response);
};

export default listAllUsers;
