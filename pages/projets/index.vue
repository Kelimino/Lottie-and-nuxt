<template>
  <div id="projets relative ">
    <div
      class="slideNav absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center opacity-50"
    >
      <svg
        id="Layer_1"
        enable-background="new 0 0 24 24"
        height="512"
        viewBox="0 0 24 24"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current text-main text-sm h-6 w-6 mr-3"
      >
        <g>
          <path
            d="m7.5 12c-.276 0-.5-.224-.5-.5v-5c0-1.103.897-2 2-2s2 .897 2 2v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-.552-.449-1-1-1s-1 .448-1 1v5c0 .276-.224.5-.5.5z"
          />
        </g>
        <g>
          <path
            d="m13.5 11c-.276 0-.5-.224-.5-.5v-4.5c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.103.897-2 2-2s2 .897 2 2v4.5c0 .276-.224.5-.5.5z"
          />
        </g>
        <g>
          <path
            d="m16.5 11c-.276 0-.5-.224-.5-.5v-3.5c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.103.897-2 2-2s2 .897 2 2v3.5c0 .276-.224.5-.5.5z"
          />
        </g>
        <g>
          <path
            d="m15.5 21h-5.787c-2.703 0-6.713-4.004-6.713-9.536 0-1.91 1.573-3.464 3.506-3.464h.994c.276 0 .5.224.5.5s-.224.5-.5.5h-.994c-1.381 0-2.506 1.105-2.506 2.464 0 5.212 3.752 8.536 5.713 8.536h5.787c1.93 0 3.5-1.57 3.5-3.5v-8.5c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.103.897-2 2-2s2 .897 2 2v8.5c0 2.481-2.019 4.5-4.5 4.5z"
          />
        </g>
      </svg>
      <p class="barControl text-main font-text">Hold &amp; drag</p>
    </div>
    <slider />
  </div>
</template>

<script>
import slider from "/components/slider";
export default {
  name: "Projets",
  components: {
    slider
  },
  transition: {
    mode: "out-in",
    css: false,
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transition = "all 1s linear";
    },
    enter(el, done) {
      el.style.opacity = 1;
      done();
    },
    beforeLeave() {},
    leave(el, done) {
      done();
    }
  },
  head() {
    return {
      titleTemplate: "%s - Projets",
      meta: [
        {
          name: "Projets",
          content: "UX Design, Webdesign, Graphisme, logo, Théâtre, Peinture "
        }
      ]
    };
  }
};
</script>
