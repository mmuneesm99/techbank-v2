import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "OptimizedImage",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    height: {
      type: [String, Number],
      default: "100%"
    },
    loading: {
      type: String,
      default: "lazy"
    },
    quality: {
      type: Number,
      default: 80
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    lowQualitySrc: {
      type: String,
      default: ""
    },
    imageClass: {
      type: String,
      default: "w-full h-full object-cover"
    },
    containerClass: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const isLoading = ref(true);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["image-container", __props.containerClass]
      }, _attrs))} data-v-e11809df>`);
      if (unref(isLoading)) {
        _push(`<div class="absolute inset-0 flex items-center justify-center bg-[#1A1A1A] rounded-lg" data-v-e11809df><div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500" data-v-e11809df></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.lowQualitySrc) {
        _push(`<img${ssrRenderAttr("src", __props.lowQualitySrc)}${ssrRenderAttr("alt", __props.alt)} class="${ssrRenderClass([__props.imageClass, "absolute inset-0 w-full h-full object-cover blur-xl scale-110"])}" data-v-e11809df>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.alt)}${ssrRenderAttr("width", __props.width)}${ssrRenderAttr("height", __props.height)}${ssrRenderAttr("loading", __props.loading)}${ssrRenderAttr("quality", __props.quality)}${ssrRenderAttr("placeholder", __props.placeholder)} class="${ssrRenderClass([[
        __props.imageClass,
        { "opacity-0": unref(isLoading) },
        { "opacity-100": !unref(isLoading) }
      ], "transition-opacity duration-300"])}" data-v-e11809df></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OptimizedImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e11809df"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=OptimizedImage-BubMMR-c.js.map
