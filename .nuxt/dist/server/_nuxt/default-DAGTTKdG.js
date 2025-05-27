import { _ as __nuxt_component_0 } from "./nuxt-link-DW05dJug.js";
import __nuxt_component_1 from "./index-w3N2GCty.js";
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { gsap } from "gsap";
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
const _imports_0$1 = publicAssetsURL("/images/logo.svg");
const _imports_1$1 = publicAssetsURL("/images/mob-nav-bg.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const mobileMenu = ref(null);
    const mobileNavLinks = ref(null);
    const isScrolled = ref(false);
    watch(isMobileMenuOpen, (newValue) => {
      if (!mobileMenu.value) return;
      if (newValue) {
        gsap.set(mobileMenu.value, { visibility: "visible" });
        const tl = gsap.timeline();
        tl.to(mobileMenu.value, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          rotateX: 0,
          rotateY: 0,
          clipPath: "circle(150% at top right)",
          duration: 0.6,
          ease: "power3.out",
          clearProps: "visibility"
        });
        if (mobileNavLinks.value) {
          const links = mobileNavLinks.value.children;
          gsap.fromTo(
            links,
            {
              opacity: 0,
              x: -15,
              scale: 0.95,
              rotation: -2,
              filter: "blur(5px)",
              rotateX: -10,
              rotateY: 10,
              boxShadow: "0 0 0 rgba(147, 51, 234, 0)",
              clipPath: "inset(0 100% 0 0)"
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              rotation: 0,
              filter: "blur(0px)",
              rotateX: 0,
              rotateY: 0,
              boxShadow: "0 0 10px rgba(147, 51, 234, 0.2)",
              clipPath: "inset(0 0 0 0)",
              duration: 0.4,
              stagger: {
                amount: 0.3,
                from: "start"
              },
              ease: "power2.out"
            }
          );
        }
      } else {
        gsap.to(mobileMenu.value, {
          opacity: 0,
          scale: 0.8,
          rotation: 5,
          filter: "blur(10px)",
          rotateX: 15,
          rotateY: -15,
          boxShadow: "0 0 0 rgba(147, 51, 234, 0)",
          clipPath: "circle(0% at top right)",
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(mobileMenu.value, { visibility: "hidden" });
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed font-ninetea w-full text-white z-50 transition-all duration-300", { "backdrop-blur-sm": unref(isScrolled) }]
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:px-8"><div class="flex items-center justify-between h-16"><div class="flex items-center min-w-[180px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="TechBank Logo" width="40" height="40" class="h-8 w-8 mr-2"${_scopeId}><span class="text-xl font-bold text-white"${_scopeId}>TechBank</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "TechBank Logo",
                width: "40",
                height: "40",
                class: "h-8 w-8 mr-2"
              }),
              createVNode("span", { class: "text-xl font-bold text-white" }, "TechBank")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex flex-1 justify-center"><div class="flex items-center space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200", [_ctx.$route.path === "/" ? "border-b-2 border-purple-400 text-purple-400" : "text-white"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-5 w-px bg-gray-700"></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: ["px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200", [_ctx.$route.path.startsWith("/products") ? "border-b-2 border-purple-400 text-purple-400" : "text-white"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Products `);
          } else {
            return [
              createTextVNode(" Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-5 w-px bg-gray-700"></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: ["px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200", [_ctx.$route.path.startsWith("/team") ? "border-b-2 border-purple-400 text-purple-400" : "text-white"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Teams `);
          } else {
            return [
              createTextVNode(" Teams ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-5 w-px bg-gray-700"></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/careers",
        class: ["px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200", [_ctx.$route.path.startsWith("/careers") ? "border-b-2 border-purple-400 text-purple-400" : "text-white"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Career `);
          } else {
            return [
              createTextVNode(" Career ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden md:flex min-w-[180px] justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "border border-white text-white px-5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden relative z-10"><button class="inline-flex items-center transition-all duration-300"><span class="sr-only">Open main menu</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isMobileMenuOpen) ? "pixelarticons:close" : "pixelarticons:menu",
        class: "text-3xl"
      }, null, _parent));
      _push(`</button></div></div></div><div class="${ssrRenderClass([{ "hidden": !unref(isMobileMenuOpen) }, "md:hidden absolute top-8 right-4"])}"><div class="relative w-[220px] px-1 px-0 pt-0 pb-0"><div class="absolute inset-0 w-full h-full z-0"><img${ssrRenderAttr("src", _imports_1$1)} alt="Mobile Nav BG" class="w-full h-full object-contain"></div><nav class="relative z-10 flex flex-col gap-2 px-3 py-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300", [_ctx.$route.path === "/" ? "text-white  bg-[#000000]" : "text-white hover:text-purple-400"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "pixelarticons:home",
              class: "text-xl text-[#EEE0FF]"
            }, null, _parent2, _scopeId));
            _push2(` Home `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "pixelarticons:home",
                class: "text-xl text-[#EEE0FF]"
              }),
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: ["flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300", [_ctx.$route.path.startsWith("/products") ? "text-white  bg-[#000000]" : "text-white hover:text-purple-400"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "pixelarticons:heart",
              class: "text-xl text-[#FFC2C2]"
            }, null, _parent2, _scopeId));
            _push2(` Products `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "pixelarticons:heart",
                class: "text-xl text-[#FFC2C2]"
              }),
              createTextVNode(" Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: ["flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300", [_ctx.$route.path.startsWith("/team") ? "text-white  bg-[#000000]" : "text-white hover:text-purple-400"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "pixelarticons:lightbulb-2",
              class: "text-xl text-[#FFFBD2]"
            }, null, _parent2, _scopeId));
            _push2(` Teams `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "pixelarticons:lightbulb-2",
                class: "text-xl text-[#FFFBD2]"
              }),
              createTextVNode(" Teams ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/careers",
        class: ["flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300", [_ctx.$route.path.startsWith("/careers") ? "text-white  bg-[#000000]" : "text-white hover:text-purple-400"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "pixelarticons:user-plus",
              class: "text-xl text-[#CEFFDE]"
            }, null, _parent2, _scopeId));
            _push2(` Career `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "pixelarticons:user-plus",
                class: "text-xl text-[#CEFFDE]"
              }),
              createTextVNode(" Career ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: ["flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300", [_ctx.$route.path.startsWith("/contact") ? "text-white  bg-[#000000]" : "text-white hover:text-purple-400"]]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "pixelarticons:mail-delete",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(` Contact Us `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "pixelarticons:mail-delete",
                class: "text-xl"
              }),
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/mobile-footer.webp");
const _imports_1 = publicAssetsURL("/images/footer-bg.webp");
const _imports_2 = publicAssetsURL("/images/logo-footer.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const navigationItems = [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Team", path: "/team" },
      { name: "Career", path: "/careers" },
      { name: "Contact", path: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-8 relative overflow-hidden bg-[#010101]" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="TechBank Footer" width="100%" height="100%" class="w-full absolute h-auto object-contain bottom-0 shadow-lg md:hidden block"><img${ssrRenderAttr("src", _imports_1)} alt="TechBank Footer" width="100%" height="100%" class="w-full absolute h-auto object-contain bottom-0 hidden md:block shadow-lg"><div class="container relative mx-auto max-w-7xl px-4 py-10"><div class="grid md:grid-cols-2 gap-8"><div class="flex flex-col gap-5 items-start mb-8"><img${ssrRenderAttr("src", _imports_2)} alt="TechBank Logo" width="100%" height="100%" class="h-10 w-fit mb-4"><p class="text-white max-w-xs text-xl font-nyx">Engineering the future</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/contact",
        class: "text-white mt-4 px-5 py-1 rounded-full ring-1 ring-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="grid grid-cols-2 gap-8 relative md:mt-8"><div class="flex flex-col gap-4 justify-end"><ul class="flex flex-col gap-2 font-ninetea"><!--[-->`);
      ssrRenderList(navigationItems, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.path,
          class: "text-white hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><ul class="text-white flex flex-col md:items-end items-left text-left gap-2 font-ninetea"><li class="underline">Offices</li><li>Infopark</li><li>Kochi - Kerala</li></ul></div></div></div></div><div class="flex justify-between flex-col md:divide-y-0 divide-y divide-[#FBFDFF26] md:flex-row items-center text-white"><div class="flex items-center justify-center md:justify-start gap-5 w-full"><a href="https://linkedin.com/company/techbank" target="_blank" aria-label="Visit our LinkedIn page">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:linkedin-logo",
        class: "text-white text-[100px] w-6 mx-auto"
      }, null, _parent));
      _push(`</a><a href="https://instagram.com/techbank" target="_blank" aria-label="Visit our Instagram page">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:instagram-logo",
        class: "text-white text-[100px] w-6 mx-auto"
      }, null, _parent));
      _push(`</a><a href="https://twitter.com/techbank" target="_blank" aria-label="Visit our Twitter page">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "hugeicons:new-twitter",
        class: "text-white text-[100px] w-6 mx-auto"
      }, null, _parent));
      _push(`</a><a href="https://youtube.com/@techbank" target="_blank" aria-label="Visit our YouTube channel">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "teenyicons:youtube-outline",
        class: "text-white text-[100px] w-6 mx-auto"
      }, null, _parent));
      _push(`</a></div><div class="hidden text-center md:block w-full flex justify-center"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} TechBank. All rights reserved.</p></div><div class="flex items-center gap-5 md:justify-end justify-center w-full -mt-5 md:mt-0 py-3 md:py-0">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/privacy-policy",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/terms-and-conditions",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms &amp; Conditions`);
          } else {
            return [
              createTextVNode("Terms & Conditions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="block md:hidden pt-3">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} TechBank. All rights reserved.</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = _sfc_main$2;
  const _component_Footer = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<main class="bg-[#010101] text-white max-w-screen relative overflow-x-hidden bg-black pt-24 min-h-screen">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-DAGTTKdG.js.map
