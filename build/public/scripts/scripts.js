(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var swapiApp = {};
var mapForm = document.createElement("form");

// wait for html to load before initializing js
$(function () {

	swapiApp.init();
});

// functions called after html load
swapiApp.init = function () {

	// call category and search click listeners
	swapiApp.listenForClicks();
};

// category & search click listener
swapiApp.listenForClicks = function () {

	var apiRootURL = 'http://swapi.co/api/';
	var apiEndPoint = "";
	var searchTerm = "";
	var interimSearchTerm = "";

	// category button click listener
	$('button.category').on('click', function () {

		// remove 'currentButton' class from all buttons
		$('button.category').removeClass('currentButton');

		// add 'currentButton' class to selected button
		$(this).addClass('currentButton');

		// set endpoint url
		var urlEnding = $(this).attr("id");
		apiEndPoint = apiRootURL + (urlEnding + "/");

		// make ajax request & pass in endpoint url
		swapiApp.getSWAPIData(apiEndPoint, searchTerm);
	});

	// search input change listener
	$('input.userInput').on('change', function (e) {
		interimSearchTerm = e.target.value;
	});

	// search submittal listener
	$('input.submit').on('click', function (e) {
		e.preventDefault();
		searchTerm = interimSearchTerm;
		swapiApp.getSWAPIData(apiEndPoint, searchTerm);
		swapiApp.loadNextPage();
	});
};

swapiApp.loadNextPage = function () {
	// mapForm.target = "Map";
	// mapForm.method = "POST"; // or "post" if appropriate
	// mapForm.action = "http://www.url.com/map.php";

	// var mapInput = document.createElement("input");
	// mapInput.type = "text";
	// mapInput.name = "addrs";
	// // mapInput.value = data;
	// mapForm.appendChild(mapInput);

	// document.getElementById('searchResults').appendChild(mapForm);

	// var map = window.open("about:blank", "_blank", "Map", "status=0,title=0,height=600,width=800,scrollbars=1");

	// if (map) {
	//     mapForm.submit();
	// } else {
	//     alert('You must allow popups for this map to work.');
	// }


	var win = window.open("details.html", '_blank');
	win.focus();
};

// make ajax request to retrieve star wars data
swapiApp.getSWAPIData = function (endPoint, search) {

	var searchTerm = "";

	if (search) {
		searchTerm = "?search=" + search;
	}

	$.ajax({
		url: endPoint + searchTerm,
		method: 'GET',
		dataType: 'json'
		// data: {
		// 	date: spaceApp.apiDateValue
		// }
	}).then(function (swapiData) {

		console.log(swapiData);

		// destructure the spaceData JSON response object
		// const {date, explanation, hdurl, title, media_type, url} = spaceData;

	});
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFdBQVcsRUFBZjtBQUNBLElBQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDs7QUFFQTtBQUNBLEVBQUUsWUFBVzs7QUFFWixVQUFTLElBQVQ7QUFDQSxDQUhEOztBQUtBO0FBQ0EsU0FBUyxJQUFULEdBQWdCLFlBQVc7O0FBRTFCO0FBQ0EsVUFBUyxlQUFUO0FBQ0EsQ0FKRDs7QUFNQTtBQUNBLFNBQVMsZUFBVCxHQUEyQixZQUFXOztBQUVyQyxLQUFJLGFBQWEsc0JBQWpCO0FBQ0EsS0FBSSxjQUFjLEVBQWxCO0FBQ0EsS0FBSSxhQUFhLEVBQWpCO0FBQ0EsS0FBSSxvQkFBb0IsRUFBeEI7O0FBRUE7QUFDQSxHQUFFLGlCQUFGLEVBQXFCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7O0FBRTNDO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixXQUFyQixDQUFpQyxlQUFqQzs7QUFFQTtBQUNBLElBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsZUFBakI7O0FBRUE7QUFDQSxNQUFJLFlBQVksRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLElBQWIsQ0FBaEI7QUFDQSxnQkFBYyxjQUFnQixTQUFoQixPQUFkOztBQUVBO0FBQ0EsV0FBUyxZQUFULENBQXNCLFdBQXRCLEVBQW1DLFVBQW5DO0FBQ0EsRUFkRDs7QUFnQkE7QUFDQSxHQUFFLGlCQUFGLEVBQXFCLEVBQXJCLENBQXdCLFFBQXhCLEVBQWtDLFVBQVMsQ0FBVCxFQUFZO0FBQzdDLHNCQUFvQixFQUFFLE1BQUYsQ0FBUyxLQUE3QjtBQUNBLEVBRkQ7O0FBSUE7QUFDQSxHQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBUyxDQUFULEVBQVk7QUFDekMsSUFBRSxjQUFGO0FBQ0EsZUFBYSxpQkFBYjtBQUNBLFdBQVMsWUFBVCxDQUFzQixXQUF0QixFQUFtQyxVQUFuQztBQUNBLFdBQVMsWUFBVDtBQUNBLEVBTEQ7QUFNQSxDQXBDRDs7QUFzQ0EsU0FBUyxZQUFULEdBQXdCLFlBQVc7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0UsS0FBSSxNQUFNLE9BQU8sSUFBUCxDQUFZLGNBQVosRUFBNEIsUUFBNUIsQ0FBVjtBQUNBLEtBQUksS0FBSjtBQUNGLENBeEJEOztBQTJCQTtBQUNBLFNBQVMsWUFBVCxHQUF3QixVQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkI7O0FBRWxELEtBQUksYUFBYSxFQUFqQjs7QUFFQSxLQUFJLE1BQUosRUFBWTtBQUNYLGVBQWEsYUFBYSxNQUExQjtBQUNBOztBQUVELEdBQUUsSUFBRixDQUFPO0FBQ04sT0FBSyxXQUFXLFVBRFY7QUFFTixVQUFRLEtBRkY7QUFHTixZQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBTk0sRUFBUCxFQU9HLElBUEgsQ0FPUSxVQUFTLFNBQVQsRUFBb0I7O0FBRTNCLFVBQVEsR0FBUixDQUFZLFNBQVo7O0FBR0E7QUFDQTs7QUFHQSxFQWhCRDtBQWlCQSxDQXpCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc3dhcGlBcHAgPSB7fTtcbnZhciBtYXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8vIHdhaXQgZm9yIGh0bWwgdG8gbG9hZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGpzXG4kKGZ1bmN0aW9uKCkge1xuXG5cdHN3YXBpQXBwLmluaXQoKTtcbn0pO1xuXG4vLyBmdW5jdGlvbnMgY2FsbGVkIGFmdGVyIGh0bWwgbG9hZFxuc3dhcGlBcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcblx0Ly8gY2FsbCBjYXRlZ29yeSBhbmQgc2VhcmNoIGNsaWNrIGxpc3RlbmVyc1xuXHRzd2FwaUFwcC5saXN0ZW5Gb3JDbGlja3MoKTtcbn1cblxuLy8gY2F0ZWdvcnkgJiBzZWFyY2ggY2xpY2sgbGlzdGVuZXJcbnN3YXBpQXBwLmxpc3RlbkZvckNsaWNrcyA9IGZ1bmN0aW9uKCkge1xuXG5cdHZhciBhcGlSb290VVJMID0gJ2h0dHA6Ly9zd2FwaS5jby9hcGkvJ1xuXHR2YXIgYXBpRW5kUG9pbnQgPSBcIlwiO1xuXHR2YXIgc2VhcmNoVGVybSA9IFwiXCI7XG5cdHZhciBpbnRlcmltU2VhcmNoVGVybSA9IFwiXCI7XG5cblx0Ly8gY2F0ZWdvcnkgYnV0dG9uIGNsaWNrIGxpc3RlbmVyXG5cdCQoJ2J1dHRvbi5jYXRlZ29yeScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gcmVtb3ZlICdjdXJyZW50QnV0dG9uJyBjbGFzcyBmcm9tIGFsbCBidXR0b25zXG5cdFx0JCgnYnV0dG9uLmNhdGVnb3J5JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnRCdXR0b24nKTtcblxuXHRcdC8vIGFkZCAnY3VycmVudEJ1dHRvbicgY2xhc3MgdG8gc2VsZWN0ZWQgYnV0dG9uXG5cdFx0JCh0aGlzKS5hZGRDbGFzcygnY3VycmVudEJ1dHRvbicpO1xuXG5cdFx0Ly8gc2V0IGVuZHBvaW50IHVybFxuXHRcdHZhciB1cmxFbmRpbmcgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcblx0XHRhcGlFbmRQb2ludCA9IGFwaVJvb3RVUkwgKyBgJHt1cmxFbmRpbmd9L2A7XG5cblx0XHQvLyBtYWtlIGFqYXggcmVxdWVzdCAmIHBhc3MgaW4gZW5kcG9pbnQgdXJsXG5cdFx0c3dhcGlBcHAuZ2V0U1dBUElEYXRhKGFwaUVuZFBvaW50LCBzZWFyY2hUZXJtKTtcblx0fSlcblxuXHQvLyBzZWFyY2ggaW5wdXQgY2hhbmdlIGxpc3RlbmVyXG5cdCQoJ2lucHV0LnVzZXJJbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0aW50ZXJpbVNlYXJjaFRlcm0gPSBlLnRhcmdldC52YWx1ZTtcblx0fSlcblxuXHQvLyBzZWFyY2ggc3VibWl0dGFsIGxpc3RlbmVyXG5cdCQoJ2lucHV0LnN1Ym1pdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2VhcmNoVGVybSA9IGludGVyaW1TZWFyY2hUZXJtO1xuXHRcdHN3YXBpQXBwLmdldFNXQVBJRGF0YShhcGlFbmRQb2ludCwgc2VhcmNoVGVybSk7XG5cdFx0c3dhcGlBcHAubG9hZE5leHRQYWdlKCk7XG5cdH0pXG59XG5cbnN3YXBpQXBwLmxvYWROZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIG1hcEZvcm0udGFyZ2V0ID0gXCJNYXBcIjtcbiAgICAvLyBtYXBGb3JtLm1ldGhvZCA9IFwiUE9TVFwiOyAvLyBvciBcInBvc3RcIiBpZiBhcHByb3ByaWF0ZVxuICAgIC8vIG1hcEZvcm0uYWN0aW9uID0gXCJodHRwOi8vd3d3LnVybC5jb20vbWFwLnBocFwiO1xuXG4gICAgLy8gdmFyIG1hcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vIG1hcElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAvLyBtYXBJbnB1dC5uYW1lID0gXCJhZGRyc1wiO1xuICAgIC8vIC8vIG1hcElucHV0LnZhbHVlID0gZGF0YTtcbiAgICAvLyBtYXBGb3JtLmFwcGVuZENoaWxkKG1hcElucHV0KTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hSZXN1bHRzJykuYXBwZW5kQ2hpbGQobWFwRm9ybSk7XG5cbiAgICAvLyB2YXIgbWFwID0gd2luZG93Lm9wZW4oXCJhYm91dDpibGFua1wiLCBcIl9ibGFua1wiLCBcIk1hcFwiLCBcInN0YXR1cz0wLHRpdGxlPTAsaGVpZ2h0PTYwMCx3aWR0aD04MDAsc2Nyb2xsYmFycz0xXCIpO1xuXG5cdC8vIGlmIChtYXApIHtcblx0Ly8gICAgIG1hcEZvcm0uc3VibWl0KCk7XG5cdC8vIH0gZWxzZSB7XG5cdC8vICAgICBhbGVydCgnWW91IG11c3QgYWxsb3cgcG9wdXBzIGZvciB0aGlzIG1hcCB0byB3b3JrLicpO1xuXHQvLyB9XG5cblxuXHQgIHZhciB3aW4gPSB3aW5kb3cub3BlbihcImRldGFpbHMuaHRtbFwiLCAnX2JsYW5rJyk7XG5cdCAgd2luLmZvY3VzKCk7XG59XG5cblxuLy8gbWFrZSBhamF4IHJlcXVlc3QgdG8gcmV0cmlldmUgc3RhciB3YXJzIGRhdGFcbnN3YXBpQXBwLmdldFNXQVBJRGF0YSA9IGZ1bmN0aW9uKGVuZFBvaW50LCBzZWFyY2gpIHtcblxuXHR2YXIgc2VhcmNoVGVybSA9IFwiXCI7XG5cblx0aWYgKHNlYXJjaCkge1xuXHRcdHNlYXJjaFRlcm0gPSBcIj9zZWFyY2g9XCIgKyBzZWFyY2g7XG5cdH1cblxuXHQkLmFqYXgoe1xuXHRcdHVybDogZW5kUG9pbnQgKyBzZWFyY2hUZXJtLFxuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0ZGF0YVR5cGU6ICdqc29uJ1xuXHRcdC8vIGRhdGE6IHtcblx0XHQvLyBcdGRhdGU6IHNwYWNlQXBwLmFwaURhdGVWYWx1ZVxuXHRcdC8vIH1cblx0fSkudGhlbihmdW5jdGlvbihzd2FwaURhdGEpIHtcblxuXHRcdGNvbnNvbGUubG9nKHN3YXBpRGF0YSk7XG5cblxuXHRcdC8vIGRlc3RydWN0dXJlIHRoZSBzcGFjZURhdGEgSlNPTiByZXNwb25zZSBvYmplY3Rcblx0XHQvLyBjb25zdCB7ZGF0ZSwgZXhwbGFuYXRpb24sIGhkdXJsLCB0aXRsZSwgbWVkaWFfdHlwZSwgdXJsfSA9IHNwYWNlRGF0YTtcblxuXHRcblx0fSlcbn1cblxuIl19
