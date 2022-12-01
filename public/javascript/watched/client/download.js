// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dOQsC":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "696b6a4f4b149ac6";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9kB1s":[function(require,module,exports) {
var _downloadviewJs = require("../../view/client/downloadview.js");
async function initializer() {
    _downloadviewJs.initializer();
}
initializer();

},{"../../view/client/downloadview.js":"dU7kI"}],"dU7kI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayError", ()=>displayError);
/*





  */ // ================== GETTERS ============
/*





  */ // =================== HANDLERS ==========
/*





  */ // ================== INITIALIZER =========
parcelHelpers.export(exports, "initializer", ()=>initializer);
var _utilsJs = require("../../utils/utils.js");
const displayError = _utilsJs.displayError;
function initializer() {
    _utilsJs.clientSearchBar(), _utilsJs.cardsSlider(), _utilsJs.suggestPopup(), _utilsJs.clientSidebar();
    downloadMedia();
}
/*





  */ // ================== NON EXPORTING FUNCTIONS =
function downloadMedia() {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const counter = document.querySelector(".counter");
    const circle = document.querySelector(".counter__circle");
    const btn = document.getElementById("download-btn");
    let current = 10;
    circle.textContent = current;
    const id = setInterval(()=>{
        current--;
        circle.textContent = current;
    }, 1000);
    setTimeout(()=>{
        clearInterval(id);
    }, 10000);
    setTimeout(()=>{
        btn.removeAttribute("disabled");
    }, 11000);
    btn.addEventListener("click", ()=>{
        const { first  } = body.dataset;
        const { third  } = main.dataset;
        const { second  } = counter.dataset;
        const link = first + second + third;
        const a = document.createElement("a");
        a.setAttribute("href", link);
        a.setAttribute("download", "");
        a.click();
    });
}

},{"../../utils/utils.js":"bvANu","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bvANu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openPopup", ()=>openPopup);
parcelHelpers.export(exports, "closePopup", ()=>closePopup);
parcelHelpers.export(exports, "adminSidebar", ()=>adminSidebar);
parcelHelpers.export(exports, "adminSearchBar", ()=>adminSearchBar);
parcelHelpers.export(exports, "clientSearchBar", ()=>clientSearchBar);
parcelHelpers.export(exports, "cardsSlider", ()=>cardsSlider);
parcelHelpers.export(exports, "suggestPopup", ()=>suggestPopup);
parcelHelpers.export(exports, "clientSidebar", ()=>clientSidebar);
parcelHelpers.export(exports, "api_url", ()=>api_url);
parcelHelpers.export(exports, "main_url", ()=>main_url);
parcelHelpers.export(exports, "countries", ()=>countries);
parcelHelpers.export(exports, "serieStatus", ()=>serieStatus);
parcelHelpers.export(exports, "resolutions", ()=>resolutions);
parcelHelpers.export(exports, "alertResponse", ()=>alertResponse);
parcelHelpers.export(exports, "rotateBtn", ()=>rotateBtn);
parcelHelpers.export(exports, "stopRotateBtn", ()=>stopRotateBtn);
parcelHelpers.export(exports, "fillSelects", ()=>fillSelects);
parcelHelpers.export(exports, "metaQuery", ()=>metaQuery);
parcelHelpers.export(exports, "clientSearch", ()=>clientSearch);
parcelHelpers.export(exports, "noMenu", ()=>noMenu);
parcelHelpers.export(exports, "displayError", ()=>displayError);
parcelHelpers.export(exports, "structureQuery", ()=>structureQuery);
parcelHelpers.export(exports, "stringifyQuery", ()=>stringifyQuery);
parcelHelpers.export(exports, "parseQuery", ()=>parseQuery);
parcelHelpers.export(exports, "dbMovieCard", ()=>dbMovieCard);
parcelHelpers.export(exports, "notificationCard", ()=>notificationCard);
parcelHelpers.export(exports, "scheduleCard", ()=>scheduleCard);
parcelHelpers.export(exports, "movieCard", ()=>movieCard);
parcelHelpers.export(exports, "gameCard", ()=>gameCard);
var _responsiveJs = require("./responsive.js");
var _functionsJs = require("./functions.js");
var _envJs = require("./env.js");
var _domJs = require("./dom.js");
var _markupsJs = require("./markups.js");
const openPopup = _responsiveJs.openPopup;
const closePopup = _responsiveJs.closePopup;
const adminSidebar = _responsiveJs.adminSidebar;
const adminSearchBar = _responsiveJs.adminSearchBar;
const clientSearchBar = _responsiveJs.clientSearchBar;
const cardsSlider = _responsiveJs.cardsSlider;
const suggestPopup = _responsiveJs.suggestPopup;
const clientSidebar = _responsiveJs.clientSidebar;
const api_url = _envJs.api_url;
const main_url = _envJs.main_url;
const countries = _envJs.countries;
const serieStatus = _envJs.serieStatus;
const resolutions = _envJs.resolutions;
const alertResponse = _domJs.alertResponse;
const rotateBtn = _domJs.rotateBtn;
const stopRotateBtn = _domJs.stopRotateBtn;
const fillSelects = _domJs.fillSelects;
const metaQuery = _domJs.metaQuery;
const clientSearch = _domJs.clientSearch;
const noMenu = _domJs.noMenu;
const displayError = _functionsJs.displayError;
const structureQuery = _functionsJs.structureQuery;
const stringifyQuery = _functionsJs.stringifyQuery;
const parseQuery = _functionsJs.parseQuery;
const dbMovieCard = _markupsJs.dbMovieCard;
const notificationCard = _markupsJs.notificationCard;
const scheduleCard = _markupsJs.scheduleCard;
const movieCard = _markupsJs.movieCard;
const gameCard = _markupsJs.gameCard;

},{"./responsive.js":"4wcQt","./functions.js":"d2Ury","./env.js":"7qgA7","./dom.js":"gBwFC","./markups.js":"doi6o","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4wcQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * opens a popup and closes it when the dark area or close button is clicked
 * @param {String} id id of the popup element
 * @param {Function} callback a callback function to be called on popup close
 */ parcelHelpers.export(exports, "openPopup", ()=>openPopup);
//
/**
 * closes a popup
 * @param {String} id element id of the popup element
 * @param {Function} callback a callback function to be called on close
 */ parcelHelpers.export(exports, "closePopup", ()=>closePopup);
/**
 * Opens and close the admin sidebar when the menu bars on the header is clicked
 */ parcelHelpers.export(exports, "adminSidebar", ()=>adminSidebar);
parcelHelpers.export(exports, "clientSidebar", ()=>clientSidebar);
/*

- name: FTP Deploy 
  uses: SamKirkland/FTP-Deploy-Action@4.3.2

*/ /**
 * Made for devices with width under 400px.
 * Making the search bar visible when the search icon is clicked and
 * hiding it on blur
 */ parcelHelpers.export(exports, "adminSearchBar", ()=>adminSearchBar);
/**
 * Made for devices with width under 400px.
 * Making the search bar visible when the search icon is clicked and
 * hiding it on blur
 */ parcelHelpers.export(exports, "clientSearchBar", ()=>clientSearchBar);
/**
 * allows cards in a slider box to be slided to left or right
 */ parcelHelpers.export(exports, "cardsSlider", ()=>cardsSlider);
/**
 * Opens the popup for suggestions
 */ parcelHelpers.export(exports, "suggestPopup", ()=>suggestPopup);
function openPopup(id, callback) {
    const pid = `#${id}`;
    const popup = document.querySelector(pid);
    const closeBtn = popup.querySelector(".popup-close");
    // opening the popup
    popup.classList.remove("display-off");
    // closing the popup when the close button is clicked
    closeBtn.addEventListener("click", (e)=>{
        popup.classList.add("display-off");
        if (callback) callback();
    });
    // closing popup when the dark area is clicked
    popup.addEventListener("click", (e)=>{
        const box = e.target.closest(".popup-box");
        if (box) return;
        popup.classList.add("display-off");
        if (callback) callback();
    });
}
function closePopup(id, callback = null) {
    const pid = `#${id}`;
    const popup = document.querySelector(pid);
    popup.classList.add("display-off");
    if (callback) callback();
}
function adminSidebar() {
    const menuBar = document.getElementById("dashboard-menubar");
    menuBar && menuBar.addEventListener("click", (e)=>{
        const sidebar = document.getElementById("dashboard-sidebar");
        if (!sidebar) return;
        sidebar.on;
        // checking if sidebar is already open
        const isOpen = sidebar.dataset.isOpen;
        // closing sidebar
        if (isOpen == "true") {
            sidebar.style.left = "-100%";
            sidebar.dataset.isOpen = false;
        }
        // opening the sidebar
        if (!isOpen || isOpen == "false") {
            sidebar.style.left = "0";
            sidebar.dataset.isOpen = true;
        }
    });
}
function clientSidebar() {
    const bars = document.getElementById("menu-bar");
    const close = document.getElementById("close-sidebar");
    const sidebar = document.getElementById("sidebar");
    bars && bars.addEventListener("click", ()=>{
        if (sidebar) sidebar.style.left = "0";
    });
    close && close.addEventListener("click", ()=>{
        if (sidebar) sidebar.style.left = "-100%";
    });
}
function adminSearchBar() {
    const searchBtn = document.getElementById("search-button");
    const logo = document.querySelector(".dashboard-header__logo");
    const user = document.querySelector(".dashboard-header__user");
    const searchBar = document.getElementById("search-bar");
    // making searh visible and hiding logo and username
    searchBtn && searchBtn.addEventListener("click", (e)=>{
        logo.style.display = "none";
        user.style.display = "none";
        searchBtn.style.display = "none";
        searchBar.style.display = "initial";
        searchBar.focus();
    });
    // hiding searchbar and unhiding logo and username
    searchBar && searchBar.addEventListener("blur", ()=>{
        if (window.innerWidth < 400 && searchBar.value.length < 1) {
            logo.style.display = "initial";
            user.style.display = "initial";
            searchBtn.style.display = "initial";
            searchBar.style.display = "none";
        }
    });
}
function clientSearchBar() {
    const searchBtn = document.getElementById("search-button");
    const logo = document.querySelector(".header__logo");
    const user = document.querySelector(".main-titles");
    const searchBar = document.getElementById("search-bar");
    // making searh visible and hiding logo and username
    searchBtn && searchBtn.addEventListener("click", (e)=>{
        logo.style.display = "none";
        user.style.display = "none";
        searchBtn.style.display = "none";
        searchBar.style.display = "initial";
        searchBar.focus();
    });
    // hiding searchbar and unhiding logo and username
    searchBar && searchBar.addEventListener("blur", ()=>{
        if (window.innerWidth < 600 && searchBar.value.length < 1) {
            logo.style.display = "flex";
            user.style.display = "initial";
            searchBtn.style.display = "initial";
            searchBar.style.display = "none";
        }
    });
}
function cardsSlider() {
    const body = document.querySelector("body");
    body.addEventListener("click", (e)=>{
        const { target  } = e;
        if (!target.classList.contains("slider-btn")) return;
        const box = target.parentElement.querySelector(".slider__container");
        const leftBtn = target.classList.contains("slider-btn--left");
        // finding the distance to scroll by
        let scrollLength = window.innerWidth;
        scrollLength = scrollLength > 599 ? 0.7 * scrollLength : 0.9 * scrollLength;
        scrollLength = leftBtn ? -scrollLength : scrollLength;
        // scrolling the element
        box.scrollBy({
            behavior: "smooth",
            left: scrollLength
        });
    });
}
function suggestPopup() {
    const body = document.querySelector("body");
    body.addEventListener("click", (e)=>{
        if (e.target.classList.contains("suggest")) openPopup("suggest-popup");
        if (e.target.classList.contains("problem")) openPopup("problem-popup");
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d2Ury":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * displays an error on the interface and stop a button from totating
 * @param {Object} error error to be executed
 * @param {String} btnid id of a button that is rotating if any
 * @param {String} type btn-black, btn-primary etc
 */ parcelHelpers.export(exports, "displayError", ()=>displayError);
/**
 * takes a search value, gets a meta data of a query from the body element, sets the meta data to body
 * @param {String} search search value
 * @returns query in String (query string)
 */ parcelHelpers.export(exports, "structureQuery", ()=>structureQuery);
parcelHelpers.export(exports, "stringifyQuery", ()=>stringifyQuery);
parcelHelpers.export(exports, "parseQuery", ()=>parseQuery);
var _domJs = require("./dom.js");
function displayError(error, btnid, type) {
    console.log(error);
    const message = error.message;
    _domJs.alertResponse(message, 6, "failed");
    if (btnid) _domJs.stopRotateBtn(btnid, type);
}
function structureQuery(search) {
    let query;
    if (search) query = {
        text
    };
    else {
        query = _domJs.metaQuery();
        const { page , limit , total  } = query;
        query.page = page + 1;
    }
    const queryString = Object.entries(query).map(([key, value])=>`${key}=${value}`).join("&");
    return `?${queryString}`;
}
function stringifyQuery(query) {
    const queryString = Object.entries(query).map(([key, value])=>`${key}=${value}`).join("&");
    return `?${queryString}`;
}
function parseQuery(queryString) {
    const query = {};
    const queries = queryString.slice(1).split("&");
    queries.forEach((q)=>{
        const a = q.split("=");
        query[a[0]] = a[1];
    });
    return query;
}

},{"./dom.js":"gBwFC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gBwFC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noMenu", ()=>noMenu);
/**
 * display a message on an alert box on the surface
 * @param {String} message the message to display in the alert box
 * @param {Strng} timer the time for the alert box to disappear from surface
 * @param {String} type success, failed,
 */ parcelHelpers.export(exports, "alertResponse", ()=>alertResponse);
//
/**
 * taked the id of a button and rotates it
 * @param {String} btnid id of the button to ratate
 * @param {String} type of button
 * @returns null - breakpoints
 */ parcelHelpers.export(exports, "rotateBtn", ()=>rotateBtn);
//
/**
 * takes the id of a button and stops it from rotating
 * @param {String} btnid id of the button to rotate
 * @param {String} type the type of button
 * @returns null - breakpoints
 */ parcelHelpers.export(exports, "stopRotateBtn", ()=>stopRotateBtn);
//
/**
 * fills the select element
 * @param {String} selectId id of the select Element
 * @param {String} variables the environment variable to fill the select
 */ parcelHelpers.export(exports, "fillSelects", ()=>fillSelects);
/**
 * takes in a query meta data and set it to body dataset. If no query is supplied, it gets the current meta data from the body
 * @param {Object} query the meta query to be set to the body element
 * @returns Object, meta of a query
 */ parcelHelpers.export(exports, "metaQuery", ()=>metaQuery);
parcelHelpers.export(exports, "clientSearch", ()=>clientSearch);
// import * as env from './env.js';
var _utilsJs = require("./utils.js");
function noMenu() {
    const body = document.querySelector("body");
    body.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
    });
}
function alertResponse(message, timer = 3, type = "success") {
    const markup = `
    <div class="message message--${type}">
      <div class="message__cover">
        <p>${message}</p>
      </div>
    </div>
  `;
    const body = document.querySelector("body");
    // inserting the element into the body
    body.insertAdjacentHTML("afterbegin", markup);
    const alerter = document.querySelector(".message");
    // showing in the message
    setTimeout(()=>{
        alerter.classList.add("message--in");
    }, 500);
    // taking out the message
    setTimeout(()=>{
        alerter.classList.remove("message--in");
    }, (timer + 1) * 1000);
    // removing the message element from the body element
    setTimeout(()=>{
        body.removeChild(alerter);
    }, timer * 1000 + 1500);
}
function rotateBtn(btnid, type = "btn-black") {
    const btn = document.getElementById(btnid);
    if (type === "btn-black") {
        btn.classList.add("btn-black--rotate");
        return;
    }
    if (type === "btn-primary") {
        btn.classList.add("btn-primary--rotate");
        return;
    }
    if (type === "btn-primary--alt") {
        btn.classList.add("btn-primary--alt--rotate");
        return;
    }
    if (type === "btn-secondary") {
        btn.classList.add("btn-secondary--rotate");
        return;
    }
    if (type === "btn-secondary--alt") {
        btn.classList.add("btn-secondary--alt--rotate");
        return;
    }
}
function stopRotateBtn(btnid, type = "btn-black") {
    const btn = document.getElementById(btnid);
    if (type === "btn-black") {
        btn.classList.remove("btn-black--rotate");
        return;
    }
    if (type === "btn-primary") {
        btn.classList.remove("btn-primary--rotate");
        return;
    }
    if (type === "btn-primary--alt") {
        btn.classList.remove("btn-primary--alt--rotate");
        return;
    }
    if (type === "btn-secondary") {
        btn.classList.remove("btn-secondary--rotate");
        return;
    }
    if (type === "btn-secondary--alt") {
        btn.classList.remove("btn-secondary--alt--rotate");
        return;
    }
}
function fillSelects(selectId, variables, clear = true, list) {
    const select = document.getElementById(selectId);
    if (!select) return console.warn("blaciris - select element not on this page - ", selectId);
    const { value  } = select.dataset;
    const vars = list || _utilsJs[variables];
    if (clear) select.innerHTML = "";
    vars.forEach((v)=>{
        const markup = `<option value='${v}' ${v === value ? "selected" : ""}>${v}</option>`;
        select.insertAdjacentHTML("beforeend", markup);
    });
}
function metaQuery(query) {
    const body = document.querySelector("body");
    if (query) {
        body.dataset.meta = JSON.stringify(query);
        return;
    }
    const meta = JSON.parse(body.dataset.meta);
    return meta;
}
function clientSearch(type = "movie") {
    const form = document.getElementById("client-search");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const { value  } = form.querySelector("input");
        if (!value) return;
        window.location.assign(`/${type}s?text=${value.split(" ").join("-")}`);
    });
}

},{"./utils.js":"bvANu","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7qgA7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "api_url", ()=>api_url);
parcelHelpers.export(exports, "main_url", ()=>main_url);
parcelHelpers.export(exports, "countries", ()=>countries);
parcelHelpers.export(exports, "serieStatus", ()=>serieStatus);
parcelHelpers.export(exports, "resolutions", ()=>resolutions);
const api_url = "http://localhost:2000/v1";
const main_url = "http://localhost:2500";
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Caribbean Netherlands",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cura\xe7ao",
    "Cyprus",
    "Czechia",
    "DR Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern and Antarctic Lands",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Korea",
    "North Macedonia",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn Islands",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of the Congo",
    "Romania",
    "Russia",
    "Rwanda",
    "R\xe9union",
    "Saint Barth\xe9lemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syria",
    "S\xe3o Tom\xe9 and Pr\xedncipe",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "United States Virgin Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "\xc5land Islands", 
];
const serieStatus = [
    "ongoing",
    "ended",
    "paused",
    "stopped"
];
const resolutions = [
    "1",
    "360",
    "480",
    "720",
    "1080",
    "2160",
    "10000"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"doi6o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dbMovieCard", ()=>dbMovieCard);
