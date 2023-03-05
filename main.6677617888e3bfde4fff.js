(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__btn-add-avatar"),n=(document.querySelector(".pop-up__form-profile"),document.querySelector(".pop-up__form-card"),document.querySelector(".pop-up__form-avatar")),o=document.querySelector(".pop-up__user-input_info_name"),i=document.querySelector(".pop-up__user-input_info_job"),u=(document.querySelector(".pop-up__user-input_card_name"),document.querySelector(".pop-up__user-input_card_link"),document.querySelector(".profile__name-profile")),a=document.querySelector(".profile__subname-profile"),l=document.querySelector(".profile__avatar"),c=document.querySelector(".elements"),s=document.querySelector(".elements").content,f=(document.querySelector("#button-card"),document.querySelector(".pop-up__form-card")),p=document.querySelector(".pop-up__form-profile"),y={formSelector:".form",inputSelector:".form__input",labelSelector:".form__section",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:".form__input-error",errorClass:"form__input-error_active",popupInputErrorClass:"pop-up__input-error"};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function b(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}var v=b((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_checkInputValidity",(function(e){n._isValid=e.validity.valid,n._form=e.closest(n._labelSelector),n._inputError=n._form.querySelector(n._inputSelector),n._errorElement=n._form.querySelector(n._inputErrorClass),n._isValid?n._hideInputError():n._showInputError(e.validationMessage)})),_(this,"_showInputError",(function(e){n._errorElement.textContent=e,n._errorElement.classList.add(n._errorClass),n._inputError.classList.add(n._popupInputErrorClass)})),_(this,"_hideInputError",(function(e){n._errorElement.textContent=e,n._errorElement.classList.remove(n._errorClass),n._inputError.classList.remove(n._popupInputErrorClass)})),_(this,"_toggleButtonState",(function(){n._hasNotValidInput=n._inputList.some((function(e){return!e.validity.valid})),n._hasNotValidInput?n._disableSubmitButton():(n._buttonElement.removeAttribute("disabled"),n._buttonElement.classList.remove(n._inactiveButtonClass))})),_(this,"_disableSubmitButton",(function(){n._buttonElement.setAttribute("disabled",!0),n._buttonElement.classList.add(n._inactiveButtonClass)})),_(this,"resetValidation",(function(){n._disableSubmitButton(),n._inputList.forEach((function(e){e.parentNode.querySelector(n._inputErrorClass).classList.remove(n._errorClass),e.classList.remove(n._popupInputErrorClass)}))})),_(this,"enableValidation",(function(){n._inputList=Array.from(n._formElement.querySelectorAll(n._inputSelector)),n._buttonElement=n._formElement.querySelector(n._submitButtonSelector),n._toggleButtonState(),n._disableSubmitButton(),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleButtonState()}))}))})),this._inputSelector=t.inputSelector,this._labelSelector=t.labelSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._popupInputErrorClass=t.popupInputErrorClass,this._formElement=r}));function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function w(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}var E=function(){function e(t,r,n,o,i,u){var a,l,c,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,c=function(){s._view.remove(),s._view=null},(l=w(l="deleteElement"))in a?Object.defineProperty(a,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[l]=c,this._likes=t.likes,this._cardNameValue=t.name,this._cardLinkValue=t.link,this._id=t._id,this._cardOwner=t.owner._id,this._userId=o,this._cardTemplate=r,this._openImagePopup=n,this._requestDelete=i,this._requestLike=u,this._isLiked=t.likes.some((function(e){return e._id===s._userId}))}var t,r;return t=e,(r=[{key:"getCardElement",value:function(){return this._createCard(),this._setElementListeners(),this._visualPartCard=this._view,this._visualPartCard}},{key:"_createCard",value:function(){this._view=this._cardTemplate.cloneNode(!0).children[0],this.cardImg=this._view.querySelector(".elements__mask-group"),this.cardText=this._view.querySelector(".elements__element-text"),this.cardImg.src=this._cardLinkValue,this.cardImg.alt=this._cardNameValue,this.cardText.textContent=this._cardNameValue}},{key:"_setBtnDelete",value:function(){this._cardOwner===this._userId?this._elementDel.addEventListener("click",(function(){return console.log("Eeeeee")})):this._elementDel.remove()}},{key:"_setElementListeners",value:function(){var e=this;this._elementDel=this._view.querySelector(".elements__trash"),this._setBtnDelete(),this._numberOfLikes=this._view.querySelector(".elements__number-of-likes"),this._elementLike=this._view.querySelector(".elements__group"),0==this._likes.length?this._numberOfLikes.textContent=0:this._numberOfLikes.textContent=this._likes.length,this._isLiked&&this._elementLike.classList.toggle("elements__group_active"),this._elementLike.addEventListener("click",(function(){e._requestLike(e)})),this.cardImg.addEventListener("click",(function(){e._openImagePopup(e._cardNameValue,e._cardLinkValue)}))}},{key:"getId",value:function(){return{isLiked:this._isLiked,cardId:this._id}}},{key:"toggleLike",value:function(e){this._isLiked=!this._isLiked,0==e.likes.length?this._numberOfLikes.textContent=0:this._numberOfLikes.textContent=e.likes.length,this._elementLike.classList.toggle("elements__group_active")}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var O=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;this._container.textContent="",e.reverse().forEach((function(e){var r=t._renderer(e);t.addItem(r)}))}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,C(n.key),n)}}function C(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var I=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.closePopup()},(n=C(n="_closeByEscape"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t)}var t,r;return t=e,(r=[{key:"openPopup",value:function(){this._popup.classList.add("pop-up_active"),document.addEventListener("keyup",this._closeByEscape)}},{key:"closePopup",value:function(){this._popup.classList.remove("pop-up_active"),document.removeEventListener("keyup",this._closeByEscape)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("pop-up_active")&&e.closePopup(),t.target.classList.contains("pop-up__exit")&&e.closePopup()}))}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=R(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},B.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function V(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(n);if(o){var r=U(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return V(this,e)});function u(e){var t,r=e.popupImages,n=e.img,o=e.imgInfo;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r)).popupImg=t._popup.querySelector(n),t.popuoImgInfo=t._popup.querySelector(o),t}return t=u,(r=[{key:"openPopup",value:function(e,t){this.popuoImgInfo.textContent=e,this.popupImg.src=t,this.popupImg.alt=e,B(U(u.prototype),"openPopup",this).call(this)}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(I);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,$(n.key),n)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=J(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},H.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function G(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}function $(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===D(t)?t:String(t)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(o){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return G(this,e)});function u(e,t){var r,n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),n=M(r=i.call(this,e)),a=function(e){e.preventDefault();var t=r._getInputValues();r._formSubmitHandler(t),r.closePopup()},(o=$(o="_handleSubmitForm"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._formSubmitHandler=t,r._form=r._popup.querySelector(".pop-up__form"),r._formInputs=r._popup.querySelectorAll(".form__input"),r._formSave=r._form.querySelector(".pop-up__save"),r._formSaveDefault=r._formSave.textContent,r}return t=u,r=[{key:"loadElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._formSave.textContent=e?t:this._formSaveDefault}},{key:"closePopup",value:function(){H(z(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._inputValue={},this._formInputs.forEach((function(t){var r=t.name,n=t.value;e._inputValue[r]=n})),this._inputValue}},{key:"setEventListeners",value:function(){H(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}},{key:"newFormSubmitHandler",value:function(e){this._formSubmitHandler=e}}],r&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(I);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,X(n.key),n)}}function X(e){var t=function(e,t){if("object"!==Q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Q(t)?t:String(t)}var Y=function(){function e(t,r,n){var o,i,u,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,u=function(){return a._userId},(i=X(i="getUserId"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._userName=t,this._userJob=r,this._userAvatar=n}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._userAvatar.src=e.avatar,this._userId=e._id}}])&&W(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===Z(o)?o:String(o)),n)}var o}var te=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"_returnJson",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._returnJson)}},{key:"getProfileInfo",value:function(){return this._request("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers})}},{key:"patchProfileInfo",value:function(e,t){return this._request("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"patchProfileAvatar",value:function(e){return this._request("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"addCard",value:function(e,t){return this._request("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"getCards",value:function(){return this._request("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"addLikeCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLikeCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&ee(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==re(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==re(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===re(o)?o:String(o)),n)}var o}function oe(){return oe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=ie(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},oe.apply(this,arguments)}function ie(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=le(e)););return e}function ue(e,t){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ue(e,t)}function ae(e,t){if(t&&("object"===re(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function le(e){return le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},le(e)}var ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ue(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=le(n);if(o){var r=le(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ae(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._formSubmitHandler=t,r._submitBtn=r._popup.querySelector(".pop-up__save"),console.log(r._formSubmitHandler),r}return t=u,(r=[{key:"setEventListeners",value:function(){oe(le(u.prototype),"setEventListeners",this).call(this)}},{key:"openPopup",value:function(e){oe(le(u.prototype),"openPopup",this).call(this),this._cardId=e}},{key:"test",value:function(){console.log("delete")}}])&&ne(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(I);function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var fe=new te({baseUrl:"https://nomoreparties.co/v1/cohort-60/",headers:{authorization:"885318d6-d19f-4157-94c3-3c974e90ff3d","Content-Type":"application/json"}});Promise.all([fe.getProfileInfo(),fe.getCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?se(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];we.setUserInfo(o),_e.renderItems(i)})).catch((function(e){console.log(e)}));var pe=new v(y,f);pe.enableValidation();var ye=new v(y,p);ye.enableValidation();var me=new v(y,n);me.enableValidation();var de=new A({popupImages:".popup-img",img:".pop-up__card-img",imgInfo:".pop-up__img-info"});function be(e,t){de.openPopup(e,t)}de.setEventListeners();var _e=new O({renderer:Ee},c),he=new K(".popup-profile",(function(e){he.loadElement(!0),fe.patchProfileInfo(e.name,e.job).then((function(e){we.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){he.loadElement(!1),he.closePopup()}))}));he.setEventListeners();var ve=new K(".popup-card",(function(e){ve.loadElement(!0),fe.addCard(e.name,e.link).then((function(e){var t=Ee(e);console.log(t),_e.addItem(t)})).catch((function(e){console.log(e)})).finally((function(){ve.loadElement(!1),ve.closePopup()}))}));ve.setEventListeners();var ge=new K(".popup-avatar",(function(e){ge.loadElement(!0),fe.patchProfileAvatar(e.link).then((function(e){console.log(e),we.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ge.loadElement(!1),ge.closePopup()}))}));ge.setEventListeners();var Se=new ce(".popup-delete-card",(function(){}));Se.setEventListeners(),Se.test();var we=new Y(u,a,l);function Ee(e){var t=new E(e,s,be,we.getUserId(),(function(e){Se.openPopup(),Se.newFormSubmitHandler((function(){fe.deleteCard(e).then((function(e){Se.closePopup(),t.deleteElement()})).catch((function(e){console.log(e)}))}))}),(function(e){var t=e.getId();t.isLiked?fe.deleteLikeCard(t.cardId).then((function(t){e.toggleLike(t)})).catch((function(e){console.log(e)})):fe.addLikeCard(t.cardId).then((function(t){e.toggleLike(t)})).catch((function(e){console.log(e)}))}));return t.getCardElement()}e.addEventListener("click",(function(){ye.resetValidation();var e=we.getUserInfo();o.value=e.name,i.value=e.job,he.openPopup()})),t.addEventListener("click",(function(){ve.openPopup(),pe.resetValidation()})),r.addEventListener("click",(function(){ge.openPopup(),me.resetValidation()}))})();