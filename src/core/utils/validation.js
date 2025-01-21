const isValidateMobile = (val) => {
    let mobile = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
    return mobile;
};

export { isValidateMobile };
