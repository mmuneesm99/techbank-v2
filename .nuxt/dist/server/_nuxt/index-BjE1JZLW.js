import { _ as __nuxt_component_0 } from "./nuxt-link-DW05dJug.js";
import __nuxt_component_1 from "./index-w3N2GCty.js";
import { ref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "D:/techbank-v2/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "D:/techbank-v2/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
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
const _imports_0 = publicAssetsURL("/images/team-card.webp");
const _imports_1 = publicAssetsURL("/images/badge.webp");
const _imports_2 = publicAssetsURL("/images/team-footer-badge.webp");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const team = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><div class="absolute w-full h-full flex flex-col gap-2 justify-around bottom-0" data-v-724840a4><div class="flex items-center justify-center h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF] blur-[60px] -rotate-[10deg]" data-v-724840a4></div><div class="flex items-center justify-center h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF] blur-[60px] -rotate-[10deg]" data-v-724840a4></div><div class="flex items-center justify-center h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF] blur-[60px] -rotate-[10deg]" data-v-724840a4></div></div><div class="max-w-7xl mx-auto relative px-4 sm:px-6 py-16 lg:px-8" data-v-724840a4><div class="text-center" data-v-724840a4><p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-up" data-v-724840a4>Meet the Team Shaping the Future. </p><h2 class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider" data-v-724840a4> TEAMS </h2></div><div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-2 py-10" data-v-724840a4><!--[-->`);
      ssrRenderList(team.value, (member, index2) => {
        _push(`<div class="relative overflow-hidden h-fit w-full flex flex-col items-center p-6 animate-fade-up" style="${ssrRenderStyle({ animationDelay: `${index2 * 0.1}s` })}" data-v-724840a4><img${ssrRenderAttr("src", _imports_0)} alt="TechBank" width="100%" height="100%" class="w-full h-full absolute top-0 left-0" data-v-724840a4><div class="relative text-center h-full w-full group" data-v-724840a4><img${ssrRenderAttr("src", member.photo)}${ssrRenderAttr("alt", member.name)} class="object-cover mb-2 transform transition-transform duration-300 group-hover:scale-105" data-v-724840a4><img${ssrRenderAttr("src", _imports_1)} alt="TechBank Badge" width="100%" height="100%" class="absolute md:bottom-[80px] bottom-[50px] md:w-[80px] w-[50px] -right-4 -rotate-12 group-hover:rotate-0 transition-all duration-300 hover:scale-110" data-v-724840a4><div class="absolute bottom-0 bg-gradient-to-t from-[#000] to-transparent left-0 w-full md:px-4 transform transition-transform duration-300" data-v-724840a4><h3 class="md:text-xl text-[12px] md:tracking-wider text-white leading-none font-nyx" data-v-724840a4>${ssrInterpolate(member.name)}</h3><p class="md:text-sm text-[9px] text-[#C0C0C0] font-ninetea" data-v-724840a4>${ssrInterpolate(member.designation)}</p></div></div></div>`);
      });
      _push(`<!--]--></div><div class="md:bg-gradient-to-r md:from-[#E476FF82] md:rounded-2xl md:via-[#DD56FF] md:to-[#FFFFFF] md:p-[1px] md:ml-10 mt-20 relative animate-fade-up" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-724840a4><div class="bg-[#010101] flex flex-col md:flex-row md:items-center rounded-2xl relative shadow-lg md:p-4 gap-5 md:gap-0 hover:shadow-[#BB83FF]/20 transition-all duration-300" data-v-724840a4><div class="md:absolute md:-left-10" data-v-724840a4><img${ssrRenderAttr("src", _imports_2)} class="md:w-[130px] -rotate-12 hover:rotate-12 transition-all duration-1000" alt="joinwithus" data-v-724840a4></div><div class="flex flex-col gap-2 md:pl-20" data-v-724840a4><span class="text-white text-lg md:text-xl font-ninetea" data-v-724840a4>BUILD THE FUTURE WITH US</span><p class="text-sm font-ninetea text-[#B3B3B3]" data-v-724840a4>At TechBank, we believe in crafting tech that disrupts. From blockchain protocols to immersive virtual experiences, we&#39;re pushing the boundaries of what&#39;s possible—and we want bold thinkers, doers, and dreamers to join us.</p></div><div data-v-724840a4>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/careers",
        class: "bg-button-gradient font-ninetea text-white pl-6 pr-2 py-2 whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700 transform hover:scale-105 transition-all duration-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apply Now <span class="bg-white h-8 w-8 flex items-center justify-center ml-0 rounded-full" data-v-724840a4${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mynaui:arrow-long-up-right",
              class: "text-[#8501A6] font-bold"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(" Apply Now "),
              createVNode("span", { class: "bg-white h-8 w-8 flex items-center justify-center ml-0 rounded-full" }, [
                createVNode(_component_Icon, {
                  name: "mynaui:arrow-long-up-right",
                  class: "text-[#8501A6] font-bold"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-724840a4"]]);
export {
  index as default
};
//# sourceMappingURL=index-BjE1JZLW.js.map
