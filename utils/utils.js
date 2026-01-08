import { nameList } from "./names.js";

export function generate() {
  const finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName
}

export function random(lenght) {
    return (Math.random() * (10 ** lenght)).toFixed(0)
}
