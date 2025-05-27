import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useSwiper } from "./useSwiper.client-B39wiisS.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DbankReviews",
  __ssrInlineRender: true,
  setup(__props) {
    const containerReview = ref(null);
    useSwiper(containerReview, {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto relative py-8" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DbankReviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=DbankReviews-BOmMbyXj.js.map
