"use strict";
/*Chức năng ẩn thông tin cá nhân */
function handleSubmit() {
  /*lấy giá trị của trường email từ biểu mẫu bằng cách sử dụng phương thức getElementById() và lưu giữ giá trị đó vào biến emailValue. Phương thức toLocaleLowerCase() được sử dụng để chuyển đổi chuỗi email sang chữ thường. */
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  /*Phần tử này được sử dụng để hiển thị thông báo lỗi nếu người dùng nhập sai định dạng email. */
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /*phương thức match() của chuỗi để kiểm tra xem giá trị emailValue có khớp với biểu thức regex hay không. Kết quả được lưu trữ trong biến checkEmail. */
  const checkEmail = emailValue.match(regex);
  /* HTML có lớp là "section-content" bên trong phần tử có ID là "personal-info" và lưu giữ nó vào biến sectionContent. */
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  console.log("check section", sectionContent);

  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
/* Chức năng ẩn / hiện thông tin nghề nghiệp */

/*Hàm "handleOnMouse" được gọi khi người dùng di chuột qua một phần tử (element) trên trang web.  */
function handleOnMouse(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}
/*Hàm "handleOnMouseOut" được gọi khi người dùng rời khỏi một phần tử trên trang web.  */
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}
/*hàm này được dùng để xử lý sự kiện khi người dùng nhấp vào một nút "View more" trên trang web. */
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore =
    parentElement.querySelector(
      ".view-more"
    ); /*querySelector phần tử cha sẽ tìm phần tử con có class là "view-more". */

  if (viewMore.innerHTML == "View more") {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "Less more";
  } else {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View more";
    /*Nếu nội dung của phần tử "viewMore" là "Less more", "querySelectorAll" trên phần tử cha sẽ để tìm tất cả các phần tử con có class là "section-content", và đặt thuộc tính "display" của chúng thành "none" để ẩn chúng đi trên trang web. Sau đó, đặt nội dung của phần tử "viewMore" thành "View more". */
  }
}
