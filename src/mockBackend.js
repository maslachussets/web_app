export const fetchUserState = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        tapValue: 2, // Измените это значение для теста
        remainingEnergy: 1024, // Измените это значение для теста (3 блока по 256)
      });
    }, 500); // Имитация задержки ответа от сервера
  });
};

export const sendTapCount = (tapCount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sent tapCount: ${tapCount} to backend`);
      resolve();
    }, 500); // Имитация задержки ответа от сервера
  });
};

export const fetchUserBalance = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: "1000000", // Измените это значение для теста
      });
    }, 500); // Имитация задержки ответа от сервера
  });
};
