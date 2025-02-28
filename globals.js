window.signup = (username, phone, password) => {
  return new Promise((resolve, reject) => {
    if (username && phone && password) {
      resolve({ message: "Sign up successful!" });
    } else {
      reject({ message: "Sign up failed!" });
    }
  });
};

window.login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve({ message: "Login successful!" });
    } else {
      reject({ message: "Login failed!" });
    }
  });
};

window.logout = () => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem("isLoggedIn")) {
      resolve({ message: "Logout successful!" });
    } else {
      reject({ message: "Already logged out!" });
    }
  });
};

window.otpverify = (passcode) => {
  return new Promise((resolve, reject) => {
    if (passcode === "123456") {
      resolve({ message: "OTP verification successful!" });
    } else {
      reject({ message: "OTP verification failed!" });
    }
  });
};
