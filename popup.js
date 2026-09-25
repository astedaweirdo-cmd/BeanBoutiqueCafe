window.addEventListener("load", function () {
    if (!localStorage.getItem("beanBoutiquePopupShown")) {
        document.getElementById("discountModal").style.display = "flex";
    }
});


function closeModal() {
    document.getElementById("discountModal").style.display = "none";
    localStorage.setItem("beanBoutiquePopupShown", "true");
}


function submitEmail() {
    const email = document.getElementById("popupEmail").value;

    if (email.trim() === "") {
        alert("Please enter your email address.");
        return;
    }

    alert("Thank you! Your 10% discount code is BEAN10.");
    closeModal();
}
