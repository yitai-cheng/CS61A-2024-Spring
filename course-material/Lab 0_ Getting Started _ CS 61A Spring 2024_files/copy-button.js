var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function copyCode(template, id) {
    const unescape = (string) => {
        const span = document.createElement("span");
        span.innerHTML = string;
        return span.innerText;
    };

    navigator.clipboard.writeText(unescape(template));
    document.getElementById(id).querySelector(".copy-tooltip span").innerText = "Copied!";
}

for (const button of document.querySelectorAll(".inline-copy-button")) {
    button.addEventListener("mouseleave", () => {
        button.querySelector(".copy-tooltip span").innerText = "Copy";
    })
}


}
/*
     FILE ARCHIVED ON 15:42:29 Mar 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:08 Jul 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.66
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.016
  esindex: 0.011
  cdx.remote: 9.387
  LoadShardBlock: 1170.234 (3)
  PetaboxLoader3.resolve: 334.925 (4)
  PetaboxLoader3.datanode: 989.828 (4)
  load_resource: 176.757
*/