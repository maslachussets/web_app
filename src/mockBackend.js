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
        balance: "113337488732231", // Измените это значение для теста
      });
    }, 500); // Имитация задержки ответа от сервера
  });
};

export const fetchUserAchievement = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        achievementName: "Newbie", // Измените это значение для теста
      });
    }, 500); // Имитация задержки ответа от сервера
  });
};

export const fetchLeaderboard = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          place: 1,
          username: "@burguldy",
          balance: 1337488,
          achievement: "MrBeast",
        },
        {
          place: 2,
          username: "@example1",
          balance: 1200000,
          achievement: "Whale",
        },
        {
          place: 3,
          username: "@example2",
          balance: 1100000,
          achievement: "Legend",
        },
        // Добавьте больше данных для тестирования
      ]);
    }, 500); // Имитация задержки ответа от сервера
  });
};
