function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Username hoặc password rỗng
    if (!username || !password) {
        return false;
    }

    // Đăng nhập đúng
    if (username === "admin" && password === "123") {
        return true;
    }

    // Sai username hoặc password
    return false;
}

module.exports = { login };
