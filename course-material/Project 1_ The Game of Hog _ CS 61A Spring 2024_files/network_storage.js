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

class Network {
    constructor(provider = "https://web.archive.org/web/20240323154222/https://disc.cs61a.org") {
        this.provider = provider;
        this.loadedData = null;
        this.savedDataPromise = null;
    }

    getLoginURL = () => {
        return `${this.provider}/oauth/login`
    }

    genAllSavedData = async () => {
        if (this.loadedData) {
            return this.loadedData;
        }
        try {
            if (this.savedDataPromise == null) {
                this.savedDataPromise = this.genPost("fetch");
            }
            this.loadedData = await this.savedDataPromise;
        } catch {
            return null;
        } finally {
            this.savedDataPromise = null;
        }
        return this.loadedData;
    }

    genReady = async () => {
        // clear cache
        // do not clear in-flight promise
        this.loadedData = null;
        return (await this.genAllSavedData()) != null;
    }

    genSavedValue = async (name) => {
        const loadedData = await this.genAllSavedData();
        return loadedData?.[name];
    }

    genSave = async (name, value) => {
        try {
            await this.genPost("save", {name, value});
        } catch {
            return false;
        }
        return true;
    }

    genClear = async () => {
        try {
            await this.genPost("clear");
        } catch {
            return false;
        }
        return true;
    }

    genPost = async (endpoint, payload = {}) => {
        const resp = await fetch(`${this.provider}/${endpoint}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return resp.json();
    }
}


}
/*
     FILE ARCHIVED ON 15:42:22 Mar 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:06 Jul 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.45
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.012
  esindex: 0.01
  cdx.remote: 29.701
  LoadShardBlock: 188.269 (3)
  PetaboxLoader3.datanode: 54.144 (4)
  PetaboxLoader3.resolve: 180.423 (2)
  load_resource: 377.363
*/