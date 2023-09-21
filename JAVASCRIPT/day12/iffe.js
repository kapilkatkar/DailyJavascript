/**
 * Self callable
 * Only one time call
 * You can't call it explicitely
 */

// Before IIFE
function onUILoad() {
  console.log("UI Loaded successfully");
}

onUILoad();

// After IIFE
(() => {
  console.log("UI loaded inside IIFE");
})();

(function () {
  console.log("UI loaded inside IIFE");
})();

/**isko memory alloacte nahi hoti creation phase me */

let iffeVar = (() => {
  console.log("UI loaded inside IIFE");
})();
