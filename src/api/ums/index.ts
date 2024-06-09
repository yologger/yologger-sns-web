import axios from "axios";

const ums = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/ums/v1`,
});

export * from "./join";

export default ums;
