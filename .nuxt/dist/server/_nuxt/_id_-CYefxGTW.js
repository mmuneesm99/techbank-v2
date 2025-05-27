import { _ as __nuxt_component_0 } from "./nuxt-link-DW05dJug.js";
import __nuxt_component_1 from "./index-w3N2GCty.js";
import { _ as _sfc_main$2 } from "./NuxtTurnstile-W86RJg12.js";
import { ref, computed, mergeProps, unref, useSSRContext, reactive, watch, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Transition, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { useRoute } from "vue-router";
import { useForm, Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { _ as _export_sfc } from "../server.mjs";
import "D:/techbank-v2/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "D:/techbank-v2/node_modules/perfect-debounce/dist/index.mjs";
import "D:/techbank-v2/node_modules/defu/dist/defu.mjs";
import "D:/techbank-v2/node_modules/klona/dist/index.mjs";
import "D:/techbank-v2/node_modules/hookable/dist/index.mjs";
import "unhead/scripts";
import "@vueuse/core";
import "@vueuse/shared";
import "ofetch";
import "D:/techbank-v2/node_modules/unctx/dist/index.mjs";
import "D:/techbank-v2/node_modules/h3/dist/index.mjs";
import "D:/techbank-v2/node_modules/radix3/dist/index.mjs";
import "D:/techbank-v2/node_modules/@unhead/vue/dist/index.mjs";
import "@unhead/addons";
import "unhead/plugins";
import "scule";
import "@unhead/schema-org/vue";
const _imports_0 = publicAssetsURL("/images/applymodel.webp");
const _sfc_main$1 = {
  __name: "DrawerModal",
  __ssrInlineRender: true,
  props: {
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const isMobile = ref(false);
    const drawerClass = computed(
      () => isMobile.value ? "fixed left-0 bottom-0 w-full max-w-full h-[90vh] bg-[#2B2B2B] shadow-xl p-6 flex flex-col rounded-t-2xl overflow-y-auto" : "ml-auto w-full max-w-2xl h-full bg-[#2B2B2B] shadow-xl p-6 relative flex flex-col overflow-y-auto"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      if (__props.modelValue) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50 flex" }, _attrs))} data-v-52b05dbf><div class="fixed inset-0 bg-black bg-opacity-60 re" data-v-52b05dbf></div><aside class="${ssrRenderClass(unref(drawerClass))}" data-v-52b05dbf><button class="absolute top-4 right-4 text-white text-2xl z-10 ring-[1px] ring-[#fff] rounded-3xl px-3 py-1 flex items-center justify-center bg-black focus:outline-none" data-v-52b05dbf>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:close" }, null, _parent));
        _push(`</button>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</aside></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DrawerModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DrawerModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-52b05dbf"]]);
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const jobs = [
      {
        title: "Blockchain Lead",
        openings: "1",
        experience: "5",
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We're on the hunt for a Blockchain Lead Developer who's ready to push boundaries! 🔗🚀 If you're all about building cutting-edge decentralized solutions and want to be part of an innovative, fun team, we'd love to hear from you. Hit us up!",
        responsibilities: [],
        requirements: [
          "Experience : 5+ years in Blockchain and Node.js development.",
          "Required Skills : Web3, Solidity, Node.js, EVM-based chains.",
          "Knowledge in : React / Vue, Golang.",
          "Experience with DeFi projects - Uniswap Protocols."
        ]
      },
      {
        title: "Content Writer",
        openings: "1",
        experience: "3",
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We're looking for a Content Writer who can craft engaging and high-quality content! ✍️✨ If you have a knack for research, creating compelling articles, scripts, and social media posts—and anchoring skills as a bonus—we want you on our team! 🚀 Hit us up!",
        responsibilities: [],
        requirements: [
          "Write engaging and high-quality content.",
          "Research and create compelling articles, scripts, and social media posts.",
          "Knowledge of anchoring skills is an added advantage."
        ]
      },
      {
        title: "Content Creator",
        openings: "1",
        experience: "3",
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We're on the lookout for a Content Creator & Presenter who can plan, script, and deliver high-quality videos! 🎥✨ If you're confident on camera and can present fluently in English & Malayalam, we want you on our team. 🚀 Let's create something amazing—hit us up!",
        responsibilities: [],
        requirements: [
          "Plan, Script, Present high quality videos.",
          "Confidently Present on camera.",
          "Handle English & Malayalam Presentation Videos."
        ]
      },
      {
        title: "Jr. Graphic Designer",
        openings: "1",
        experience: "0-2",
        location: "Kochi",
        time: "Full Time",
        isNew: true,
        description: "We're on the lookout for a Content Creator & Presenter who can plan, script, and deliver high-quality videos! 🎥✨ If you're confident on camera and can present fluently in English & Malayalam, we want you on our team. 🚀 Let's create something amazing—hit us up!",
        responsibilities: [],
        requirements: [
          "Proficiency in Adobe Photoshop, Illustrator, and basic knowledge of After Effects or Premiere Pro is a plus.",
          "Basic understanding of design principles, color theory, and typography.",
          "Ability to take direction and work collaboratively in a fast-paced environment.",
          "Strong attention to detail and creativity.",
          "Portfolio showcasing previous work (even academic or freelance projects)."
        ]
      }
    ];
    const route = useRoute();
    const showDrawer = ref(false);
    const resumeName = ref("");
    const isSubmitting = ref(false);
    const submissionStatus = ref(null);
    const turnstileToken = ref("");
    const { resetForm: veeResetForm, setFieldValue, setFieldError, values: veeValues } = useForm();
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+91",
      currentRole: "",
      experience: "",
      message: "",
      resume: null
    });
    const countries = [
      { code: "+91", flag: "in", name: "India" },
      { code: "+1", flag: "us", name: "United States" },
      { code: "+44", flag: "gb", name: "United Kingdom" }
    ];
    const dropdownRef = ref(null);
    const isDropdownOpen = ref(false);
    const selectedCountry = ref(countries[0]);
    const selectCountry = (country) => {
      selectedCountry.value = country;
      form.countryCode = country.code;
      setFieldValue("countryCode", country.code);
      isDropdownOpen.value = false;
    };
    watch(() => selectedCountry.value, (newVal) => {
      if (newVal) {
        setFieldValue("countryCode", newVal.code);
      }
    }, { immediate: true });
    const ALLOWED_FILE_TYPES = ["application/pdf"];
    const applicationSchema = yup.object({
      firstName: yup.string().required("First name is required").matches(/^[a-zA-Z\s]*$/, "First name can only contain letters and spaces").trim(),
      lastName: yup.string().required("Last name is required").matches(/^[a-zA-Z\s]*$/, "Last name can only contain letters and spaces").trim(),
      email: yup.string().required("Email is required").email("Please enter a valid email").trim(),
      countryCode: yup.string().required("Country code is required"),
      phone: yup.string().required("Phone number is required").matches(/^\d{7,15}$/, "Enter a valid phone number (7-15 digits)").trim(),
      currentRole: yup.string().trim().optional(),
      experience: yup.string().trim().optional(),
      message: yup.string().trim().optional(),
      resume: yup.mixed().required("Resume is required").test("fileSize", "File size should not exceed 10MB", (value) => {
        return value && value.size <= MAX_FILE_SIZE;
      }).test("fileType", "Please upload a PDF file", (value) => {
        return value && ALLOWED_FILE_TYPES.includes(value.type);
      })
    });
    const handleFileUpload = (event) => {
      const input = event.target;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.size > MAX_FILE_SIZE) {
          setFieldError("resume", "File size should not exceed 10MB");
          resumeName.value = file.name + " (Too large)";
          form.resume = null;
          return;
        }
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
          setFieldError("resume", "Please upload a PDF file");
          resumeName.value = file.name + " (Invalid type)";
          form.resume = null;
          return;
        }
        form.resume = file;
        resumeName.value = file.name;
        setFieldValue("resume", file);
        setFieldError("resume", void 0);
      }
    };
    const handleSubmit = async (values) => {
      if (!turnstileToken.value) {
        submissionStatus.value = { type: "error", message: "Please complete the Turnstile verification." };
        return;
      }
      isSubmitting.value = true;
      submissionStatus.value = null;
      try {
        const csrfResponse = await fetch("/api/csrf", {
          method: "GET",
          credentials: "same-origin"
        });
        if (!csrfResponse.ok) {
          throw new Error("Failed to get CSRF token");
        }
        const { token } = await csrfResponse.json();
        const formData = new FormData();
        formData.append("name", `${values.firstName} ${values.lastName}`);
        formData.append("email", values.email);
        formData.append("phone", `${values.countryCode}${values.phone}`);
        formData.append("position", job.value.title);
        formData.append("experience", values.experience || "");
        formData.append("message", values.message || "");
        formData.append("turnstileToken", turnstileToken.value);
        if (values.resume) {
          formData.append("resume", values.resume);
        }
        const response = await fetch("/api/job-application", {
          method: "POST",
          headers: {
            "X-CSRF-Token": token
          },
          body: formData,
          credentials: "same-origin"
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Failed to submit application");
        }
        submissionStatus.value = {
          type: "success",
          message: "Application submitted successfully!"
        };
        Object.keys(form).forEach((key) => {
          form[key] = key === "countryCode" ? "+91" : "";
        });
        form.resume = null;
        resumeName.value = "";
        selectedCountry.value = countries[0];
        turnstileToken.value = "";
        veeResetForm();
        setFieldValue("countryCode", countries[0].code);
      } catch (error) {
        submissionStatus.value = {
          type: "error",
          message: error.message || "Failed to submit application. Please try again."
        };
      } finally {
        isSubmitting.value = false;
      }
    };
    const job = computed(() => {
      return jobs.find((j) => j.title.toLowerCase() === route.params.id.toString().toLowerCase()) || jobs[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtTurnstile = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8" }, _attrs))} data-v-d86901fe><div class="mb-8 flex items-center font-ninetea gap-2" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/careers",
        class: "flex items-center gap-2 text-xs text-white bg-[#232323] px-4 py-2 rounded-full font-ninetea hover:bg-[#1A1A1A] transition shadow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-left",
              class: "text-lg"
            }, null, _parent2, _scopeId));
            _push2(` Back `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:arrow-left",
                class: "text-lg"
              }),
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="max-w-4xl mx-auto" data-v-d86901fe><div data-v-d86901fe><span class="text-[#888] text-xs" data-v-d86901fe>HOME / </span><span class="text-xs text-[#888] uppercase tracking-wider" data-v-d86901fe>Career</span><span class="text-[#888] text-xs" data-v-d86901fe> / </span><span class="text-xs text-white uppercase tracking-wider" data-v-d86901fe>${ssrInterpolate(job.value.title)}</span></div><div class="flex flex-col gap-5 mb-6 mt-5" data-v-d86901fe><h1 class="text-2xl md:text-3xl font-ninetea text-white uppercase tracking-wide" data-v-d86901fe>${ssrInterpolate(job.value.title)}</h1><div class="flex gap-2" data-v-d86901fe><button class="bg-transparent border border-white text-white px-4 py-2 rounded-full flex items-center gap-2 font-ninetea text-xs hover:bg-[#1A1A1A] transition shadow" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pixel:share",
        class: "text-lg"
      }, null, _parent));
      _push(` Share </button><button class="bg-button-gradient text-white px-8 py-2 rounded-full flex items-center gap-2 font-ninetea text-base font-semibold shadow" data-v-d86901fe> Apply `);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pixelarticons:arrow-right",
        class: "text-white text-xl -rotate-45"
      }, null, _parent));
      _push(`</button></div></div><div class="rounded-xl mb-6" data-v-d86901fe><div class="flex items-center gap-2 mb-4" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pixel:info-circle",
        class: "text-white"
      }, null, _parent));
      _push(`<h2 class="text-white font-ninetea text-xl tracking-wide" data-v-d86901fe>ABOUT</h2></div><div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]" data-v-d86901fe></div><div class="flex flex-wrap gap-2 mt-5 mb-4" data-v-d86901fe><span class="flex items-center gap-1 bg-[#120033] text-white text-xs px-3 py-1 rounded-full font-ninetea" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mingcute:flash-fill",
        class: "text-white text-base"
      }, null, _parent));
      _push(` ${ssrInterpolate(job.value.experience)}+ Years Experience </span><span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:map-marker",
        class: "text-white text-base"
      }, null, _parent));
      _push(` ${ssrInterpolate(job.value.location)}</span><span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:clock-outline",
        class: "text-white text-base"
      }, null, _parent));
      _push(` ${ssrInterpolate(job.value.time)}</span></div><p class="text-[#C0C0C0] font-ninetea text-sm" data-v-d86901fe>${ssrInterpolate(job.value.description)}</p></div><div class="" data-v-d86901fe><div class="flex items-center gap-2 mb-4" data-v-d86901fe>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pixelarticons:bullseye-arrow",
        class: "text-white"
      }, null, _parent));
      _push(`<h2 class="text-white font-ninetea text-xl tracking-wide" data-v-d86901fe>REQUIREMENTS</h2></div><div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]" data-v-d86901fe></div><ul class="text-[#C0C0C0] font-ninetea text-base space-y-2 mt-5" data-v-d86901fe><!--[-->`);
      ssrRenderList(job.value.requirements, (item, idx) => {
        _push(`<li class="flex items-start gap-2" data-v-d86901fe>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "pixelarticons:sun",
          class: "text-white text-base mt-0.5"
        }, null, _parent));
        _push(`<span data-v-d86901fe>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (job.value.responsibilities.length > 0) {
        _push(`<div class="" data-v-d86901fe><div class="flex items-center gap-2 mb-4 mt-5" data-v-d86901fe>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "pixelarticons:bullseye-arrow",
          class: "text-white"
        }, null, _parent));
        _push(`<h2 class="text-white font-ninetea uppercase text-xl tracking-wide" data-v-d86901fe>responsibilities</h2></div><div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]" data-v-d86901fe></div><ul class="text-[#C0C0C0] font-ninetea text-base space-y-2 mt-5" data-v-d86901fe><!--[-->`);
        ssrRenderList(job.value.responsibilities, (item, idx) => {
          _push(`<li class="flex items-start gap-2" data-v-d86901fe>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "pixelarticons:sun",
            class: "text-white text-base mt-0.5"
          }, null, _parent));
          _push(`<span data-v-d86901fe>${ssrInterpolate(item)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(DrawerModal, {
        modelValue: showDrawer.value,
        "onUpdate:modelValue": ($event) => showDrawer.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="w-full h-full absolute top-0 left-0 object-cover" alt="job" data-v-d86901fe${_scopeId}><div class="w-full max-w-2xl mx-auto font-ninetea relative bg-transparent" data-v-d86901fe${_scopeId}><div class="text-[#BB83FF] text-lg font-ninetea mb-1" data-v-d86901fe${_scopeId}>Ready to Build the Future?</div><div class="text-white font-thin text-2xl font-nyx mb-2 tracking-wider" data-v-d86901fe${_scopeId}>DROP YOUR DETAILS BELOW.</div><div class="text-center flex gap-5 items-center py-2 rounded-md mb-3" data-v-d86901fe${_scopeId}><p class="text-sm text-gray-300 font-ninetea" data-v-d86901fe${_scopeId}>Applying for:</p><p class="text-lg text-white font-ninetea font-semibold tracking-wide" data-v-d86901fe${_scopeId}>${ssrInterpolate(job.value.title)}</p></div>`);
            _push2(ssrRenderComponent(unref(Form), {
              onSubmit: handleSubmit,
              "validation-schema": unref(applicationSchema),
              class: "w-full"
            }, {
              default: withCtx(({ errors: validationErrors, meta }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" data-v-d86901fe${_scopeId2}><div data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>First Name *</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "firstName",
                    type: "text",
                    modelValue: form.firstName,
                    "onUpdate:modelValue": ($event) => form.firstName = $event,
                    placeholder: "Enter Your First Name",
                    class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.firstName }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "firstName",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>Last Name *</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "lastName",
                    type: "text",
                    modelValue: form.lastName,
                    "onUpdate:modelValue": ($event) => form.lastName = $event,
                    placeholder: "Enter Your Last Name",
                    class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.lastName }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "lastName",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>E Mail *</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "email",
                    type: "email",
                    modelValue: form.email,
                    "onUpdate:modelValue": ($event) => form.email = $event,
                    placeholder: "Enter Your Email",
                    class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.email }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "email",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>Phone Number *</label><div class="flex gap-2 items-center" data-v-d86901fe${_scopeId2}><div class="relative" data-v-d86901fe${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "countryCode",
                    modelValue: form.countryCode,
                    "onUpdate:modelValue": ($event) => form.countryCode = $event
                  }, {
                    default: withCtx(({ field, errors: countryCodeErrors }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button type="button" class="${ssrRenderClass([{ "border-red-500": countryCodeErrors.length > 0 || validationErrors.countryCode }, "px-3 py-2 bg-[#1A1A1A] border border-[#474747] rounded text-white min-w-[90px] flex items-center justify-between focus:outline-none focus:border-[#BB83FF]"])}" data-v-d86901fe${_scopeId3}><div class="flex items-center gap-2" data-v-d86901fe${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: `flagpack:${selectedCountry.value.flag}`,
                          class: "w-5 h-5"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span data-v-d86901fe${_scopeId3}>${ssrInterpolate(selectedCountry.value.code)}</span></div>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "heroicons:chevron-down",
                          class: ["w-4 h-4 transition-transform duration-200", { "rotate-180": isDropdownOpen.value }]
                        }, null, _parent4, _scopeId3));
                        _push4(`</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => isDropdownOpen.value = !isDropdownOpen.value,
                            class: ["px-3 py-2 bg-[#1A1A1A] border border-[#474747] rounded text-white min-w-[90px] flex items-center justify-between focus:outline-none focus:border-[#BB83FF]", { "border-red-500": countryCodeErrors.length > 0 || validationErrors.countryCode }]
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
                          ], 10, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (isDropdownOpen.value) {
                    _push3(`<div class="absolute z-10 mt-1 w-full bg-[#1A1A1A] rounded-lg shadow-lg border border-[#3B2A5A] overflow-hidden" data-v-d86901fe${_scopeId2}><div class="py-1 max-h-48 overflow-auto custom-scrollbar" data-v-d86901fe${_scopeId2}><!--[-->`);
                    ssrRenderList(countries, (country) => {
                      _push3(`<button class="${ssrRenderClass([{ "bg-[#3B2A5A]": country.code === selectedCountry.value.code }, "w-full px-4 py-2 text-left text-white hover:bg-[#3B2A5A] flex items-center gap-2 transition-colors duration-150"])}" data-v-d86901fe${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: `flagpack:${country.flag}`,
                        class: "w-5 h-5"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span data-v-d86901fe${_scopeId2}>${ssrInterpolate(country.code)}</span></button>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "phone",
                    type: "tel",
                    modelValue: form.phone,
                    "onUpdate:modelValue": ($event) => form.phone = $event,
                    placeholder: "Enter Your Phone Number",
                    class: ["flex-1 bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.phone }]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "countryCode",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "phone",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>Current Role</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "currentRole",
                    type: "text",
                    modelValue: form.currentRole,
                    "onUpdate:modelValue": ($event) => form.currentRole = $event,
                    placeholder: "Enter Your Current Role",
                    class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.currentRole }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "currentRole",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>Years of Experience</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "experience",
                    type: "text",
                    modelValue: form.experience,
                    "onUpdate:modelValue": ($event) => form.experience = $event,
                    placeholder: "Enter Years of Experience",
                    class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.experience }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "experience",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mb-4" data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>Additional Information&#39;s</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    as: "textarea",
                    name: "message",
                    rows: "3",
                    modelValue: form.message,
                    "onUpdate:modelValue": ($event) => form.message = $event,
                    placeholder: "Enter Your Message",
                    class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.message }]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "message",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4" data-v-d86901fe${_scopeId2}><label class="block text-white text-sm mb-1" data-v-d86901fe${_scopeId2}>Upload Your Resume</label>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "resume",
                    modelValue: form.resume,
                    "onUpdate:modelValue": ($event) => form.resume = $event
                  }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<label for="resume-upload" class="${ssrRenderClass([{ "border-red-500": validationErrors.resume }, "block cursor-pointer bg-[#1A1A1A] border border-[#474747] rounded w-full py-6 flex flex-col items-center justify-center text-center relative hover:border-[#BB83FF] transition"])}" data-v-d86901fe${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mdi:upload",
                          class: "text-white text-2xl mb-1"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-white font-ninetea" data-v-d86901fe${_scopeId3}>Upload Your Resume</span><input id="resume-upload" type="file" accept=".pdf" class="hidden" data-v-d86901fe${_scopeId3}>`);
                        if (resumeName.value) {
                          _push4(`<span class="block text-xs text-[#BB83FF] mt-2" data-v-d86901fe${_scopeId3}>${ssrInterpolate(resumeName.value)}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</label>`);
                      } else {
                        return [
                          createVNode("label", {
                            for: "resume-upload",
                            class: ["block cursor-pointer bg-[#1A1A1A] border border-[#474747] rounded w-full py-6 flex flex-col items-center justify-center text-center relative hover:border-[#BB83FF] transition", { "border-red-500": validationErrors.resume }]
                          }, [
                            createVNode(_component_Icon, {
                              name: "mdi:upload",
                              class: "text-white text-2xl mb-1"
                            }),
                            createVNode("span", { class: "text-white font-ninetea" }, "Upload Your Resume"),
                            createVNode("input", {
                              id: "resume-upload",
                              type: "file",
                              accept: ".pdf",
                              class: "hidden",
                              onChange: (e) => {
                                handleChange(e);
                                handleFileUpload(e);
                              },
                              onBlur: handleBlur
                            }, null, 40, ["onChange", "onBlur"]),
                            resumeName.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "block text-xs text-[#BB83FF] mt-2"
                            }, toDisplayString(resumeName.value), 1)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "resume",
                    class: "text-xs text-red-500 mt-1 block"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-xs text-[#888] px-1 pt-1" data-v-d86901fe${_scopeId2}>Max: 10MB ( PDF only )</div></div><div class="text-xs text-[#888] mb-4" data-v-d86901fe${_scopeId2}> The information you submit is processed in accordance with our <a href="#" class="underline text-[#BB83FF]" data-v-d86901fe${_scopeId2}>Privacy Policy</a>. By submitting you agree to receive communications from TechBank. </div><div class="flex justify-start mb-4" data-v-d86901fe${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtTurnstile, {
                    modelValue: turnstileToken.value,
                    "onUpdate:modelValue": ($event) => turnstileToken.value = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><button type="submit" class="bg-button-gradient hover:bg-[#8501A6] text-white font-ninetea px-8 py-2 rounded-full flex items-center gap-2 text-base font-semibold shadow w-fit disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(isSubmitting.value || !turnstileToken.value || !meta.valid) ? " disabled" : ""} data-v-d86901fe${_scopeId2}>`);
                  if (isSubmitting.value) {
                    _push3(`<!--[--><svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-d86901fe${_scopeId2}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-d86901fe${_scopeId2}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-d86901fe${_scopeId2}></path></svg> Submitting... <!--]-->`);
                  } else {
                    _push3(`<!--[--> Submit `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mynaui:arrow-long-up-right",
                      class: "text-white text-xl"
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                  _push3(`</button>`);
                  if (submissionStatus.value) {
                    _push3(`<div class="${ssrRenderClass([submissionStatus.value.type === "success" ? "text-green-400" : "text-red-400", "mt-4 text-center text-sm"])}" data-v-d86901fe${_scopeId2}>${ssrInterpolate(submissionStatus.value.message)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "First Name *"),
                        createVNode(unref(Field), {
                          name: "firstName",
                          type: "text",
                          modelValue: form.firstName,
                          "onUpdate:modelValue": ($event) => form.firstName = $event,
                          placeholder: "Enter Your First Name",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.firstName }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "firstName",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Last Name *"),
                        createVNode(unref(Field), {
                          name: "lastName",
                          type: "text",
                          modelValue: form.lastName,
                          "onUpdate:modelValue": ($event) => form.lastName = $event,
                          placeholder: "Enter Your Last Name",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.lastName }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "lastName",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "E Mail *"),
                        createVNode(unref(Field), {
                          name: "email",
                          type: "email",
                          modelValue: form.email,
                          "onUpdate:modelValue": ($event) => form.email = $event,
                          placeholder: "Enter Your Email",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.email }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "email",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Phone Number *"),
                        createVNode("div", { class: "flex gap-2 items-center" }, [
                          createVNode("div", {
                            class: "relative",
                            ref_key: "dropdownRef",
                            ref: dropdownRef
                          }, [
                            createVNode(unref(Field), {
                              name: "countryCode",
                              modelValue: form.countryCode,
                              "onUpdate:modelValue": ($event) => form.countryCode = $event
                            }, {
                              default: withCtx(({ field, errors: countryCodeErrors }) => [
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => isDropdownOpen.value = !isDropdownOpen.value,
                                  class: ["px-3 py-2 bg-[#1A1A1A] border border-[#474747] rounded text-white min-w-[90px] flex items-center justify-between focus:outline-none focus:border-[#BB83FF]", { "border-red-500": countryCodeErrors.length > 0 || validationErrors.countryCode }]
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
                                ], 10, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"]),
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
                                  createVNode("div", { class: "py-1 max-h-48 overflow-auto custom-scrollbar" }, [
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
                            modelValue: form.phone,
                            "onUpdate:modelValue": ($event) => form.phone = $event,
                            placeholder: "Enter Your Phone Number",
                            class: ["flex-1 bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.phone }]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        createVNode(unref(ErrorMessage), {
                          name: "countryCode",
                          class: "text-xs text-red-500 mt-1 block"
                        }),
                        createVNode(unref(ErrorMessage), {
                          name: "phone",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Current Role"),
                        createVNode(unref(Field), {
                          name: "currentRole",
                          type: "text",
                          modelValue: form.currentRole,
                          "onUpdate:modelValue": ($event) => form.currentRole = $event,
                          placeholder: "Enter Your Current Role",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.currentRole }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "currentRole",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Years of Experience"),
                        createVNode(unref(Field), {
                          name: "experience",
                          type: "text",
                          modelValue: form.experience,
                          "onUpdate:modelValue": ($event) => form.experience = $event,
                          placeholder: "Enter Years of Experience",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.experience }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "experience",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-white text-sm mb-1" }, "Additional Information's"),
                      createVNode(unref(Field), {
                        as: "textarea",
                        name: "message",
                        rows: "3",
                        modelValue: form.message,
                        "onUpdate:modelValue": ($event) => form.message = $event,
                        placeholder: "Enter Your Message",
                        class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.message }]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      createVNode(unref(ErrorMessage), {
                        name: "message",
                        class: "text-xs text-red-500 mt-1 block"
                      })
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-white text-sm mb-1" }, "Upload Your Resume"),
                      createVNode(unref(Field), {
                        name: "resume",
                        modelValue: form.resume,
                        "onUpdate:modelValue": ($event) => form.resume = $event
                      }, {
                        default: withCtx(({ field, handleChange, handleBlur }) => [
                          createVNode("label", {
                            for: "resume-upload",
                            class: ["block cursor-pointer bg-[#1A1A1A] border border-[#474747] rounded w-full py-6 flex flex-col items-center justify-center text-center relative hover:border-[#BB83FF] transition", { "border-red-500": validationErrors.resume }]
                          }, [
                            createVNode(_component_Icon, {
                              name: "mdi:upload",
                              class: "text-white text-2xl mb-1"
                            }),
                            createVNode("span", { class: "text-white font-ninetea" }, "Upload Your Resume"),
                            createVNode("input", {
                              id: "resume-upload",
                              type: "file",
                              accept: ".pdf",
                              class: "hidden",
                              onChange: (e) => {
                                handleChange(e);
                                handleFileUpload(e);
                              },
                              onBlur: handleBlur
                            }, null, 40, ["onChange", "onBlur"]),
                            resumeName.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "block text-xs text-[#BB83FF] mt-2"
                            }, toDisplayString(resumeName.value), 1)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(ErrorMessage), {
                        name: "resume",
                        class: "text-xs text-red-500 mt-1 block"
                      }),
                      createVNode("div", { class: "text-xs text-[#888] px-1 pt-1" }, "Max: 10MB ( PDF only )")
                    ]),
                    createVNode("div", { class: "text-xs text-[#888] mb-4" }, [
                      createTextVNode(" The information you submit is processed in accordance with our "),
                      createVNode("a", {
                        href: "#",
                        class: "underline text-[#BB83FF]"
                      }, "Privacy Policy"),
                      createTextVNode(". By submitting you agree to receive communications from TechBank. ")
                    ]),
                    createVNode("div", { class: "flex justify-start mb-4" }, [
                      createVNode(_component_NuxtTurnstile, {
                        modelValue: turnstileToken.value,
                        "onUpdate:modelValue": ($event) => turnstileToken.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "bg-button-gradient hover:bg-[#8501A6] text-white font-ninetea px-8 py-2 rounded-full flex items-center gap-2 text-base font-semibold shadow w-fit disabled:opacity-50 disabled:cursor-not-allowed",
                      disabled: isSubmitting.value || !turnstileToken.value || !meta.valid
                    }, [
                      isSubmitting.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        (openBlock(), createBlock("svg", {
                          class: "animate-spin -ml-1 mr-2 h-5 w-5 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("circle", {
                            class: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                          }),
                          createVNode("path", {
                            class: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          })
                        ])),
                        createTextVNode(" Submitting... ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Submit "),
                        createVNode(_component_Icon, {
                          name: "mynaui:arrow-long-up-right",
                          class: "text-white text-xl"
                        })
                      ], 64))
                    ], 8, ["disabled"]),
                    submissionStatus.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["mt-4 text-center text-sm", submissionStatus.value.type === "success" ? "text-green-400" : "text-red-400"]
                    }, toDisplayString(submissionStatus.value.message), 3)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "w-full h-full absolute top-0 left-0 object-cover",
                alt: "job"
              }),
              createVNode("div", { class: "w-full max-w-2xl mx-auto font-ninetea relative bg-transparent" }, [
                createVNode("div", { class: "text-[#BB83FF] text-lg font-ninetea mb-1" }, "Ready to Build the Future?"),
                createVNode("div", { class: "text-white font-thin text-2xl font-nyx mb-2 tracking-wider" }, "DROP YOUR DETAILS BELOW."),
                createVNode("div", { class: "text-center flex gap-5 items-center py-2 rounded-md mb-3" }, [
                  createVNode("p", { class: "text-sm text-gray-300 font-ninetea" }, "Applying for:"),
                  createVNode("p", { class: "text-lg text-white font-ninetea font-semibold tracking-wide" }, toDisplayString(job.value.title), 1)
                ]),
                createVNode(unref(Form), {
                  onSubmit: handleSubmit,
                  "validation-schema": unref(applicationSchema),
                  class: "w-full"
                }, {
                  default: withCtx(({ errors: validationErrors, meta }) => [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "First Name *"),
                        createVNode(unref(Field), {
                          name: "firstName",
                          type: "text",
                          modelValue: form.firstName,
                          "onUpdate:modelValue": ($event) => form.firstName = $event,
                          placeholder: "Enter Your First Name",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.firstName }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "firstName",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Last Name *"),
                        createVNode(unref(Field), {
                          name: "lastName",
                          type: "text",
                          modelValue: form.lastName,
                          "onUpdate:modelValue": ($event) => form.lastName = $event,
                          placeholder: "Enter Your Last Name",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.lastName }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "lastName",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "E Mail *"),
                        createVNode(unref(Field), {
                          name: "email",
                          type: "email",
                          modelValue: form.email,
                          "onUpdate:modelValue": ($event) => form.email = $event,
                          placeholder: "Enter Your Email",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.email }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "email",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Phone Number *"),
                        createVNode("div", { class: "flex gap-2 items-center" }, [
                          createVNode("div", {
                            class: "relative",
                            ref_key: "dropdownRef",
                            ref: dropdownRef
                          }, [
                            createVNode(unref(Field), {
                              name: "countryCode",
                              modelValue: form.countryCode,
                              "onUpdate:modelValue": ($event) => form.countryCode = $event
                            }, {
                              default: withCtx(({ field, errors: countryCodeErrors }) => [
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => isDropdownOpen.value = !isDropdownOpen.value,
                                  class: ["px-3 py-2 bg-[#1A1A1A] border border-[#474747] rounded text-white min-w-[90px] flex items-center justify-between focus:outline-none focus:border-[#BB83FF]", { "border-red-500": countryCodeErrors.length > 0 || validationErrors.countryCode }]
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
                                ], 10, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"]),
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
                                  createVNode("div", { class: "py-1 max-h-48 overflow-auto custom-scrollbar" }, [
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
                            modelValue: form.phone,
                            "onUpdate:modelValue": ($event) => form.phone = $event,
                            placeholder: "Enter Your Phone Number",
                            class: ["flex-1 bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.phone }]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ]),
                        createVNode(unref(ErrorMessage), {
                          name: "countryCode",
                          class: "text-xs text-red-500 mt-1 block"
                        }),
                        createVNode(unref(ErrorMessage), {
                          name: "phone",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Current Role"),
                        createVNode(unref(Field), {
                          name: "currentRole",
                          type: "text",
                          modelValue: form.currentRole,
                          "onUpdate:modelValue": ($event) => form.currentRole = $event,
                          placeholder: "Enter Your Current Role",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.currentRole }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "currentRole",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-white text-sm mb-1" }, "Years of Experience"),
                        createVNode(unref(Field), {
                          name: "experience",
                          type: "text",
                          modelValue: form.experience,
                          "onUpdate:modelValue": ($event) => form.experience = $event,
                          placeholder: "Enter Years of Experience",
                          class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.experience }]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(unref(ErrorMessage), {
                          name: "experience",
                          class: "text-xs text-red-500 mt-1 block"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-white text-sm mb-1" }, "Additional Information's"),
                      createVNode(unref(Field), {
                        as: "textarea",
                        name: "message",
                        rows: "3",
                        modelValue: form.message,
                        "onUpdate:modelValue": ($event) => form.message = $event,
                        placeholder: "Enter Your Message",
                        class: ["w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]", { "border-red-500": validationErrors.message }]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      createVNode(unref(ErrorMessage), {
                        name: "message",
                        class: "text-xs text-red-500 mt-1 block"
                      })
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-white text-sm mb-1" }, "Upload Your Resume"),
                      createVNode(unref(Field), {
                        name: "resume",
                        modelValue: form.resume,
                        "onUpdate:modelValue": ($event) => form.resume = $event
                      }, {
                        default: withCtx(({ field, handleChange, handleBlur }) => [
                          createVNode("label", {
                            for: "resume-upload",
                            class: ["block cursor-pointer bg-[#1A1A1A] border border-[#474747] rounded w-full py-6 flex flex-col items-center justify-center text-center relative hover:border-[#BB83FF] transition", { "border-red-500": validationErrors.resume }]
                          }, [
                            createVNode(_component_Icon, {
                              name: "mdi:upload",
                              class: "text-white text-2xl mb-1"
                            }),
                            createVNode("span", { class: "text-white font-ninetea" }, "Upload Your Resume"),
                            createVNode("input", {
                              id: "resume-upload",
                              type: "file",
                              accept: ".pdf",
                              class: "hidden",
                              onChange: (e) => {
                                handleChange(e);
                                handleFileUpload(e);
                              },
                              onBlur: handleBlur
                            }, null, 40, ["onChange", "onBlur"]),
                            resumeName.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "block text-xs text-[#BB83FF] mt-2"
                            }, toDisplayString(resumeName.value), 1)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(ErrorMessage), {
                        name: "resume",
                        class: "text-xs text-red-500 mt-1 block"
                      }),
                      createVNode("div", { class: "text-xs text-[#888] px-1 pt-1" }, "Max: 10MB ( PDF only )")
                    ]),
                    createVNode("div", { class: "text-xs text-[#888] mb-4" }, [
                      createTextVNode(" The information you submit is processed in accordance with our "),
                      createVNode("a", {
                        href: "#",
                        class: "underline text-[#BB83FF]"
                      }, "Privacy Policy"),
                      createTextVNode(". By submitting you agree to receive communications from TechBank. ")
                    ]),
                    createVNode("div", { class: "flex justify-start mb-4" }, [
                      createVNode(_component_NuxtTurnstile, {
                        modelValue: turnstileToken.value,
                        "onUpdate:modelValue": ($event) => turnstileToken.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "bg-button-gradient hover:bg-[#8501A6] text-white font-ninetea px-8 py-2 rounded-full flex items-center gap-2 text-base font-semibold shadow w-fit disabled:opacity-50 disabled:cursor-not-allowed",
                      disabled: isSubmitting.value || !turnstileToken.value || !meta.valid
                    }, [
                      isSubmitting.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        (openBlock(), createBlock("svg", {
                          class: "animate-spin -ml-1 mr-2 h-5 w-5 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("circle", {
                            class: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                          }),
                          createVNode("path", {
                            class: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          })
                        ])),
                        createTextVNode(" Submitting... ")
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Submit "),
                        createVNode(_component_Icon, {
                          name: "mynaui:arrow-long-up-right",
                          class: "text-white text-xl"
                        })
                      ], 64))
                    ], 8, ["disabled"]),
                    submissionStatus.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["mt-4 text-center text-sm", submissionStatus.value.type === "success" ? "text-green-400" : "text-red-400"]
                    }, toDisplayString(submissionStatus.value.message), 3)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["validation-schema"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d86901fe"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CYefxGTW.js.map
