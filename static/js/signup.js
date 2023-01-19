const idCheckValue = document.forms["signupForm"].userId;

idCheckValue.addEventListener("keyup", () => {
  let id = document.forms["signupForm"].userId.value;
  if (id == "") {
    CheckAlert.textContent = "아이디를 입력해주세요";
    signupBtn.disabled = false;
  }
  axios({
    method: "post",
    url: "/signup/idCheck",
    data: {
      userId: id,
    },
  }).then((result) => {
    let idCheck = result.data.idCheck;
    let CheckAlert = document.querySelector(".idCheckAlert");
    let signupBtn = document.querySelector(".signupBtn");
    if (idCheck === "성공") {
      CheckAlert.textContent = "사용가능한 아이디 입니다";
      signupBtn.disabled = false;
    } else {
      CheckAlert.textContent = "사용가능한 아이디가 아닙니다";
      signupBtn.disabled = true;
    }
  });
});
