(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__btn-add-avatar"),n=(document.querySelector(".pop-up__form-profile"),document.querySelector(".pop-up__form-card"),document.querySelector(".pop-up__form-avatar")),o=document.querySelector(".pop-up__user-input_info_name"),i=document.querySelector(".pop-up__user-input_info_job"),u=(document.querySelector(".pop-up__user-input_card_name"),document.querySelector(".pop-up__user-input_card_link"),document.querySelector(".profile__name-profile")),a=document.querySelector(".profile__subname-profile"),l=document.querySelector(".profile__avatar"),c=document.querySelector(".elements"),s=document.querySelector(".elements").content,f=(document.querySelector("#button-card"),document.querySelector(".pop-up__form-card")),p=document.querySelector(".pop-up__form-profile"),m={formSelector:".form",inputSelector:".form__input",labelSelector:".form__section",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:".form__input-error",errorClass:"form__input-error_active",popupInputErrorClass:"pop-up__input-error"};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function _(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}var v=_((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"_checkInputValidity",(function(e){n._isValid=e.validity.valid,n._form=e.closest(n._labelSelector),n._inputError=n._form.querySelector(n._inputSelector),n._errorElement=n._form.querySelector(n._inputErrorClass),n._isValid?n._hideInputError():n._showInputError(e.validationMessage)})),b(this,"_showInputError",(function(e){n._errorElement.textContent=e,n._errorElement.classList.add(n._errorClass),n._inputError.classList.add(n._popupInputErrorClass)})),b(this,"_hideInputError",(function(e){n._errorElement.textContent=e,n._errorElement.classList.remove(n._errorClass),n._inputError.classList.remove(n._popupInputErrorClass)})),b(this,"_toggleButtonState",(function(){n._hasNotValidInput=n._inputList.some((function(e){return!e.validity.valid})),n._hasNotValidInput?n._disableSubmitButton():(n._buttonElement.removeAttribute("disabled"),n._buttonElement.classList.remove(n._inactiveButtonClass))})),b(this,"_disableSubmitButton",(function(){n._buttonElement.setAttribute("disabled",!0),n._buttonElement.classList.add(n._inactiveButtonClass)})),b(this,"disableSubmitButtonPublic",(function(){n._disableSubmitButton(),n._inputList.forEach((function(e){e.parentNode.querySelector(n._inputErrorClass).classList.remove(n._errorClass),e.classList.remove(n._popupInputErrorClass)}))})),b(this,"enableValidation",(function(){n._inputList=Array.from(n._formElement.querySelectorAll(n._inputSelector)),n._buttonElement=n._formElement.querySelector(n._submitButtonSelector),n._toggleButtonState(),n._disableSubmitButton(),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e),n._toggleButtonState()}))}))})),this._inputSelector=t.inputSelector,this._labelSelector=t.labelSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._popupInputErrorClass=t.popupInputErrorClass,this._formElement=r}));function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function w(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}var E=function(){function e(t,r,n,o,i,u){var a,l,c,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,c=function(){s._view.remove(),s._view=null},(l=w(l="deleteElement"))in a?Object.defineProperty(a,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[l]=c,this._likes=t.likes,this._cardNameValue=t.name,this._cardLinkValue=t.link,this._id=t._id,this._cardOwner=t.owner._id,this._userId=o,this._cardTemplate=r,this._openImagePopup=n,this._requestDelete=i,this._requestLike=u,this._isLiked=t.likes.some((function(e){return e._id===s._userId}))}var t,r;return t=e,(r=[{key:"getCardElement",value:function(){return this._createCard(),this._setElementListeners(),this._visualPartCard=this._view,this._visualPartCard}},{key:"_createCard",value:function(){this._view=this._cardTemplate.cloneNode(!0).children[0],this.cardImg=this._view.querySelector(".elements__mask-group"),this.cardText=this._view.querySelector(".elements__element-text"),this.cardImg.src=this._cardLinkValue,this.cardImg.alt=this._cardNameValue,this.cardText.textContent=this._cardNameValue}},{key:"_setBtnDelete",value:function(){var e=this;this._cardOwner===this._userId?this._elementDel.addEventListener("click",(function(){return e._requestDelete(e._id)})):this._elementDel.remove()}},{key:"_setElementListeners",value:function(){var e=this;this._elementDel=this._view.querySelector(".elements__trash"),this._setBtnDelete(),this._numberOfLikes=this._view.querySelector(".elements__number-of-likes"),this._elementLike=this._view.querySelector(".elements__group"),0==this._likes.length?this._numberOfLikes.textContent=0:this._numberOfLikes.textContent=this._likes.length,this._isLiked&&this._elementLike.classList.toggle("elements__group_active"),this._elementLike.addEventListener("click",(function(){e._requestLike(e)})),this.cardImg.addEventListener("click",(function(){e._openImagePopup(e._cardNameValue,e._cardLinkValue)}))}},{key:"getId",value:function(){return{isLiked:this._isLiked,cardId:this._id}}},{key:"toggleLike",value:function(e){this._isLiked=!this._isLiked,0==e.likes.length?this._numberOfLikes.textContent=0:this._numberOfLikes.textContent=e.likes.length,this._elementLike.classList.toggle("elements__group_active")}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}var j=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;this._container.textContent="",e.reverse().forEach((function(e){var r=t._renderer(e);t.addItem(r)}))}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,I(n.key),n)}}function I(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}var C=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.closePopup()},(n=I(n="_closeByEscape"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t)}var t,r;return t=e,(r=[{key:"openPopup",value:function(){this._popup.classList.add("pop-up_active"),document.addEventListener("keyup",this._closeByEscape)}},{key:"closePopup",value:function(){this._popup.classList.remove("pop-up_active"),document.removeEventListener("keyup",this._closeByEscape)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("pop-up_active")&&e.closePopup(),t.target.classList.contains("pop-up__exit")&&e.closePopup()}))}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=x(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},B.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function V(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(o){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return V(this,e)});function u(e){var t,r=e.popupImages,n=e.img,o=e.imgInfo;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r)).popupImg=t._popup.querySelector(n),t.popuoImgInfo=t._popup.querySelector(o),t}return t=u,(r=[{key:"openPopup",value:function(e,t){this.popuoImgInfo.textContent=e,this.popupImg.src=t,this.popupImg.alt=e,B(R(u.prototype),"openPopup",this).call(this)}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,$(n.key),n)}}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=H(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},J.apply(this,arguments)}function H(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function G(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}function $(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===D(t)?t:String(t)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(o){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return G(this,e)});function u(e,t){var r,n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),n=M(r=i.call(this,e)),a=function(e){e.preventDefault();var t=r._getInputValues();r._formSubmitHandler(t),r.closePopup()},(o=$(o="_handleSubmitForm"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._formSubmitHandler=t,r._form=r._popup.querySelector(".pop-up__form"),r._formInputs=r._popup.querySelectorAll(".form__input"),r._formSave=r._form.querySelector(".pop-up__save"),r._formSaveDefault=r._formSave.textContent,r}return t=u,r=[{key:"loadElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._formSave.textContent=e?t:this._formSaveDefault}},{key:"closePopup",value:function(){J(z(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._inputValue={},this._formInputs.forEach((function(t){var r=t.name,n=t.value;e._inputValue[r]=n})),this._inputValue}},{key:"setEventListeners",value:function(){J(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitForm)}},{key:"newFormSubmitHandler",value:function(e){this._formSubmitHandler=e}}],r&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,X(n.key),n)}}function X(e){var t=function(e,t){if("object"!==Q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Q(t)?t:String(t)}var Y=function(){function e(t,r,n){var o,i,u,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,u=function(){return a._userId},(i=X(i="getUserId"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._userName=t,this._userJob=r,this._userAvatar=n}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._userAvatar.src=e.avatar,this._userId=e._id}}])&&W(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===Z(o)?o:String(o)),n)}var o}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var re=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"_returnJson",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._returnJson)}},{key:"getProfileInfo",value:function(){return this._request("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers})}},{key:"patchProfileInfo",value:function(e,t){return this._request("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"patchProfileAvatar",value:function(e){return this._request("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"addCard",value:function(e,t){return this._request("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"getCards",value:function(){return this._request("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"addLikeCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLikeCard",value:function(e){return this._request("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}}])&&ee(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-60/",headers:{authorization:"885318d6-d19f-4157-94c3-3c974e90ff3d","Content-Type":"application/json"}});Promise.all([re.getProfileInfo(),re.getCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];me.setUserInfo(o),le.renderItems(i),me.getUserId()})).catch((function(e){console.log(e)}));var ne=new v(m,f);ne.enableValidation();var oe=new v(m,p);oe.enableValidation();var ie=new v(m,n);ie.enableValidation();var ue=new A({popupImages:".popup-img",img:".pop-up__card-img",imgInfo:".pop-up__img-info"});function ae(e,t){ue.openPopup(e,t)}ue.setEventListeners();var le=new j({renderer:ye},c),ce=new K(".popup-profile",(function(e){ce.loadElement(!0),re.patchProfileInfo(e.name,e.job).then((function(e){me.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ce.loadElement(!1)}))}));ce.setEventListeners();var se=new K(".popup-card",(function(e){se.loadElement(!0),re.addCard(e.name,e.link).then((function(e){var t=ye(e);console.log(t),le.addItem(t)})).catch((function(e){console.log(e)})).finally((function(){se.loadElement(!1)}))}));se.setEventListeners();var fe=new K(".popup-avatar",(function(e){fe.loadElement(!0),re.patchProfileAvatar(e.link).then((function(e){console.log(e),me.setUserInfo(e),fe.closePopup()})).catch((function(e){console.log(e)})).finally((function(){fe.loadElement(!1)}))}));fe.setEventListeners();var pe=new K(".popup-delete-card");pe.setEventListeners();var me=new Y(u,a,l);function ye(e){var t=new E(e,s,ae,me.getUserId(),(function(e){pe.openPopup(),pe.newFormSubmitHandler((function(){re.deleteCard(e).then((function(e){pe.closePopup(),t.deleteElement()})).catch((function(e){console.log(e)}))}))}),(function(e){var t=e.getId();t.isLiked?re.deleteLikeCard(t.cardId).then((function(t){e.toggleLike(t)})).catch((function(e){console.log(e)})):re.addLikeCard(t.cardId).then((function(t){e.toggleLike(t)})).catch((function(e){console.log(e)}))}));return t.getCardElement()}e.addEventListener("click",(function(){oe.disableSubmitButtonPublic();var e=me.getUserInfo();o.value=e.name,i.value=e.job,ce.openPopup()})),t.addEventListener("click",(function(){se.openPopup(),ne.disableSubmitButtonPublic()})),r.addEventListener("click",(function(){fe.openPopup(),ie.disableSubmitButtonPublic()}))})();