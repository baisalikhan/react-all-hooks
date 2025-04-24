export const loginUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "pass") {
        resolve({
          success: true,
          data: {
            username,
            email: "user@example.com",
            token: "awdafsfrgdbvbxcvxsdaefsrg,tertert3424refsdf",
          },
        });
      } else {
        reject({ success: false, error: "Invalid username or password" });
      }
    }, 1000);
  });
};
