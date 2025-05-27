import { ref, computed, watch } from "vue";
function useSwiper(swiperContainerRef, options) {
  const swiper = ref();
  const isBeginning = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.isBeginning) ?? true;
  });
  const isEnd = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.isEnd) ?? false;
  });
  const activeIndex = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.activeIndex) ?? 0;
  });
  const realIndex = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.realIndex) ?? 0;
  });
  const slides = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.slides) ?? [];
  });
  const slidesPerView = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.slidesPerViewDynamic()) ?? 0;
  });
  const progress = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.progress) ?? 0;
  });
  const getNumberOfSlides = computed(() => {
    var _a;
    return ((_a = swiper.value) == null ? void 0 : _a.slides.length) ?? 0;
  });
  const next = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideNext();
    else swiper.value.slideNext(...params);
  };
  const to = (...params) => {
    if (!swiper.value)
      return;
    swiper.value.slideTo(...params);
  };
  const reset = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideReset();
    else swiper.value.slideReset(...params);
  };
  const prev = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slidePrev();
    else swiper.value.slidePrev(...params);
  };
  const checkSwiperRef = () => {
    var _a;
    const isSwiperContainer = ((_a = swiperContainerRef.value) == null ? void 0 : _a.nodeName) === "SWIPER-CONTAINER";
    if (!isSwiperContainer && swiper.value !== null && !options) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        "font-weight: bold;"
      );
    }
  };
  watch(swiper, () => checkSwiperRef());
  return {
    // Instance
    instance: swiper,
    // Reactive state
    isBeginning,
    isEnd,
    activeIndex,
    realIndex,
    slides,
    slidesPerView,
    progress,
    getNumberOfSlides,
    // Navigation methods
    next,
    prev,
    to,
    reset
  };
}
export {
  useSwiper as u
};
//# sourceMappingURL=useSwiper.client-B39wiisS.js.map
