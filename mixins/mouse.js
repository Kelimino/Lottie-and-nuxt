export const cursor = {
  mounted() {
    let mouseCursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", cursor);
    window.onload = function() {
      mouseCursor.classList.remove("cursorPage");
    };

    function cursor(e) {
      mouseCursor.style.top = e.clientY + "px";
      mouseCursor.style.left = e.clientX + "px";
    }

    //EACH LINK
    const link = document.querySelectorAll(".link");

    Array.from(link).forEach(linkElement => {
      linkElement.addEventListener("mouseover", () => {
        mouseCursor.style.transform = "scale(2)";
      });
      linkElement.addEventListener("mouseleave", () => {
        mouseCursor.style.transform = "scale(1)";
      });
    });
    //PAGE LINK FOOTER
    // const pageLink = document.querySelectorAll(".pageLink");
    // Array.from(pageLink).forEach(linkElement => {
    //   linkElement.addEventListener("mouseover", () => {
    //     if (mouseCursor.classList.contains("cursorPage")) {
    //       mouseCursor.classList.remove("cursorPage");
    //     } else {
    //       mouseCursor.classList.add("cursorPage");
    //     }
    //   });

    //   linkElement.addEventListener("mouseleave", () => {
    //     mouseCursor.classList.remove("cursorPage");
    //   });
    // });

    //SLIDER PROJECT
    // let projetWrapper = document.querySelector(".projet-wrapper");

    // projetWrapper.addEventListener("mouseover", () => {
    //   mouseCursor.classList.add("cursorSlide");
    // });
    // projetWrapper.addEventListener("mouseleave", () => {
    //   mouseCursor.classList.remove("cursorSlide");
    // });
  }
};
