async function requestApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = Math.random();
      if (r <= 0.6) {
        resolve({
          code: 0,
          message: "ok",
        });
      } else if (r <= 0.8) {
        reject({
          code: -1,
          message: "余额不足",
        });
      } else {
        reject({
          code: -2,
          message: "累积转账金额超过限制",
        });
      }
    }, Math.random() * 3 * 1000); // 在0~3秒内完成
  });
}

export { requestApi };
