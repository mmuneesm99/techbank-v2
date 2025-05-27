import __nuxt_component_1 from "./index-w3N2GCty.js";
import { _ as _sfc_main$1 } from "./NuxtTurnstile-W86RJg12.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, createTextVNode, toDisplayString, Transition, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-M4F6_fSz.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { onClickOutside } from "@vueuse/core";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { _ as _export_sfc } from "../server.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "D:/techbank-v2/node_modules/perfect-debounce/dist/index.mjs";
import "D:/techbank-v2/node_modules/defu/dist/defu.mjs";
import "D:/techbank-v2/node_modules/klona/dist/index.mjs";
import "D:/techbank-v2/node_modules/hookable/dist/index.mjs";
import "unhead/scripts";
import "@vueuse/shared";
import "ofetch";
import "D:/techbank-v2/node_modules/unctx/dist/index.mjs";
import "D:/techbank-v2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/techbank-v2/node_modules/radix3/dist/index.mjs";
import "D:/techbank-v2/node_modules/ufo/dist/index.mjs";
import "D:/techbank-v2/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
const _imports_1 = publicAssetsURL("/videos/interactive-keyboard.webm");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const error = ref("");
    const success = ref("");
    const isDropdownOpen = ref(false);
    const dropdownRef = ref(null);
    const turnstileToken = ref("");
    const countries = [
      { code: "+91", flag: "in", name: "India" },
      { code: "+1", flag: "us", name: "United States" },
      { code: "+44", flag: "gb", name: "United Kingdom" },
      { code: "+61", flag: "au", name: "Australia" },
      { code: "+86", flag: "cn", name: "China" }
    ];
    const selectedCountry = ref(countries[0]);
    const selectCountry = (country) => {
      selectedCountry.value = country;
      isDropdownOpen.value = false;
    };
    onClickOutside(dropdownRef, () => {
      isDropdownOpen.value = false;
    });
    const schema = yup.object({
      name: yup.string().required("Name is required").matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces").trim(),
      email: yup.string().required("Email is required").email("Please enter a valid email address").trim(),
      phone: yup.string().required("Phone number is required").matches(/^\d{7,15}$/, "Please enter a valid phone number (7-15 digits)").trim(),
      message: yup.string().required("Message is required").trim()
    });
    const resetForm = () => {
      form.value = {
        name: "",
        email: "",
        phone: "",
        message: ""
      };
      error.value = "";
      success.value = "";
      turnstileToken.value = "";
    };
    const handleSubmit = async (values) => {
      if (!turnstileToken.value) {
        error.value = "Please complete the Turnstile verification";
        return;
      }
      isSubmitting.value = true;
      error.value = "";
      success.value = "";
      try {
        const csrfResponse = await fetch("/api/csrf", {
          method: "GET",
          credentials: "same-origin"
        });
        if (!csrfResponse.ok) {
          throw new Error("Failed to get CSRF token");
        }
        const { token } = await csrfResponse.json();
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": token
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: `${selectedCountry.value.code}${values.phone}`,
            message: values.message,
            turnstileToken: turnstileToken.value
          }),
          credentials: "same-origin"
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to send message");
        }
        const data = await response.json();
        success.value = data.message || "Message sent successfully! We will get back to you soon.";
        turnstileToken.value = "";
        resetForm();
      } catch (err) {
        error.value = err.message || "Failed to send message. Please try again.";
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtTurnstile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:px-8" }, _attrs))} data-v-87c85cd9><div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-v-87c85cd9><div class="bg-[#140028] rounded-2xl relative overflow-hidden flex h-fit flex-col items-center" data-v-87c85cd9><img${ssrRenderAttr("src", _imports_0)} alt="TechBank Logo" width="100%" height="100%" class="w-full h-full absolute object-cover" data-v-87c85cd9><div class="absolute -bottom-10 filter blur-[10px] left-0 w-full h-full bg-gradient-to-t from-[#fff] via-[#9334F8] to-transparent" data-v-87c85cd9></div><div class="relative md:py-20 py-10 px-10 h-fit" data-v-87c85cd9><h4 class="text-white text-xl md:text-3xl font-nyx text-center mb-2" data-v-87c85cd9>Let&#39;s connect and create the next big thing in tech</h4><div class="flex items-center justify-center bottom-0 w-full px-10 md:py-10 right-0" data-v-87c85cd9><video autoplay loop muted playsinline class="object-contain w-full hover:skew-x-2 hover:skew-y-2 transition-all duration-1000" data-v-87c85cd9><source${ssrRenderAttr("src", _imports_1)} type="video/webm" data-v-87c85cd9></video></div></div></div><div class="w-full md:p-8" data-v-87c85cd9><p class="text-[#BB83FF] text-sm font-ninetea mb-2 tracking-widest" data-v-87c85cd9>BUILD THE FUTURE WITH US</p><h2 class="text-3xl md:text-4xl font-nyx text-white mb-8 tracking-wide" data-v-87c85cd9>CONTACT US</h2>`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit: handleSubmit,
        "validation-schema": unref(schema),
        "validate-on-change": false,
        "validate-on-blur": false,
        "validate-on-input": false,
        class: "space-y-6"
      }, {
        default: withCtx(({ errors: validationErrors }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-87c85cd9${_scopeId}><label for="name" class="block text-sm font-ninetea text-white mb-2" data-v-87c85cd9${_scopeId}>Name<span class="text-[#BB83FF]" data-v-87c85cd9${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "name",
              type: "text",
              id: "name",
              modelValue: form.value.name,
              "onUpdate:modelValue": ($event) => form.value.name = $event,
              placeholder: "Enter Your Name",
              class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.name ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "name",
              class: "text-red-500 text-sm mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-87c85cd9${_scopeId}><label for="email" class="block text-sm font-ninetea text-white mb-2" data-v-87c85cd9${_scopeId}>Email<span class="text-[#BB83FF]" data-v-87c85cd9${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              type: "email",
              id: "email",
              modelValue: form.value.email,
              "onUpdate:modelValue": ($event) => form.value.email = $event,
              placeholder: "Enter Email",
              class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.email ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "email",
              class: "text-red-500 text-sm mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-87c85cd9${_scopeId}><label for="phone" class="block text-sm font-ninetea text-white mb-2" data-v-87c85cd9${_scopeId}>Phone Number<span class="text-[#BB83FF]" data-v-87c85cd9${_scopeId}>*</span></label><div class="flex items-center gap-2" data-v-87c85cd9${_scopeId}><div class="relative" data-v-87c85cd9${_scopeId}><button type="button" class="px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] min-w-[120px] flex items-center justify-between border border-transparent" data-v-87c85cd9${_scopeId}><div class="flex items-center gap-2" data-v-87c85cd9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: `flagpack:${selectedCountry.value.flag}`,
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-87c85cd9${_scopeId}>${ssrInterpolate(selectedCountry.value.code)}</span></div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:chevron-down",
              class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": isDropdownOpen.value }]
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            if (isDropdownOpen.value) {
              _push2(`<div class="absolute z-10 mt-1 w-full bg-[#1A1A1A] rounded-lg shadow-lg border border-[#3B2A5A] overflow-hidden" data-v-87c85cd9${_scopeId}><div class="py-1 max-h-60 overflow-auto" data-v-87c85cd9${_scopeId}><!--[-->`);
              ssrRenderList(countries, (country) => {
                _push2(`<button class="${ssrRenderClass([{ "bg-[#3B2A5A]": country.code === selectedCountry.value.code }, "w-full px-4 py-2 text-left text-white hover:bg-[#3B2A5A] flex items-center gap-2 transition-colors duration-150"])}" data-v-87c85cd9${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: `flagpack:${country.flag}`,
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-87c85cd9${_scopeId}>${ssrInterpolate(country.code)}</span></button>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "phone",
              type: "tel",
              id: "phone",
              modelValue: form.value.phone,
              "onUpdate:modelValue": ($event) => form.value.phone = $event,
              placeholder: "Enter 10 digits",
              class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.phone ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "phone",
              class: "text-red-500 text-sm mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-87c85cd9${_scopeId}><label for="message" class="block text-sm font-ninetea text-white mb-2" data-v-87c85cd9${_scopeId}>Message<span class="text-[#BB83FF]" data-v-87c85cd9${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(unref(Field), {
              as: "textarea",
              name: "message",
              id: "message",
              modelValue: form.value.message,
              "onUpdate:modelValue": ($event) => form.value.message = $event,
              rows: "4",
              placeholder: "Write your message",
              class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.message ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "message",
              class: "text-red-500 text-sm mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-start" data-v-87c85cd9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtTurnstile, {
              modelValue: turnstileToken.value,
              "onUpdate:modelValue": ($event) => turnstileToken.value = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-87c85cd9${_scopeId}><button type="submit" class="bg-button-gradient text-white px-8 py-3 rounded-full font-ninetea text-base flex items-center gap-2 hover:opacity-90 transition-all shadow-lg disabled:opacity-50"${ssrIncludeBooleanAttr(isSubmitting.value || !turnstileToken.value) ? " disabled" : ""} data-v-87c85cd9${_scopeId}>`);
            if (isSubmitting.value) {
              _push2(`<span data-v-87c85cd9${_scopeId}>Sending...</span>`);
            } else {
              _push2(`<span data-v-87c85cd9${_scopeId}>Send Message</span>`);
            }
            if (!isSubmitting.value) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "pixelarticons:arrow-right",
                class: "text-white text-xl -rotate-45"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div>`);
            if (error.value && !Object.keys(validationErrors).length) {
              _push2(`<div class="text-red-500 text-center mt-4" data-v-87c85cd9${_scopeId}>${ssrInterpolate(error.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (success.value && !Object.keys(validationErrors).length) {
              _push2(`<div class="text-green-500 text-center mt-4" data-v-87c85cd9${_scopeId}>${ssrInterpolate(success.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, [
                createVNode("label", {
                  for: "name",
                  class: "block text-sm font-ninetea text-white mb-2"
                }, [
                  createTextVNode("Name"),
                  createVNode("span", { class: "text-[#BB83FF]" }, "*")
                ]),
                createVNode(unref(Field), {
                  name: "name",
                  type: "text",
                  id: "name",
                  modelValue: form.value.name,
                  "onUpdate:modelValue": ($event) => form.value.name = $event,
                  placeholder: "Enter Your Name",
                  class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.name ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                createVNode(unref(ErrorMessage), {
                  name: "name",
                  class: "text-red-500 text-sm mt-1"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", {
                  for: "email",
                  class: "block text-sm font-ninetea text-white mb-2"
                }, [
                  createTextVNode("Email"),
                  createVNode("span", { class: "text-[#BB83FF]" }, "*")
                ]),
                createVNode(unref(Field), {
                  name: "email",
                  type: "email",
                  id: "email",
                  modelValue: form.value.email,
                  "onUpdate:modelValue": ($event) => form.value.email = $event,
                  placeholder: "Enter Email",
                  class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.email ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                createVNode(unref(ErrorMessage), {
                  name: "email",
                  class: "text-red-500 text-sm mt-1"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", {
                  for: "phone",
                  class: "block text-sm font-ninetea text-white mb-2"
                }, [
                  createTextVNode("Phone Number"),
                  createVNode("span", { class: "text-[#BB83FF]" }, "*")
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("div", {
                    class: "relative",
                    ref_key: "dropdownRef",
                    ref: dropdownRef
                  }, [
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => isDropdownOpen.value = !isDropdownOpen.value,
                      class: "px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] min-w-[120px] flex items-center justify-between border border-transparent"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_Icon, {
                          name: `flagpack:${selectedCountry.value.flag}`,
                          class: "w-5 h-5"
                        }, null, 8, ["name"]),
                        createVNode("span", null, toDisplayString(selectedCountry.value.code), 1)
                      ]),
                      createVNode(_component_Icon, {
                        name: "heroicons:chevron-down",
                        class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": isDropdownOpen.value }]
                      }, null, 8, ["class"])
                    ], 8, ["onClick"]),
                    createVNode(Transition, {
                      "enter-active-class": "transition duration-100 ease-out",
                      "enter-from-class": "transform scale-95 opacity-0",
                      "enter-to-class": "transform scale-100 opacity-100",
                      "leave-active-class": "transition duration-75 ease-in",
                      "leave-from-class": "transform scale-100 opacity-100",
                      "leave-to-class": "transform scale-95 opacity-0"
                    }, {
                      default: withCtx(() => [
                        isDropdownOpen.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute z-10 mt-1 w-full bg-[#1A1A1A] rounded-lg shadow-lg border border-[#3B2A5A] overflow-hidden"
                        }, [
                          createVNode("div", { class: "py-1 max-h-60 overflow-auto" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(countries, (country) => {
                              return createVNode("button", {
                                key: country.code,
                                onMousedown: ($event) => selectCountry(country),
                                class: ["w-full px-4 py-2 text-left text-white hover:bg-[#3B2A5A] flex items-center gap-2 transition-colors duration-150", { "bg-[#3B2A5A]": country.code === selectedCountry.value.code }]
                              }, [
                                createVNode(_component_Icon, {
                                  name: `flagpack:${country.flag}`,
                                  class: "w-5 h-5"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(country.code), 1)
                              ], 42, ["onMousedown"]);
                            }), 64))
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ], 512),
                  createVNode(unref(Field), {
                    name: "phone",
                    type: "tel",
                    id: "phone",
                    modelValue: form.value.phone,
                    "onUpdate:modelValue": ($event) => form.value.phone = $event,
                    placeholder: "Enter 10 digits",
                    class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.phone ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                ]),
                createVNode(unref(ErrorMessage), {
                  name: "phone",
                  class: "text-red-500 text-sm mt-1"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", {
                  for: "message",
                  class: "block text-sm font-ninetea text-white mb-2"
                }, [
                  createTextVNode("Message"),
                  createVNode("span", { class: "text-[#BB83FF]" }, "*")
                ]),
                createVNode(unref(Field), {
                  as: "textarea",
                  name: "message",
                  id: "message",
                  modelValue: form.value.message,
                  "onUpdate:modelValue": ($event) => form.value.message = $event,
                  rows: "4",
                  placeholder: "Write your message",
                  class: ["w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none placeholder-gray-400", validationErrors.message ? "border border-red-500 focus:border-red-500" : "border border-transparent focus:border-[#BB83FF]"]
                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                createVNode(unref(ErrorMessage), {
                  name: "message",
                  class: "text-red-500 text-sm mt-1"
                })
              ]),
              createVNode("div", { class: "flex justify-start" }, [
                createVNode(_component_NuxtTurnstile, {
                  modelValue: turnstileToken.value,
                  "onUpdate:modelValue": ($event) => turnstileToken.value = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", null, [
                createVNode("button", {
                  type: "submit",
                  class: "bg-button-gradient text-white px-8 py-3 rounded-full font-ninetea text-base flex items-center gap-2 hover:opacity-90 transition-all shadow-lg disabled:opacity-50",
                  disabled: isSubmitting.value || !turnstileToken.value
                }, [
                  isSubmitting.value ? (openBlock(), createBlock("span", { key: 0 }, "Sending...")) : (openBlock(), createBlock("span", { key: 1 }, "Send Message")),
                  !isSubmitting.value ? (openBlock(), createBlock(_component_Icon, {
                    key: 2,
                    name: "pixelarticons:arrow-right",
                    class: "text-white text-xl -rotate-45"
                  })) : createCommentVNode("", true)
                ], 8, ["disabled"])
              ]),
              error.value && !Object.keys(validationErrors).length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-red-500 text-center mt-4"
              }, toDisplayString(error.value), 1)) : createCommentVNode("", true),
              success.value && !Object.keys(validationErrors).length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "text-green-500 text-center mt-4"
              }, toDisplayString(success.value), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87c85cd9"]]);
export {
  index as default
};
//# sourceMappingURL=index-EC14OejM.js.map
