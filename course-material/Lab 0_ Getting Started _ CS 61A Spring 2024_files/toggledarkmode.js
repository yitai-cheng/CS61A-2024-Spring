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

function onDarkModeToggleClick() {
  let checked = $("#toggle-mode-cb").is(":checked");
  try {
    localStorage.setItem("dark-mode-enabled", checked);
  } catch(error) {
    console.error(error);
  }

  let body = document.getElementById("index");
  body.classList.toggle("dark-mode-active");
  if (checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function checkForDarkMode() {
  $("#toggle-mode-cb").on("click", onDarkModeToggleClick);
  let checked = "true" == localStorage.getItem("dark-mode-enabled");
  let body = document.getElementById("index");
  if (checked) {
    body.classList.add('dark-mode-active');
  }
  $("#toggle-mode-cb").prop('checked', checked);
}

$(document).ready(checkForDarkMode);

let checked = "true" == localStorage.getItem("dark-mode-enabled");
if (checked) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

}
/*
     FILE ARCHIVED ON 15:42:07 Mar 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:03 Jul 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.465
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.023
  esindex: 0.006
  cdx.remote: 14.641
  LoadShardBlock: 184.998 (3)
  PetaboxLoader3.datanode: 150.742 (4)
  PetaboxLoader3.resolve: 508.977 (2)
  load_resource: 485.13
*/