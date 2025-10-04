// Đảm bảo chỉ chạy khi HTML đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần thao tác
  const btnLogin = document.querySelector(".hai button");
  const btnShare = document.querySelector(".tren .nut button:first-child");
  const btnCollection = document.querySelector(".tren .nut button:last-child");
  const btnStart = document.querySelector(".duoi button");

  const sectionCollection = document.querySelector(".giua2");

  // ====== 1. Nút Đăng nhập ======
  btnLogin.addEventListener("click", function () {
    alert("Tính năng đăng nhập sẽ sớm được cập nhật!");
  });

  // ====== 2. Nút Chia sẻ kỷ niệm ======
  btnShare.addEventListener("click", function () {
    alert("Hãy chọn hình ảnh hoặc video bạn muốn chia sẻ!");
  });

  // ====== 3. Nút Xem bộ sưu tập ======
  btnCollection.addEventListener("click", function () {
    sectionCollection.scrollIntoView({ behavior: "smooth" });
  });

  // ====== 4. Nút Bắt đầu miễn phí ======
  btnStart.addEventListener("click", function () {
    alert("Chào mừng bạn đến với Memory Story 💖");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ====== 5. Hiệu ứng hover cho các icon SVG ======
  const icons = document.querySelectorAll(".cuoi svg");
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.stroke = "crimson";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.stroke = "currentColor";
    });
  });
});
