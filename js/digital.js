/*querySelector() chọn phần tử HTML đầu tiên được tìm thấy trên trang web có thẻ h1 và lưu nó vào biến title. */
let title = document.querySelector("h1");

if (document.location.href.includes("project-pets")) {
  title.innerHTML = "Project charter - PETS WEB";
  all.forEach((item) => {
    item.style.display = "flex";
  });
  /*nếu địa chỉ URL của trang web bao gồm chuỗi "project-pets", thay đổi nội dung của thẻ h1 thành "Project charter - PETS WEB" và sau đó sử dụng phương thức forEach() để thiết lập thuộc tính display thành "flex". */
} else if (document.location.href.includes("project-cv")) {
  title.innerHTML = "Project Charter - CV WEB";
  all.forEach((item) => {
    item.style.display = "flex";
  });
 
} else if (document.location.href.includes("project-news")) {
  title.innerHTML = "Project Charter - NEWS WEB";
  all.forEach((item) => {
    item.style.display = "flex";
  });
 
}
