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

class EnvDiagramStorable extends Storable {
    constructor($node) {
        super($node);
        const $status = this.$status;
        $node.find(".env-text-storable").each(function () {
            new EnvDiagramTextInputStorable($(this), $status).init();
        });
        this.name = $node.attr("id");
        this.plumber = jsPlumb.getInstance();
        this.startConnector = null;
    }

    // plumbing utilities
    makeConnection(startConnector, endConnector) {
        this.plumber.setContainer(this.$node);
        this.plumber.connect({
            source: startConnector, target: endConnector,
            anchor: "Center", endpoint: "Blank",
            paintStyle: { strokeWidth:2 }
        });
    }

    removeConnectionsFrom(startConnector, genSave) {
        var connections = this.plumber.getConnections({source: startConnector});
        connections.forEach(this.plumber.deleteConnection);
        genSave("env-diagram-connection:" + startConnector.id, null);
    };

    resetStartConnector() {
        $(this.startConnector).removeClass("env-diagram-selected")
        this.startConnector = null;
    }

    getStorageKey(connector) {
        return "env-diagram-connection:" + connector.id;
    }

    // storable logic
    async genConnect(network, genSave) {
        const self = this;
        jsPlumb.ready(() => {
            this.$node.find(".env-diagram-frame .env-diagram-connector").each(async function() {
                const endId = await network.genSavedValue(self.getStorageKey(this));
                if (endId) {
                    self.makeConnection(this, document.getElementById(endId))
                }
            });
        });

        this.$node.find(".env-diagram-frame .env-diagram-connector").off("click.frame").on("click.frame", function() {
            if (self.startConnector === this) {
                self.resetStartConnector();
            } else {
                $(self.startConnector).removeClass("env-diagram-selected");
                $(this).addClass("env-diagram-selected");
                self.startConnector = this;
            }
        });
        this.$node.find(".env-diagram-objects .env-diagram-connector").off("click.object").on("click.object", function() {
            if (!self.startConnector) return;
            self.removeConnectionsFrom(self.startConnector, genSave);

            const endConnector = this;
            self.makeConnection(self.startConnector, endConnector);
            genSave(self.getStorageKey(self.startConnector), endConnector.id)
            self.resetStartConnector();
        });
        this.$node.find(".env-diagram-objects .env-diagram-trash").off("click.trash").on("click.trash", function() {
            if (!self.startConnector) return;
            self.removeConnectionsFrom(self.startConnector, genSave);
            self.resetStartConnector();
        });
    }
}

class EnvDiagramTextInputStorable extends TextInputStorable {
    constructor($node, $status) {
        super($node);
        this.$status = $status;
    }
}

$(".env-diagram").each(function() {
      new EnvDiagramStorable($(this)).init();
});


}
/*
     FILE ARCHIVED ON 15:42:31 Mar 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:07 Jul 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.506
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.014
  esindex: 0.011
  cdx.remote: 78.956
  LoadShardBlock: 59.605 (3)
  PetaboxLoader3.datanode: 71.819 (4)
  load_resource: 210.33
  PetaboxLoader3.resolve: 176.846
*/