import { message } from 'antd';

export const success = (msg) => {
  message.success(msg);
};

export const errorMsg = (msg) => {
  message.error(msg);
};

export const warning = (msg) => {
  message.warning(msg);
};