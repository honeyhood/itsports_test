"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _FifteenthSale_URL, _FifteenthSale_ID, _FifteenthSale_get, _FifteenthSale_getTitleFromJson;
class FifteenthSale {
    run() {
        __classPrivateFieldGet(FifteenthSale, _a, "m", _FifteenthSale_get).call(FifteenthSale);
    }
}
_a = FifteenthSale, _FifteenthSale_get = function _FifteenthSale_get() {
    fetch(__classPrivateFieldGet(FifteenthSale, _a, "f", _FifteenthSale_URL))
        .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
        .then((resData) => __classPrivateFieldGet(FifteenthSale, _a, "m", _FifteenthSale_getTitleFromJson).call(FifteenthSale, resData))
        .then((title) => console.log(title))
        .catch(({ message }) => console.error(message));
}, _FifteenthSale_getTitleFromJson = function _FifteenthSale_getTitleFromJson(resData) {
    const itemWithTitle = resData.find((item) => item.id === __classPrivateFieldGet(FifteenthSale, _a, "f", _FifteenthSale_ID));
    const title = itemWithTitle === null || itemWithTitle === void 0 ? void 0 : itemWithTitle.title;
    console.log(title);
    return title;
};
_FifteenthSale_URL = { value: 'https://jsonplaceholder.typicode.com/posts' };
_FifteenthSale_ID = { value: 15 };
const fifteenthSale = new FifteenthSale();
fifteenthSale.run();
