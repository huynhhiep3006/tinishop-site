import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

// Tạo storage cho sessionStorage
const createSessionStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(sessionStorage.getItem(_key));
    },
    setItem(_key: any, value: any) {
      sessionStorage.setItem(_key, value);
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      sessionStorage.removeItem(_key);
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createSessionStorage() // Dùng sessionStorage thay vì localStorage
    : createNoopStorage();

export default storage;
