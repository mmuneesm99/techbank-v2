import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "D:/techbank-v2/node_modules/hookable/dist/index.mjs";
import "D:/techbank-v2/node_modules/unctx/dist/index.mjs";
import "D:/techbank-v2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/techbank-v2/node_modules/radix3/dist/index.mjs";
import "D:/techbank-v2/node_modules/defu/dist/defu.mjs";
import "D:/techbank-v2/node_modules/ufo/dist/index.mjs";
import "D:/techbank-v2/node_modules/klona/dist/index.mjs";
import "D:/techbank-v2/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
import "@iconify/vue";
const _imports_0 = publicAssetsURL("/images/blog-bg-pattern.svg");
const _imports_1 = publicAssetsURL("/images/blog-sample.webp");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8" }, _attrs))}><div class="text-center"><p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">BUILD THE FUTURE WITH US </p><h2 data-final-text="Blogs" class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[102px]"> Blogs </h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-5"><!--[-->`);
  ssrRenderList(9, (item) => {
    _push(`<div class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg"><img${ssrRenderAttr("src", _imports_0)} alt="TechBank Logo" width="100%" height="100%" class="w-full h-auto object-cover rounded-[30px] shadow-lg"><div class="absolute h-full inset-0 p-1 z-10 text-white"><img${ssrRenderAttr("src", _imports_1)} alt="TechBank Logo" width="100%" height="100%" class="w-full object-cover rounded-lg"><div class="flex items-center justify-between relative w-full py-10 px-3"><div class=""><h2 class="text-3xl font-ninetea">Smart AI Chatbot</h2><p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized, AI-driven interactions. </p></div></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DebNioN6.js.map
