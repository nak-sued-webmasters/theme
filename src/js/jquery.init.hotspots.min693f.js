!function(a){a(document).ready(function(){if(a(".hotspotslider").length){var b=function(b){var c=a(b).attr("class");return c=c.split(" "),c=c[1],a(".hotspot.content."+c)};a(".hotspot.spot").hover(function(){b(this).show()},function(){b(this).hide()});var c=a(".hotspotslider").width(),d=a(".hotspotslider").height(),e=a(".hotspot.spot");e.each(function(){var b=parseFloat(a(this).attr("data-xcoord")),e=parseFloat(a(this).attr("data-ycoord")),f=parseFloat(100/c*b),g=parseFloat(100/d*e);a(this).css({left:f+"%",top:g+"%"});var h=a(this).attr("class");h=h.split(" "),h=h[1];var i=a(".hotspot.content."+h).outerWidth(!0);i=parseFloat(i/2);var j=parseFloat(b-i),k=parseFloat(a(".hotspot.spot."+h).outerHeight(!0)),l=window.getComputedStyle(document.querySelector(".hotspot.content."+h),":after").getPropertyValue("border-width");l=l.split("px"),l=parseFloat(l[0]);var m=parseFloat(e+k+l);a(".hotspot.content."+h).css({top:m,left:j})}),a(".hotspot.content").css("display","none")}})}(jQuery);
//# sourceMappingURL=jquery.init.hotspots.min.js.map