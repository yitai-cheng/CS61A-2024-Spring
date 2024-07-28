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

const network = new Network("https://web.archive.org/web/20240323154224/https://disc.cs61a.org")

class Storable {
    constructor($node) {
        this.$node = $node;
        this.$status = $node.nextAll(".storable-status").first();
        this.initialized = false;
        this.connected = false;
        this.networkReady = true;
    }

    displayNetworkReady() {
        this.$status.html("");
        $(".storable-login-status").html(
            `<p>
            You are currently logged in, so your work will be saved for you to re-visit later.
            <p>
            <button id="disc-clear-btn" class="btn btn-outline">Clear your saved answers on all worksheets</button>`);
        $(".storable-login-status").removeClass("alert-danger").addClass("alert-success");
        $("#disc-clear-btn").click(() => {
            if (window.confirm("Do you really want to clear your answers on all 61A worksheets?")) {
                this.clearStoredData();
            }
        });
    }

    async clearStoredData() {
        const success = await network.genClear();
        if (success) {
            window.location.reload();
        } else {
            this.displayNetworkNotReady();
        }
    };

    displayNetworkNotReady() {
        this.$status.html(`<a href="${network.getLoginURL()}" target="_blank">Log in to save your work!</a>`);
        $(".storable-login-status").html(
            `To be able to save your progress on this online worksheet,
            please <a href="${network.getLoginURL()}" target="_blank">log in</a>.`);
        $(".storable-login-status").removeClass("alert-success").addClass("alert-danger");
    }

    async init() {
        this.$status.html(`Loading...`);

        this.networkReady = await network.genReady();

        const genSave = async (name, value) => {
            this.$status.html("Saving...");
            const success = await network.genSave(name, value);
            if (success) {
                if (this.$status.length) {
                    this.$status.html("Saved at " + new Date() + ".");
                }
            } else {
                this.networkReady = false;
                this.displayNetworkNotReady();
                window.open(network.getLoginURL(), "_blank");
            }
        }

        if (this.networkReady) {
            this.displayNetworkReady();
            if (!this.connected) {
                await this.genConnect(network, $.debounce(1000, genSave));
                this.connected = true;
            }
        } else {
            this.displayNetworkNotReady();
        }

        if (!this.initialized) {
            window.addEventListener("focus", async () => {
                if (!this.networkReady) {
                    this.init();
                }
            });
        }
        this.initialized = true;
    }
}

class TextInputStorable extends Storable {
    constructor($node) {
        super($node);
        this.name = $node.attr("id");
    }

    lock() {
        this.$node.prop("readonly", true);
    }

    async genConnect(network, genSave) {
        const storedVal = await network.genSavedValue(this.name);
        this.$node.val(storedVal);
        this.$node.prop("readonly", false);
        const handler = () => genSave(this.name, this.$node.val())
        this.$node.on("change", handler);
        this.$node.on("keypress", handler);
        this.$node.on("blur", handler);
    }
}

$(".storable").each(function() {
    new TextInputStorable($(this)).init();
});


}
/*
     FILE ARCHIVED ON 15:42:24 Mar 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:06 Jul 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.312
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.009
  esindex: 0.005
  cdx.remote: 6.266
  LoadShardBlock: 78.703 (3)
  PetaboxLoader3.datanode: 113.246 (4)
  load_resource: 112.472
  PetaboxLoader3.resolve: 63.185
*/