const categorys = document.querySelectorAll(".category");

categorys.forEach((category) => {
    category.addEventListener("click", () => {
        categorys.forEach((item) => {
            item.classList.remove("category-active");
        });
        category.classList.toggle("category-active");
    });
});

const hearts = document.querySelectorAll(".love");
hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        if (heart.classList.contains("bi-heart")) {
            heart.classList.remove("bi-heart");
            heart.classList.add("bi-heart-fill");
        } else {
            heart.classList.remove("bi-heart-fill");
            heart.classList.add("bi-heart");
        };

    });
});

const emailBtn = document.querySelector(".email-btn");
emailBtn.addEventListener("click", () => {
    const emailInp = document.querySelector(".email-inp");
    alert(`Email Verification has been send to 👉🏼 ${emailInp.value}\nThank for your kindness 🙏🏼.`);
    emailInp.value = "";
});