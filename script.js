document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على "Submit"

    const usernameInput = document.querySelector("#exampleInputEmail1").value;
    const passwordInput = document.querySelector("#exampleInputPassword1").value;

    const correctPassword = "123"; // كلمة المرور الصحيحة
    let attempts = 0; // عداد المحاولات

    // وظيفة للتحقق من كلمة المرور
    function checkPassword() {
        if (passwordInput === correctPassword) {
            alert(`Welcome, ${usernameInput}!`);
        } else {
            attempts++;
            if (attempts < 5) {
                alert(`Incorrect password. You have ${5 - attempts} attempts left.`);
            } else {
                alert("You have reached the maximum number of attempts. Please try again later.");
            }
        }
    }

    checkPassword();
});