parcelHelpers.export(exports, "notificationCard", ()=>notificationCard);
//
parcelHelpers.export(exports, "scheduleCard", ()=>scheduleCard);
parcelHelpers.export(exports, "movieCard", ()=>movieCard);
parcelHelpers.export(exports, "gameCard", ()=>gameCard);
function dbMovieCard(movie, type = "movie") {
    const markup = `
  <div class="dbmovie-card" data-card-id="${movie.id}">
    <div class="dbmovie-card__image">
      <img src="${movie.landscape}" alt="${movie.title}" />
    </div>
    <div class="dbmovie-card__info">
      <h2>
        ${movie.title} -
        <span><i class="fas fa-star"></i> ${movie.rating}</span>
      </h2>
      <p>${movie.description}</p>
    </div>
    <div class="dbmovie-card__buttons">
    <a href="/${type}/${movie.id}" title="view"><i class="fas fa-eye"></i></a>
    <a href="/dashboard/update${type}/${movie.id}" title="edit"><i class="far fa-edit"></i></a>
    <a title="delete"><i class="fas fa-trash delete-item"></i></a>
  </div>
  </div>
  `;
    return markup;
}
function notificationCard(note) {
    const markup = `
  <div class="notification-card" data-notification-id="${note.id}">
  <div class="notification-card__cover">
    <div class="notification-card__notification">
      <h2> ${note.on} </h2>
      <p>${note.message} </p>
    </div>
    <div class="notification-card__buttons">
      <a title="marked unviewed"><i class="fas fa-eye-slash"></i></a>
      <a title="delete"><i class="fas fa-trash delete-item"></i></a>
    </div>
  </div>
</div>
  `;
    return markup;
}
function scheduleCard(schedule) {
    const time = new Date(schedule.date).getTime();
    const timeNow = Date.now();
    const date = new Date(schedule.date).toLocaleDateString(undefined, {
        weekday: "short",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
    const due = time <= timeNow ? `
  <div class="schedule-card__time schedule-card__time--due">
    <span>${date}</span>
  </div>
  ` : "";
    const markup = `
  <div class="schedule-card"  data-schedule-id="${schedule.id}">
    <div class="schedule-card__cover">
      <div class="schedule-card__schedule">
        <h2>${date}</h2>
        <p>${schedule.message}</p>
      </div>
      <div class="schedule-card__buttons">
        <a title="marked unviewed"><i class="fas fa-eye-slash"></i></a>
        <a href="/dashboard/updateschedule/${schedule.id}", title="edit"><i class="far fa-edit"></i></a>
        <a title="delete"><i class="fas fa-trash delete-item"></i></a>
      </div>
    </div>
    ${due}
  </div>
  `;
    return markup;
}
function movieCard(movie, type) {
    const markup = `
    <div class="movie-card card-game">
      <a href="/${type}/${movie.title.toLowerCase().split(" ").join("-")}/${movie.id}">
        <img src="${movie.portrait}" alt="${movie.title}" />
        <h2>
          ${movie.title}
          <span><i class="fas fa-star"></i> ${movie.rating}</span>
        </h2>
      </a>
    </div>
  `;
    return markup;
}
function gameCard(game) {
    const markup = `
    <div class="game-card">
      <a href="/game/${game.title.toLowerCase().split(" ").join("-")}/${game.id}" class="game-card__cover">
        <div class="game-card__image" style="background-image: url(${game.landscape})"></div>
        <div class="game-card__title">${game.title}</div>
      </a>
    </div>
  `;
    return markup;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["dOQsC","9kB1s"], "9kB1s", "parcelRequire517a")

