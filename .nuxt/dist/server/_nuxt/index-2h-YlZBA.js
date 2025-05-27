import { _ as __nuxt_component_1 } from "./OptimizedImage-BubMMR-c.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DW05dJug.js";
import __nuxt_component_1$1 from "./index-w3N2GCty.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "D:/techbank-v2/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "D:/techbank-v2/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/techbank-v2/node_modules/hookable/dist/index.mjs";
import "D:/techbank-v2/node_modules/unctx/dist/index.mjs";
import "D:/techbank-v2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/techbank-v2/node_modules/radix3/dist/index.mjs";
import "D:/techbank-v2/node_modules/defu/dist/defu.mjs";
import "D:/techbank-v2/node_modules/klona/dist/index.mjs";
import "D:/techbank-v2/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([
      {
        id: 1,
        name: "DWALLET",
        description: "Introducing DWallet, your trusted companion for managing and securing your digital assets. Designed with both security and user experience in mind.",
        image: "/images/dwalletproduct.webp",
        logo: "/images/logo.svg",
        bgPattern: "/images/product-bg-pattern.webp",
        link: "/products/dwallet"
      },
      {
        id: 2,
        name: "DBANK",
        description: "DBank is a secure and user-friendly staking platform that allows you to earn passive income by staking your digital assets.",
        image: "/images/dbankproduct.webp",
        logo: "/images/dbanklogo.svg",
        bgPattern: "/images/product-bg-pattern.webp",
        link: "/products/dbank"
      }
    ]);
    ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OptimizedImage = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:px-8" }, _attrs))} data-v-1c318fbb><div class="text-center" data-v-1c318fbb><p class="text-[14px] md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-in" data-v-1c318fbb>BUILD THE FUTURE WITH US</p><h2 data-final-text="Products" class="text-[32px] md:text-[40px] lg:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider" data-v-1c318fbb> Products </h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-5" data-v-1c318fbb><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div class="product-card relative overflow-hidden rounded-2xl md:rounded-3xl h-fit w-full shadow-lg bg-[#2B2B2B] transform transition-all duration-500" data-v-1c318fbb>`);
        _push(ssrRenderComponent(_component_OptimizedImage, {
          src: product.bgPattern,
          alt: product.name + " background",
          width: "100%",
          height: "100%",
          loading: "lazy",
          containerClass: "w-full h-full absolute object-cover rounded-[20px] md:rounded-[30px] shadow-lg",
          imageClass: "w-full h-full object-cover rounded-[20px] md:rounded-[30px] shadow-lg"
        }, null, _parent));
        _push(`<div class="h-full inset-0 p-2 md:p-3 z-10 text-white relative" data-v-1c318fbb>`);
        _push(ssrRenderComponent(_component_OptimizedImage, {
          src: product.image,
          alt: product.name + " interface",
          width: "100%",
          height: "100%",
          loading: "eager",
          containerClass: "w-full object-cover rounded-xl md:rounded-2xl",
          imageClass: "w-full object-cover rounded-xl md:rounded-2xl"
        }, null, _parent));
        _push(`<div class="flex items-center justify-between relative w-full py-3 md:py-5 px-2 md:px-3" data-v-1c318fbb><div class="w-full" data-v-1c318fbb><div class="flex items-center gap-3 md:gap-5" data-v-1c318fbb>`);
        _push(ssrRenderComponent(_component_OptimizedImage, {
          src: product.logo,
          alt: product.name + " logo",
          width: "100%",
          height: "100%",
          loading: "eager",
          containerClass: "",
          imageClass: "w-8 h-8 md:w-12 md:h-12"
        }, null, _parent));
        _push(`<h2 class="text-xl md:text-3xl font-nyx" data-v-1c318fbb>${ssrInterpolate(product.name)}</h2></div><p class="text-xs md:text-sm mt-2 text-gray-400 line-clamp-2 md:line-clamp-none" data-v-1c318fbb>${ssrInterpolate(product.description)}</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: product.link,
          class: "bg-button-gradient w-fit font-ninetea text-white pl-4 md:pl-6 mt-3 md:mt-5 pr-2 py-1.5 md:py-2 text-sm md:text-base whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 touch-manipulation"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "pixelarticons:arrow-right",
                class: "text-white text-xl md:text-2xl -rotate-45 transition-transform duration-300 group-hover:rotate-0"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" View "),
                createVNode(_component_Icon, {
                  name: "pixelarticons:arrow-right",
                  class: "text-white text-xl md:text-2xl -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c318fbb"]]);
export {
  index as default
};
//# sourceMappingURL=index-2h-YlZBA.js.map
