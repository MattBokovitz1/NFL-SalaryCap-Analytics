// lib/fetchCapData.js
import fs from "fs/promises";
import path from "path";

export async function getCapData() {
  const filePath = path.join(process.cwd(), "data", "cap-data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}
