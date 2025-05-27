import { _ as __nuxt_component_0$1 } from "./nuxt-link-DW05dJug.js";
import __nuxt_component_1 from "./index-w3N2GCty.js";
import { a as __nuxt_component_0, u as useHead, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useSwiper } from "./useSwiper.client-B39wiisS.js";
import "swiper/modules";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _imports_0$1 } from "./virtual_public-M4F6_fSz.js";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText.js";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin.js";
import "D:/techbank-v2/node_modules/hookable/dist/index.mjs";
import "D:/techbank-v2/node_modules/klona/dist/index.mjs";
import "D:/techbank-v2/node_modules/defu/dist/defu.mjs";
import "D:/techbank-v2/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "D:/techbank-v2/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "D:/techbank-v2/node_modules/unctx/dist/index.mjs";
import "D:/techbank-v2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/techbank-v2/node_modules/radix3/dist/index.mjs";
import "D:/techbank-v2/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ConnectedBrandsSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const containerBrands = ref(null);
    useSwiper(containerBrands, {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto relative py-8" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="flex items-center absolute top-1/2 -translate-y-1/2 w-full justify-between z-10 gap-4 mt-8"><button class="px-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pixelarticons:chevron-left",
        class: "text-white text-5xl"
      }, null, _parent));
      _push(`</button><button class="px-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pixelarticons:chevron-right",
        class: "text-white text-5xl"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConnectedBrandsSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TechnologySwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const containerTop = ref(null);
    const containerBottom = ref(null);
    const swiperOptions = {
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false
      }
    };
    useSwiper(containerTop, {
      autoplay: {
        ...swiperOptions.autoplay
      }
    });
    useSwiper(containerBottom, swiperOptions);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="md:mt-2 mt-2">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechnologySwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/hero-bg.svg");
const _imports_1 = publicAssetsURL("/images/mob-hero-bg.webp");
const _imports_2 = publicAssetsURL("/images/comp.gif");
const _imports_3 = publicAssetsURL("/images/about-bg.avifs");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Engineering The Future"
    });
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref([]);
    const products = ref([
      {
        id: 1,
        name: "DWALLET",
        description: "TechBank is a blockchain product company creating",
        image: "/images/dwallethome.webp",
        bgImage: "/images/product-card.webp",
        link: "/products/dwallet"
      },
      {
        id: 2,
        name: "DBANK",
        description: "TechBank is a blockchain product company creating",
        image: "/images/dbankhome.webp",
        bgImage: "/images/product-card.webp",
        link: "/products/dbank"
      }
    ]);
    const brands = ref([
      {
        name: "BLUE TIGERS",
        description: "Enhance customer engagement with personalized, AI-driven interactions.",
        image: "/images/bluetigers.webp",
        socials: [
          { platform: "LinkedIn", icon: "ph:linkedin-logo", url: "https://linkedin.com/company/blue-tigers" },
          { platform: "Instagram", icon: "ph:instagram-logo", url: "https://instagram.com/blue_tigers" },
          { platform: "Twitter", icon: "hugeicons:new-twitter", url: "https://twitter.com/blue_tigers" },
          { platform: "YouTube", icon: "teenyicons:youtube-outline", url: "https://youtube.com/@blue_tigers" }
        ]
      },
      {
        name: "KOCHI BLUE TIGERS",
        description: "Enhance customer engagement with personalized, AI-driven interactions.",
        image: "/images/kochibluetigers.webp",
        socials: [
          { platform: "LinkedIn", icon: "ph:linkedin-logo", url: "https://linkedin.com/company/kochi-blue-tigers" },
          { platform: "Instagram", icon: "ph:instagram-logo", url: "https://instagram.com/kochi_blue_tigers" },
          { platform: "Twitter", icon: "hugeicons:new-twitter", url: "https://twitter.com/kochi_blue_tigers" },
          { platform: "YouTube", icon: "teenyicons:youtube-outline", url: "https://youtube.com/@kochi_blue_tigers" }
        ]
      },
      {
        name: "BLUE TIGERS LONDON",
        description: "Enhance customer engagement with personalized, AI-driven interactions.",
        image: "/images/bluetigerslondon.webp",
        socials: [
          { platform: "LinkedIn", icon: "ph:linkedin-logo", url: "https://linkedin.com/company/blue-tigers-london" },
          { platform: "Instagram", icon: "ph:instagram-logo", url: "https://instagram.com/blue_tigers_london" },
          { platform: "Twitter", icon: "hugeicons:new-twitter", url: "https://twitter.com/blue_tigers_london" },
          { platform: "YouTube", icon: "teenyicons:youtube-outline", url: "https://youtube.com/@blue_tigers_london" }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      const _component_ConnectedBrandsSwiper = _sfc_main$2;
      const _component_TechnologySwiper = _sfc_main$1;
      _push(`<!--[--><div class="max-w-7xl mx-auto px-4 pb-0 md:pb-0 sm:px-6 lg:px-8" data-v-f43dd6a7><div class="relative overflow-hidden" data-v-f43dd6a7><img${ssrRenderAttr("src", _imports_0)} alt="TechBank Hero Background - Modern Digital Finance Platform" width="100%" height="100%" class="hidden md:block w-full h-auto object-cover rounded-lg shadow-lg" loading="eager" data-v-f43dd6a7><img${ssrRenderAttr("src", _imports_1)} alt="TechBank Mobile Hero Background - Digital Finance Solutions" width="100%" height="100%" class="block md:hidden w-full h-auto object-cover rounded-lg shadow-lg" loading="eager" data-v-f43dd6a7><div class="absolute bottom-0 w-full h-full flex flex-col items-center justify-end rounded-lg py-4 md:py-10" data-v-f43dd6a7><div class="absolute w-full h-full flex items-center justify-center" data-v-f43dd6a7><img${ssrRenderAttr("src", _imports_2)} alt="TechBank Digital Finance Platform Animation" class="w-[200px] sm:w-[180px] md:w-[300px] h-auto object-cover rotate-[20deg] transition-all duration-300" data-v-f43dd6a7></div><h3 class="text-2xl sm:text-3xl md:text-[94px] text-[#000000] font-bold text-center mb-1 md:mb-4 relative font-nyx tracking-wider" data-v-f43dd6a7> Engineering </h3><h3 class="text-2xl sm:text-3xl md:text-[94px] md:mt-8 -mt-1 text-[#000000] font-bold text-center mb-2 md:mb-4 relative font-nyx tracking-wider" data-v-f43dd6a7> The Future </h3><div class="flex flex-col md:flex-row text-center md:text-left md:mt-4 mt-0 relative items-center md:gap-8 gap-3 max-w-xl px-4" data-v-f43dd6a7><span class="hero-subtitle text-xs sm:text-sm md:text-[16px] text-[#000000] font-ninetea" data-v-f43dd6a7>Empowering Businesses, Enabling Growth TechBank&#39;s Products for Success</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/products",
        class: "bg-button-gradient font-ninetea text-white pl-3 md:pl-6 pr-2 py-2 md:py-2 text-xs md:text-base whitespace-nowrap flex items-center gap-1 md:gap-2 rounded-full hover:bg-gray-700 transition-all duration-300 active:scale-95 touch-manipulation"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Products <span class="bg-white h-5 w-5 md:h-8 md:w-8 flex items-center justify-center ml-0 rounded-full" data-v-f43dd6a7${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mynaui:arrow-long-up-right",
              class: "text-[#8501A6] font-bold text-xs md:text-base"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(" View Products "),
              createVNode("span", { class: "bg-white h-5 w-5 md:h-8 md:w-8 flex items-center justify-center ml-0 rounded-full" }, [
                createVNode(_component_Icon, {
                  name: "mynaui:arrow-long-up-right",
                  class: "text-[#8501A6] font-bold text-xs md:text-base"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center justify-center py-2" data-v-f43dd6a7><span class="text-white text-xs md:text-sm font-ninetea" data-v-f43dd6a7>+ SCROLL TO EXPOLORE +</span></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center grid-cols-1 gap-8 md:gap-20 lg:px-8 py-16 md:py-24 relative overflow-hidden" data-v-f43dd6a7><div class="order-2 md:order-1" data-v-f43dd6a7><img${ssrRenderAttr("src", _imports_3)} alt="TechBank Blockchain Technology Demonstration" class="max-w-[300px] w-full sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-lg mx-auto" loading="lazy" data-v-f43dd6a7></div><div class="flex text-block flex-col md:items-start items-center order-1 md:order-2" data-v-f43dd6a7><h2 data-final-text="About" class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header font-bold mb-4 md:mb-6 font-nyx tracking-wider" data-v-f43dd6a7> About </h2><p class="about-description text-xs sm:text-sm md:text-[16px] text-[#8D8D8D] font-ninetea text-center md:text-start max-w-2xl mb-6 md:mb-10 text-block" data-v-f43dd6a7> TechBank is a blockchain product company creating decentralized tools like TechBank, Dbank, and Dwallet to simplify digital finance. We empower users with secure, transparent, and user-friendly solutions for managing assets in the Web3 world. </p><div class="flex divide-x divide-[#C0C0C03D] w-full justify-center md:justify-start" data-v-f43dd6a7><div class="px-4 md:pr-0" data-v-f43dd6a7><h3 class="font-nyx text-2xl sm:text-2xl md:text-[28px] mb-1 md:mb-2" data-v-f43dd6a7>4</h3><p class="font-ninetea text-xs sm:text-sm md:text-base text-[#C0C0C0]" data-v-f43dd6a7>Products</p></div><div class="px-4 md:px-8" data-v-f43dd6a7><h3 class="font-nyx text-2xl sm:text-2xl md:text-[28px] mb-1 md:mb-2" data-v-f43dd6a7>2000+</h3><p class="font-ninetea text-xs sm:text-sm md:text-base text-[#C0C0C0]" data-v-f43dd6a7>Active Users</p></div><div class="px-4 md:px-6 md:pl-8" data-v-f43dd6a7><h3 class="font-nyx text-2xl sm:text-2xl md:text-[28px] mb-1 md:mb-2" data-v-f43dd6a7>1M+</h3><p class="font-ninetea text-xs sm:text-sm md:text-base text-[#C0C0C0]" data-v-f43dd6a7>Downloads</p></div></div></div></div><div class="relative" data-v-f43dd6a7><div class="bg-[#010101]" data-v-f43dd6a7><div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0" data-v-f43dd6a7><img${ssrRenderAttr("src", _imports_0$1)} alt="TechBank Products Section Background Pattern" width="100%" height="100%" class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" data-v-f43dd6a7></div></div><div class="absolute w-full bottom-0 blur-[60px] -rotate-[10deg]" data-v-f43dd6a7><div class="flex items-center justify-center bottom-0 h-10 bg-gradient-to-b from-[#3A0696] to-[#C740FF]" data-v-f43dd6a7></div></div><div class="max-w-7xl mx-auto px-4 relative sm:px-6 lg:px-8 py-16 md:py-24" data-v-f43dd6a7><div class="text-center" data-v-f43dd6a7><p class="text-xs sm:text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl mb-2 md:mb-3" data-v-f43dd6a7>Innovative </p><h2 data-final-text="Products" class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header mx-auto mb-4 md:mb-6 font-nyx tracking-wider" data-v-f43dd6a7> Products </h2><p class="product-description text-xs sm:text-sm md:text-[16px] text-[#8D8D8D] font-ninetea mx-auto max-w-2xl mb-8 md:mb-12 px-4" data-v-f43dd6a7> Explore our innovative products designed to simplify your digital finance experience. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-v-f43dd6a7><!--[-->`);
      ssrRenderList(products.value, (product) => {
        _push(`<div class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] touch-manipulation" data-v-f43dd6a7><img${ssrRenderAttr("src", product.bgImage)}${ssrRenderAttr("alt", `${product.name} - Background Pattern`)} width="100%" height="100%" class="w-full h-auto object-cover rounded-lg shadow-lg" loading="lazy" data-v-f43dd6a7><div class="absolute h-full inset-0 p-1 z-10 text-white" data-v-f43dd6a7><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", `${product.name} - Digital Finance Interface Preview`)} width="100%" height="100%" class="w-full object-cover rounded-lg shadow-lg" loading="lazy" data-v-f43dd6a7><div class="flex items-center justify-between relative w-full py-4 md:py-8 px-4" data-v-f43dd6a7><div data-v-f43dd6a7><h2 class="text-2xl sm:text-3xl md:text-[32px] tracking-wide font-nyx mb-2 md:mb-3" data-v-f43dd6a7>${ssrInterpolate(product.name)}</h2><div class="text-block" data-v-f43dd6a7><p class="text-xs sm:text-sm md:text-base font-ninetea text-gray-400" data-v-f43dd6a7>${ssrInterpolate(product.description)}</p></div></div>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: product.link,
          class: "bg-purple-600 font-ninetea hover:bg-purple-700 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1 md:gap-2 mr-2 md:mr-6 transition-all duration-300 active:scale-95 touch-manipulation"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "pixelarticons:arrow-right",
                class: "text-white text-lg md:text-2xl -rotate-45"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" View "),
                createVNode(_component_Icon, {
                  name: "pixelarticons:arrow-right",
                  class: "text-white text-lg md:text-2xl -rotate-45"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="relative overflow-hidden" data-v-f43dd6a7><div class="bg-[#010101]" data-v-f43dd6a7><div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0" data-v-f43dd6a7><img${ssrRenderAttr("src", _imports_0$1)} alt="TechBank Brands Section Background Pattern" width="100%" height="100%" class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" data-v-f43dd6a7></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" data-v-f43dd6a7><div class="text-center" data-v-f43dd6a7><p class="text-xs sm:text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl mb-2 md:mb-3" data-v-f43dd6a7>From One Root, Many Branches</p><h2 data-final-text="Our Connected Brands" class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header mx-auto mb-4 md:mb-6 font-nyx tracking-wider leading-[1.2] md:leading-none" data-v-f43dd6a7> Our Connected Brands </h2></div><div class="md:hidden" data-v-f43dd6a7>`);
      _push(ssrRenderComponent(_component_ConnectedBrandsSwiper, null, null, _parent));
      _push(`</div><div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5" data-v-f43dd6a7><!--[-->`);
      ssrRenderList(brands.value, (brand, index2) => {
        _push(`<div class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl" data-v-f43dd6a7><div class="bg-[#010101] pt-4 px-4 rounded-xl" data-v-f43dd6a7><h4 class="text-lg md:text-xl text-white mx-auto font-ninetea" data-v-f43dd6a7>${ssrInterpolate(brand.name)}</h4><p class="text-sm md:text-base mt-2 text-gray-400" data-v-f43dd6a7>${ssrInterpolate(brand.description)}</p><div class="-mt-6 flex items-center gap-5" data-v-f43dd6a7><!--[-->`);
        ssrRenderList(brand.socials, (social) => {
          _push(`<a${ssrRenderAttr("href", social.url)} target="_blank"${ssrRenderAttr("aria-label", `Visit ${brand.name} ${social.platform} page`)} class="transition-transform duration-300 hover:scale-110 active:scale-95 touch-manipulation" data-v-f43dd6a7>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: social.icon,
            class: "text-white text-[100px] w-6 mx-auto"
          }, null, _parent));
          _push(`</a>`);
        });
        _push(`<!--]--></div><img${ssrRenderAttr("src", brand.image)}${ssrRenderAttr("alt", `${brand.name} - Connected Brand Platform Preview`)} width="100%" height="100%" class="w-full h-auto object-cover rounded-lg shadow-lg mt-4" loading="lazy" data-v-f43dd6a7></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="max-w-7xl mx-auto relative px-4 sm:px-6 py-16 md:py-24 lg:px-8" data-v-f43dd6a7><div class="text-center" data-v-f43dd6a7><h2 data-final-text="Technologies" class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header mx-auto mb-4 md:mb-6 font-nyx tracking-wider leading-[1.2] md:leading-[102px]" data-v-f43dd6a7> Technologies </h2></div>`);
      _push(ssrRenderComponent(_component_TechnologySwiper, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f43dd6a7"]]);
export {
  index as default
};
//# sourceMappingURL=index-CL8q7HzO.js.map
