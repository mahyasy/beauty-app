const validform = (form, type) => {
  const err = {};
  const phoneRegx = /^(\+98|0)?9\d{9}$/g;

  if (form.name === "") {
    err.name = "لطفا نام کاربری را وارد کنید ";
  } else if (form.name.length <= 2) {
    err.name = "نام کاربری را کامل کنید";
  } else {
    delete err.name;
  }

  if (form.password === "") {
    err.password = "رمز عبور ایجادکنید ";
  } else if (form.password < 6) {
    err.password = "پسورد باید بیشتر از 6 کارکتر باشد";
  } else {
    delete err.password;
  }

  if (form.mobile === "") {
    err.mobile = "شماره تماس را وارد کنید";
  } else if (!phoneRegx.test(form.mobile) || form.mobile < 11) {
    err.mobile = "شماره معتبر وارد کنید";
  } else {
    delete err.mobile;
  }

  if (type === "login") {
    if (form.password === "") {
      err.password = "رمز عبور وارد کنید ";
    } else if (form.password < 6) {
      err.password = "پسورد اشتباه است";
    } else {
      delete err.password;
    }
  }

  return err;
};
export { validform };
