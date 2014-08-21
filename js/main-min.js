!function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd&&define("GMaps",[],t),e.GMaps=t()}(this,function(){if("object"!=typeof window.google||!window.google.maps)throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.";var t=function(e,t){var o;if(e===t)return e;for(o in t)e[o]=t[o];return e},o=function(e,t){var o;if(e===t)return e;for(o in t)void 0!=e[o]&&(e[o]=t[o]);return e},n=function(e,t){var o=Array.prototype.slice.call(arguments,2),n=[],s=e.length,r;if(Array.prototype.map&&e.map===Array.prototype.map)n=Array.prototype.map.call(e,function(e){return callback_params=o,callback_params.splice(0,0,e),t.apply(this,callback_params)});else for(r=0;s>r;r++)callback_params=o,callback_params.splice(0,0,e[r]),n.push(t.apply(this,callback_params));return n},s=function(e){var t=[],o;for(o=0;o<e.length;o++)t=t.concat(e[o]);return t},r=function(e,t){var o=e[0],n=e[1];return t&&(o=e[1],n=e[0]),new google.maps.LatLng(o,n)},i=function(e,t){var o;for(o=0;o<e.length;o++)e[o]instanceof google.maps.LatLng||(e[o]=e[o].length>0&&"object"==typeof e[o][0]?i(e[o],t):r(e[o],t));return e},a=function(e,t){var o,e=e.replace("#","");return o="jQuery"in this&&t?$("#"+e,t)[0]:document.getElementById(e)},l=function(e){var t=0,o=0;if(e.offsetParent)do t+=e.offsetLeft,o+=e.offsetTop;while(e=e.offsetParent);return[t,o]},p=function(e){"use strict";var o=document,n=function(e){if(!this)return new n(e);e.zoom=e.zoom||15,e.mapType=e.mapType||"roadmap";var s=this,r,i=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],p=["mousemove","mouseout","mouseover"],c=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],g=e.el||e.div,h=e.markerClusterer,u=google.maps.MapTypeId[e.mapType.toUpperCase()],d=new google.maps.LatLng(e.lat,e.lng),f=e.zoomControl||!0,m=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},y=m.style||"DEFAULT",v=m.position||"TOP_LEFT",w=e.panControl||!0,k=e.mapTypeControl||!0,b=e.scaleControl||!0,L=e.streetViewControl||!0,_=_||!0,P={},M={zoom:this.zoom,center:d,mapTypeId:u},x={panControl:w,zoomControl:f,zoomControlOptions:{style:google.maps.ZoomControlStyle[y],position:google.maps.ControlPosition[v]},mapTypeControl:k,scaleControl:b,streetViewControl:L,overviewMapControl:_};if(this.el="string"==typeof e.el||"string"==typeof e.div?a(g,e.context):g,"undefined"==typeof this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[s.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=e.zoom,this.registered_events={},this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=e.enableNewStyle,r=0;r<c.length;r++)delete e[c[r]];for(1!=e.disableDefaultUI&&(M=t(M,x)),P=t(M,e),r=0;r<i.length;r++)delete P[i[r]];for(r=0;r<p.length;r++)delete P[p[r]];this.map=new google.maps.Map(this.el,P),h&&(this.markerClusterer=h.apply(this,[this.map]));var C=function(e,t){var o="",n=window.context_menu[s.el.id][e];for(var r in n)if(n.hasOwnProperty(r)){var i=n[r];o+='<li><a id="'+e+"_"+r+'" href="#">'+i.title+"</a></li>"}if(a("gmaps_context_menu")){var p=a("gmaps_context_menu");p.innerHTML=o;var c=p.getElementsByTagName("a"),g=c.length,r;for(r=0;g>r;r++){var h=c[r],u=function(o){o.preventDefault(),n[this.id.replace(e+"_","")].action.apply(s,[t]),s.hideContextMenu()};google.maps.event.clearListeners(h,"click"),google.maps.event.addDomListenerOnce(h,"click",u,!1)}var d=l.apply(this,[s.el]),f=d[0]+t.pixel.x-15,m=d[1]+t.pixel.y-15;p.style.left=f+"px",p.style.top=m+"px",p.style.display="block"}};this.buildContextMenu=function(e,t){if("marker"===e){t.pixel={};var o=new google.maps.OverlayView;o.setMap(s.map),o.draw=function(){var n=o.getProjection(),s=t.marker.getPosition();t.pixel=n.fromLatLngToContainerPixel(s),C(e,t)}}else C(e,t)},this.setContextMenu=function(e){window.context_menu[s.el.id][e.control]={};var t,n=o.createElement("ul");for(t in e.options)if(e.options.hasOwnProperty(t)){var r=e.options[t];window.context_menu[s.el.id][e.control][r.name]={title:r.title,action:r.action}}n.id="gmaps_context_menu",n.style.display="none",n.style.position="absolute",n.style.minWidth="100px",n.style.background="white",n.style.listStyle="none",n.style.padding="8px",n.style.boxShadow="2px 2px 6px #ccc",o.body.appendChild(n);var i=a("gmaps_context_menu");google.maps.event.addDomListener(i,"mouseout",function(e){e.relatedTarget&&this.contains(e.relatedTarget)||window.setTimeout(function(){i.style.display="none"},400)},!1)},this.hideContextMenu=function(){var e=a("gmaps_context_menu");e&&(e.style.display="none")};var O=function(t,o){google.maps.event.addListener(t,o,function(t){void 0==t&&(t=this),e[o].apply(this,[t]),s.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var T=0;T<i.length;T++){var S=i[T];S in e&&O(this.map,S)}for(var T=0;T<p.length;T++){var S=p[T];S in e&&O(this.map,S)}google.maps.event.addListener(this.map,"rightclick",function(t){e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[s.el.id].map&&s.buildContextMenu("map",t)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var e=[],t=this.markers.length,o;for(o=0;t>o;o++)"boolean"==typeof this.markers[o].visible&&this.markers[o].visible&&e.push(this.markers[o].getPosition());this.fitLatLngBounds(e)},this.fitLatLngBounds=function(e){for(var t=e.length,o=new google.maps.LatLngBounds,n=0;t>n;n++)o.extend(e[n]);this.map.fitBounds(o)},this.setCenter=function(e,t,o){this.map.panTo(new google.maps.LatLng(e,t)),o&&o()},this.getElement=function(){return this.el},this.zoomIn=function(e){e=e||1,this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom)},this.zoomOut=function(e){e=e||1,this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom)};var z=[],j;for(j in this.map)"function"!=typeof this.map[j]||this[j]||z.push(j);for(r=0;r<z.length;r++)!function(e,t,o){e[o]=function(){return t[o].apply(t,arguments)}}(this,this.map,z[r])};return n}(this);p.prototype.createControl=function(e){var t=document.createElement("div");t.style.cursor="pointer",e.disableDefaultStyles!==!0&&(t.style.fontFamily="Roboto, Arial, sans-serif",t.style.fontSize="11px",t.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var o in e.style)t.style[o]=e.style[o];e.id&&(t.id=e.id),e.classes&&(t.className=e.classes),e.content&&(t.innerHTML=e.content),e.position&&(t.position=google.maps.ControlPosition[e.position.toUpperCase()]);for(var n in e.events)!function(t,o){google.maps.event.addDomListener(t,o,function(){e.events[o].apply(this,[this])})}(t,n);return t.index=1,t},p.prototype.addControl=function(e){var t=this.createControl(e);return this.controls.push(t),this.map.controls[t.position].push(t),t},p.prototype.removeControl=function(e){for(var t=null,o=0;o<this.controls.length;o++)this.controls[o]==e&&(t=this.controls[o].position,this.controls.splice(o,1));if(t)for(o=0;o<this.map.controls.length;o++){var n=this.map.controls[e.position];if(n.getAt(o)==e){n.removeAt(o);break}}return e},p.prototype.createMarker=function(e){if(void 0==e.lat&&void 0==e.lng&&void 0==e.position)throw"No latitude or longitude defined.";var o=this,n=e.details,s=e.fences,r=e.outside,i={position:new google.maps.LatLng(e.lat,e.lng),map:null},a=t(i,e);delete a.lat,delete a.lng,delete a.fences,delete a.outside;var l=new google.maps.Marker(a);if(l.fences=s,e.infoWindow){l.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var p=["closeclick","content_changed","domready","position_changed","zindex_changed"],c=0;c<p.length;c++)!function(t,o){e.infoWindow[o]&&google.maps.event.addListener(t,o,function(t){e.infoWindow[o].apply(this,[t])})}(l.infoWindow,p[c])}for(var g=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],h=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],c=0;c<g.length;c++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(){e[o].apply(this,[this])})}(l,g[c]);for(var c=0;c<h.length;c++)!function(t,o,n){e[n]&&google.maps.event.addListener(o,n,function(o){o.pixel||(o.pixel=t.getProjection().fromLatLngToPoint(o.latLng)),e[n].apply(this,[o])})}(this.map,l,h[c]);return google.maps.event.addListener(l,"click",function(){this.details=n,e.click&&e.click.apply(this,[this]),l.infoWindow&&(o.hideInfoWindows(),l.infoWindow.open(o.map,l))}),google.maps.event.addListener(l,"rightclick",function(t){t.marker=this,e.rightclick&&e.rightclick.apply(this,[t]),void 0!=window.context_menu[o.el.id].marker&&o.buildContextMenu("marker",t)}),l.fences&&google.maps.event.addListener(l,"dragend",function(){o.checkMarkerGeofence(l,function(e,t){r(e,t)})}),l},p.prototype.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_"))t=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";t=this.createMarker(e)}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),p.fire("marker_added",t,this),t},p.prototype.addMarkers=function(e){for(var t=0,o;o=e[t];t++)this.addMarker(o);return this.markers},p.prototype.hideInfoWindows=function(){for(var e=0,t;t=this.markers[e];e++)t.infoWindow&&t.infoWindow.close()},p.prototype.removeMarker=function(e){for(var t=0;t<this.markers.length;t++)if(this.markers[t]===e){this.markers[t].setMap(null),this.markers.splice(t,1),this.markerClusterer&&this.markerClusterer.removeMarker(e),p.fire("marker_removed",e,this);break}return e},p.prototype.removeMarkers=function(e){var t=[];if("undefined"==typeof e){for(var o=0;o<this.markers.length;o++)this.markers[o].setMap(null);this.markers=t}else{for(var o=0;o<e.length;o++)this.markers.indexOf(e[o])>-1&&this.markers[o].setMap(null);for(var o=0;o<this.markers.length;o++)null!=this.markers[o].getMap()&&t.push(this.markers[o]);this.markers=t}},p.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView,o=!0;return t.setMap(this.map),null!=e.auto_show&&(o=e.auto_show),t.onAdd=function(){var o=document.createElement("div");o.style.borderStyle="none",o.style.borderWidth="0px",o.style.position="absolute",o.style.zIndex=100,o.innerHTML=e.content,t.el=o,e.layer||(e.layer="overlayLayer");var n=this.getPanes(),s=n[e.layer],r=["contextmenu","DOMMouseScroll","dblclick","mousedown"];s.appendChild(o);for(var i=0;i<r.length;i++)!function(e,t){google.maps.event.addDomListener(e,t,function(e){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()})}(o,r[i]);e.click&&google.maps.event.addDomListener(t.el,"click",function(){e.click.apply(t,[t])}),google.maps.event.trigger(this,"ready")},t.draw=function(){var n=this.getProjection(),s=n.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0;var r=t.el,i=r.children[0],a=i.clientHeight,l=i.clientWidth;switch(e.verticalAlign){case"top":r.style.top=s.y-a+e.verticalOffset+"px";break;default:case"middle":r.style.top=s.y-a/2+e.verticalOffset+"px";break;case"bottom":r.style.top=s.y+e.verticalOffset+"px"}switch(e.horizontalAlign){case"left":r.style.left=s.x-l+e.horizontalOffset+"px";break;default:case"center":r.style.left=s.x-l/2+e.horizontalOffset+"px";break;case"right":r.style.left=s.x+e.horizontalOffset+"px"}r.style.display=o?"block":"none",o||e.show.apply(this,[r])},t.onRemove=function(){var o=t.el;e.remove?e.remove.apply(this,[o]):(t.el.parentNode.removeChild(t.el),t.el=null)},this.overlays.push(t),t},p.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break}},p.prototype.removeOverlays=function(){for(var e=0,t;t=this.overlays[e];e++)t.setMap(null);this.overlays=[]},p.prototype.drawPolyline=function(e){var t=[],o=e.path;if(o.length)if(void 0===o[0][0])t=o;else for(var n=0,s;s=o[n];n++)t.push(new google.maps.LatLng(s[0],s[1]));var r={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:!0,editable:!1,visible:!0};e.hasOwnProperty("clickable")&&(r.clickable=e.clickable),e.hasOwnProperty("editable")&&(r.editable=e.editable),e.hasOwnProperty("icons")&&(r.icons=e.icons),e.hasOwnProperty("zIndex")&&(r.zIndex=e.zIndex);for(var i=new google.maps.Polyline(r),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],l=0;l<a.length;l++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(i,a[l]);return this.polylines.push(i),p.fire("polyline_added",i,this),i},p.prototype.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++)if(this.polylines[t]===e){this.polylines[t].setMap(null),this.polylines.splice(t,1),p.fire("polyline_removed",e,this);break}},p.prototype.removePolylines=function(){for(var e=0,t;t=this.polylines[e];e++)t.setMap(null);this.polylines=[]},p.prototype.drawCircle=function(e){e=t({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e),delete e.lat,delete e.lng;for(var o=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],s=0;s<n.length;s++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(o,n[s]);return this.polygons.push(o),o},p.prototype.drawRectangle=function(e){e=t({map:this.map},e);var o=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=o;for(var n=new google.maps.Rectangle(e),s=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],r=0;r<s.length;r++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(n,s[r]);return this.polygons.push(n),n},p.prototype.drawPolygon=function(e){var o=!1;e.hasOwnProperty("useGeoJSON")&&(o=e.useGeoJSON),delete e.useGeoJSON,e=t({map:this.map},e),0==o&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=s(n(e.paths,i,o)));for(var r=new google.maps.Polygon(e),a=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],l=0;l<a.length;l++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(t){e[o].apply(this,[t])})}(r,a[l]);return this.polygons.push(r),p.fire("polygon_added",r,this),r},p.prototype.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++)if(this.polygons[t]===e){this.polygons[t].setMap(null),this.polygons.splice(t,1),p.fire("polygon_removed",e,this);break}},p.prototype.removePolygons=function(){for(var e=0,t;t=this.polygons[e];e++)t.setMap(null);this.polygons=[]},p.prototype.getFromFusionTables=function(e){var t=e.events;delete e.events;var o=e,n=new google.maps.FusionTablesLayer(o);for(var s in t)!function(e,o){google.maps.event.addListener(e,o,function(e){t[o].apply(this,[e])})}(n,s);return this.layers.push(n),n},p.prototype.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);return t.setMap(this.map),t},p.prototype.getFromKML=function(e){var t=e.url,o=e.events;delete e.url,delete e.events;var n=e,s=new google.maps.KmlLayer(t,n);for(var r in o)!function(e,t){google.maps.event.addListener(e,t,function(e){o[t].apply(this,[e])})}(s,r);return this.layers.push(s),s},p.prototype.loadFromKML=function(e){var t=this.getFromKML(e);return t.setMap(this.map),t},p.prototype.addLayer=function(e,t){t=t||{};var o;switch(e){case"weather":this.singleLayers.weather=o=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=o=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=o=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=o=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=o=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=o=new google.maps.panoramio.PanoramioLayer,o.setTag(t.filter),delete t.filter,t.click&&google.maps.event.addListener(o,"click",function(e){t.click(e),delete t.click});break;case"places":if(this.singleLayers.places=o=new google.maps.places.PlacesService(this.map),t.search||t.nearbySearch||t.radarSearch){var n={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};t.radarSearch&&o.radarSearch(n,t.radarSearch),t.search&&o.search(n,t.search),t.nearbySearch&&o.nearbySearch(n,t.nearbySearch)}if(t.textSearch){var s={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};o.textSearch(s,t.textSearch)}}return void 0!==o?("function"==typeof o.setOptions&&o.setOptions(t),"function"==typeof o.setMap&&o.setMap(this.map),o):void 0},p.prototype.removeLayer=function(e){if("string"==typeof e&&void 0!==this.singleLayers[e])this.singleLayers[e].setMap(null),delete this.singleLayers[e];else for(var t=0;t<this.layers.length;t++)if(this.layers[t]===e){this.layers[t].setMap(null),this.layers.splice(t,1);break}};var c,g;return p.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":c=google.maps.TravelMode.BICYCLING;break;case"transit":c=google.maps.TravelMode.TRANSIT;break;case"driving":c=google.maps.TravelMode.DRIVING;break;default:c=google.maps.TravelMode.WALKING}g="imperial"===e.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var o={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},n=t(o,e);n.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),n.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),n.travelMode=c,n.unitSystem=g,delete n.callback,delete n.error;var s=this,r=new google.maps.DirectionsService;r.route(n,function(t,o){if(o===google.maps.DirectionsStatus.OK){for(var n in t.routes)t.routes.hasOwnProperty(n)&&s.routes.push(t.routes[n]);e.callback&&e.callback(s.routes)}else e.error&&e.error(t,o)})},p.prototype.removeRoutes=function(){this.routes=[]},p.prototype.getElevations=function(e){e=t({locations:[],path:!1,samples:256},e),e.locations.length>0&&e.locations[0].length>0&&(e.locations=s(n([e.locations],i,!1)));var o=e.callback;delete e.callback;var r=new google.maps.ElevationService;if(e.path){var a={path:e.locations,samples:e.samples};r.getElevationAlongPath(a,function(e,t){o&&"function"==typeof o&&o(e,t)})}else delete e.path,delete e.samples,r.getElevationForLocations(e,function(e,t){o&&"function"==typeof o&&o(e,t)})},p.prototype.cleanRoute=p.prototype.removePolylines,p.prototype.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,callback:function(o){o.length>0&&(t.drawPolyline({path:o[o.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.callback&&e.callback(o[o.length-1]))}})},p.prototype.travelRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,callback:function(t){if(t.length>0&&e.start&&e.start(t[t.length-1]),t.length>0&&e.step){var o=t[t.length-1];if(o.legs.length>0)for(var n=o.legs[0].steps,s=0,r;r=n[s];s++)r.step_number=s,e.step(r,o.legs[0].steps.length-1)}t.length>0&&e.end&&e.end(t[t.length-1])}});else if(e.route&&e.route.legs.length>0)for(var t=e.route.legs[0].steps,o=0,n;n=t[o];o++)n.step_number=o,e.step(n)},p.prototype.drawSteppedRoute=function(e){var t=this;if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,error:e.error,callback:function(o){if(o.length>0&&e.start&&e.start(o[o.length-1]),o.length>0&&e.step){var n=o[o.length-1];if(n.legs.length>0)for(var s=n.legs[0].steps,r=0,i;i=s[r];r++)i.step_number=r,t.drawPolyline({path:i.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.step(i,n.legs[0].steps.length-1)}o.length>0&&e.end&&e.end(o[o.length-1])}});else if(e.route&&e.route.legs.length>0)for(var o=e.route.legs[0].steps,n=0,s;s=o[n];n++)s.step_number=n,t.drawPolyline({path:s.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.step(s)},p.Route=function(e){this.origin=e.origin,this.destination=e.destination,this.waypoints=e.waypoints,this.map=e.map,this.route=e.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length,this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}).getPath()},p.Route.prototype.getRoute=function(t){var o=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],error:t.error,callback:function(){o.route=e[0],t.callback&&t.callback.call(o)}})},p.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.pop()}},p.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.push(e[t]);this.step_count++}},p.prototype.checkGeofence=function(e,t,o){return o.containsLatLng(new google.maps.LatLng(e,t))},p.prototype.checkMarkerGeofence=function(e,t){if(e.fences)for(var o=0,n;n=e.fences[o];o++){var s=e.getPosition();this.checkGeofence(s.lat(),s.lng(),n)||t(e,n)}},p.prototype.toImage=function(e){var e=e||{},t={};if(t.size=e.size||[this.el.clientWidth,this.el.clientHeight],t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng(),this.markers.length>0){t.markers=[];for(var o=0;o<this.markers.length;o++)t.markers.push({lat:this.markers[o].getPosition().lat(),lng:this.markers[o].getPosition().lng()})}if(this.polylines.length>0){var n=this.polylines[0];t.polyline={},t.polyline.path=google.maps.geometry.encoding.encodePath(n.getPath()),t.polyline.strokeColor=n.strokeColor,t.polyline.strokeOpacity=n.strokeOpacity,t.polyline.strokeWeight=n.strokeWeight}return p.staticMapURL(t)},p.staticMapURL=function(e){function t(e,t){if("#"===e[0]&&(e=e.replace("#","0x"),t)){if(t=parseFloat(t),t=Math.min(1,Math.max(t,0)),0===t)return"0x00000000";t=(255*t).toString(16),1===t.length&&(t+=t),e=e.slice(0,8)+t}return e}var o=[],n,s="http://maps.googleapis.com/maps/api/staticmap";e.url&&(s=e.url,delete e.url),s+="?";var r=e.markers;delete e.markers,!r&&e.marker&&(r=[e.marker],delete e.marker);var i=e.styles;delete e.styles;var a=e.polyline;if(delete e.polyline,e.center)o.push("center="+e.center),delete e.center;else if(e.address)o.push("center="+e.address),delete e.address;else if(e.lat)o.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng;else if(e.visible){var l=encodeURI(e.visible.join("|"));o.push("visible="+l)}var p=e.size;p?(p.join&&(p=p.join("x")),delete e.size):p="630x300",o.push("size="+p),e.zoom||e.zoom===!1||(e.zoom=15);var c=e.hasOwnProperty("sensor")?!!e.sensor:!0;delete e.sensor,o.push("sensor="+c);for(var g in e)e.hasOwnProperty(g)&&o.push(g+"="+e[g]);if(r)for(var h,u,d=0;n=r[d];d++){h=[],n.size&&"normal"!==n.size?(h.push("size:"+n.size),delete n.size):n.icon&&(h.push("icon:"+encodeURI(n.icon)),delete n.icon),n.color&&(h.push("color:"+n.color.replace("#","0x")),delete n.color),n.label&&(h.push("label:"+n.label[0].toUpperCase()),delete n.label),u=n.address?n.address:n.lat+","+n.lng,delete n.address,delete n.lat,delete n.lng;for(var g in n)n.hasOwnProperty(g)&&h.push(g+":"+n[g]);h.length||0===d?(h.push(u),h=h.join("|"),o.push("markers="+encodeURI(h))):(h=o.pop()+encodeURI("|"+u),o.push(h))}if(i)for(var d=0;d<i.length;d++){var f=[];i[d].featureType&&f.push("feature:"+i[d].featureType.toLowerCase()),i[d].elementType&&f.push("element:"+i[d].elementType.toLowerCase());for(var m=0;m<i[d].stylers.length;m++)for(var y in i[d].stylers[m]){var v=i[d].stylers[m][y];("hue"==y||"color"==y)&&(v="0x"+v.substring(1)),f.push(y+":"+v)}var w=f.join("|");""!=w&&o.push("style="+w)}if(a){if(n=a,a=[],n.strokeWeight&&a.push("weight:"+parseInt(n.strokeWeight,10)),n.strokeColor){var k=t(n.strokeColor,n.strokeOpacity);a.push("color:"+k)}if(n.fillColor){var b=t(n.fillColor,n.fillOpacity);a.push("fillcolor:"+b)}var L=n.path;if(L.join)for(var m=0,_;_=L[m];m++)a.push(_.join(","));else a.push("enc:"+L);a=a.join("|"),o.push("path="+encodeURI(a))}var P=window.devicePixelRatio||1;return o.push("scale="+P),o=o.join("&"),s+o},p.prototype.addMapType=function(e,t){if(!t.hasOwnProperty("getTileUrl")||"function"!=typeof t.getTileUrl)throw"'getTileUrl' function required.";t.tileSize=t.tileSize||new google.maps.Size(256,256);var o=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,o)},p.prototype.addOverlayMapType=function(e){if(!e.hasOwnProperty("getTile")||"function"!=typeof e.getTile)throw"'getTile' function required.";var t=e.index;delete e.index,this.map.overlayMapTypes.insertAt(t,e)},p.prototype.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)},p.prototype.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,{name:e.styledMapName});this.map.mapTypes.set(e.mapTypeId,t)},p.prototype.setStyle=function(e){this.map.setMapTypeId(e)},p.prototype.createPanorama=function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||(e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng()),this.panorama=p.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama},p.createPanorama=function(e){var o=a(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;for(var n=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],s=t({visible:!0},e),r=0;r<n.length;r++)delete s[n[r]];for(var i=new google.maps.StreetViewPanorama(o,s),r=0;r<n.length;r++)!function(t,o){e[o]&&google.maps.event.addListener(t,o,function(){e[o].apply(this)})}(i,n[r]);return i},p.prototype.on=function(e,t){return p.on(e,this,t)},p.prototype.off=function(e){p.off(e,this)},p.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],p.on=function(e,t,o){if(-1==p.custom_events.indexOf(e))return t instanceof p&&(t=t.map),google.maps.event.addListener(t,e,o);var n={handler:o,eventName:e};return t.registered_events[e]=t.registered_events[e]||[],t.registered_events[e].push(n),n},p.off=function(e,t){-1==p.custom_events.indexOf(e)?(t instanceof p&&(t=t.map),google.maps.event.clearListeners(t,e)):t.registered_events[e]=[]},p.fire=function(e,t,o){if(-1==p.custom_events.indexOf(e))google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2));else if(e in o.registered_events)for(var n=o.registered_events[e],s=0;s<n.length;s++)!function(e,t,o){e.apply(t,[o])}(n[s].handler,o,t)},p.geolocate=function(e){var t=e.always||e.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){e.success(o),t&&t()},function(o){e.error(o),t&&t()},e.options):(e.not_supported(),t&&t())},p.geocode=function(e){this.geocoder=new google.maps.Geocoder;var t=e.callback;e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&(e.latLng=new google.maps.LatLng(e.lat,e.lng)),delete e.lat,delete e.lng,delete e.callback,this.geocoder.geocode(e,function(e,o){t(e,o)})},google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(e){for(var t=new google.maps.LatLngBounds,o=this.getPaths(),n,s=0;s<o.getLength();s++){n=o.getAt(s);for(var r=0;r<n.getLength();r++)t.extend(n.getAt(r))}return t}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(null!==t&&!t.contains(e))return!1;for(var o=!1,n=this.getPaths().getLength(),s=0;n>s;s++)for(var r=this.getPaths().getAt(s),i=r.getLength(),a=i-1,l=0;i>l;l++){var p=r.getAt(l),c=r.getAt(a);(p.lng()<e.lng()&&c.lng()>=e.lng()||c.lng()<e.lng()&&p.lng()>=e.lng())&&p.lat()+(e.lng()-p.lng())/(c.lng()-p.lng())*(c.lat()-p.lat())<e.lat()&&(o=!o),a=l}return o}),google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)},google.maps.Marker.prototype.setFences=function(e){this.fences=e},google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)},google.maps.Marker.prototype.getId=function(){return this.__gm_id},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(null==this)throw new TypeError;var t=Object(this),o=t.length>>>0;if(0===o)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&1/0!=n&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=o)return-1;for(var s=n>=0?n:Math.max(o-Math.abs(n),0);o>s;s++)if(s in t&&t[s]===e)return s;return-1}),p}),function(){var e={initialize:function(){e.buildProjects(),e.initMap(),e.setUpListeners()},settings:{currentColls:6,currentLines:4,displaced:0,currentBanner:$(),currentBannerSettings:{},bannerType:{banner1:{collPos:1,linePos:1,width:3,height:2},banner2:{collPos:3,linePos:2,width:3,height:1},banner3:{collPos:1,linePos:2,width:2,height:1},banner4:{collPos:4,linePos:3,width:2,height:1}}},setUpListeners:function(){$("#showContacts").click(e.showContacts),$(".close, #contacts ~ *").click(e.hideContacts),$(".scrollToMap").click(e.scrollToMap),$(window).resize(e.rebuildProjects),$("#more").click(e.moreProjects)},buildProjects:function(){return e.settings.currentColls=$(window).width()<1366?5:6,e.settings.currentBanner=$("#projects > ul").children("#banner1, #banner2, #banner3, #banner4"),0===e.settings.currentBanner.length?void e.ajustProjects():(e.settings.currentBannerSettings=e.settings.bannerType[e.settings.currentBanner.attr("id")],e.settings.currentBanner.width(192*e.settings.currentBannerSettings.width+35*(e.settings.currentBannerSettings.width-1)),e.settings.currentBanner.height(192*e.settings.currentBannerSettings.height+35*(e.settings.currentBannerSettings.height-1)),e.settings.displaced=e.settings.currentBannerSettings.width*e.settings.currentBannerSettings.height-1,e.replaceBanner(),e.ajustProjects(),void 0)},replaceBanner:function(){e.settings.currentBanner.detach();var t=(e.settings.currentBannerSettings.linePos-1)*e.settings.currentColls+e.settings.currentBannerSettings.collPos-1;e.settings.currentBanner.insertBefore("#projects li:eq("+t+")")},ajustProjects:function(){var t=$("#projects .show").length,o=e.settings.currentColls*e.settings.currentLines-e.settings.displaced;o>t?$("#projects li:lt("+o+")").addClass("show"):$("#projects .show:gt("+(o-1)+")").removeClass("show")},rebuildProjects:function(){$(window).width()>1366&&5===e.settings.currentColls&&(e.settings.currentColls=6,e.replaceBanner(),e.ajustProjects()),$(window).width()<1366&&6===e.settings.currentColls&&(e.settings.currentColls=5,e.replaceBanner(),e.ajustProjects())},scrollToMap:function(){e.hideContacts(),$("html, body").animate({scrollTop:$("#map").offset().top},1500)},hideContacts:function(){$("#contacts").fadeOut(300)},showContacts:function(){$("#contacts").fadeIn(300)},initMap:function(){var e=new GMaps({div:"#map",height:"495px",scrollwheel:!1,lat:59.973396,lng:30.3398016}),t=new google.maps.InfoWindow({content:"<p>Б. Сампсониевский, 61</p>"}),o=e.addMarker({lat:59.973396,lng:30.3398016,title:"Б. Сампсониевский, 61",icon:"img/marker.png",infoWindow:t});
t.open(e,o)},moreProjects:function(){var t=3*e.settings.currentColls,o=$("#projects li").length-$("#projects .show").length;console.log(t+" "+o),$.ajax({url:"/quasi-joomla.php",type:"post",dataType:"html",data:{need:t-o+1},success:function(n){console.log(n),subElmts=$(n),subElmts.appendTo("#projects ul"),e.settings.currentLines+=3,e.ajustProjects(),subElmts.length<t-o+1&&$("#more").attr({disabled:"disabled"})}})}};e.initialize()}();