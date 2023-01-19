const btnShareFb = document.querySelector("#facebook");
const pageUrl = document.querySelector("#url").href;

btnShareFb.addEventListener("click", () => {
  console.log(pageUrl);
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
});

function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("0803d9053526c2cce3cb351605e03f1c");

  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#kakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "마음푸쉬", // 보여질 제목
      description: "당신의 마음을 전달해주세요", // 보여질 설명
      imageUrl: `/static/img/favicon.png`, // 콘텐츠 URL
      link: {
        mobileWebUrl: pageUrl,
        webUrl: pageUrl,
      },
    },
  });
}

function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = pageUrl;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  Swal.fire(
    "링크가 복사되었습니다!",
    "친구들에게 공유하여 마음을 받아보세요",
    "success"
  );
}
