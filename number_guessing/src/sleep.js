const sleep = (ms = 2000) => new Promise((res, rej) => setTimeout(res, ms));
export default sleep;
