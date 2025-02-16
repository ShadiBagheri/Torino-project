const isValidateMobile = (val) => {
    let mobile = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
    return mobile;
};

const isValidateEmail = (val) => {
    let emailPattern = new RegExp("/^[^\s@]+@[^\s@]+\.[^\s@]+$/");
    return emailPattern.test(val);
};

export { isValidateMobile, isValidateEmail };
