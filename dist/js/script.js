!function e(t,r,n){function o(c,u){if(!r[c]){if(!t[c]){var a="function"==typeof require&&require;if(!u&&a)return a(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var f=r[c]={exports:{}};t[c][0].call(f.exports,(function(e){return o(t[c][1][e]||e)}),f,f.exports,e,t,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(e,t,r){"use strict";var n=document.querySelector(".overlay"),o=document.querySelector(".popup-window"),i=document.querySelector(".hero-info__btn"),c=o.querySelector(".popup-window__btn");function u(){o.classList.remove("active"),n.classList.remove("active")}i.addEventListener("click",(function(){o.classList.add("active"),n.classList.add("active")})),n.addEventListener("click",u),c.addEventListener("click",(function(e){e.preventDefault(),u()}))},{}]},{},[1]);