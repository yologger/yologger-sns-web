import ums from ".";

type Payload = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

type Response = {
  data: {
    uid: number;
  };
};

const joinUrl = () => {
  return `/join`;
};

export const join = (payload: Payload, token: string) => {
  return ums.post<Response>(joinUrl(), payload, {
    headers: {
      X_YOLOGGER_SNS_AUTH_TOKEN: token,
    },
  });
};
