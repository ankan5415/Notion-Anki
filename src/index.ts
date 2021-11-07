require("dotenv").config();
import listAllUsers from "./notion";

if (!process.env.NOTION_TOKEN) {
  console.log("No Notion credentials found");
}

listAllUsers();
