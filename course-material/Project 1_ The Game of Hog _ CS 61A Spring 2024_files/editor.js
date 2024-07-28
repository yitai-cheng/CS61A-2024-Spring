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

class MonacoStorable extends Storable {
    constructor($node) {
        super($node);
        this.name = $node.attr("id");
        this.editor = $node.data("editor");
        this.lockDisposable = null;
    }

    lock() {
        this.editor.updateOptions({ readOnly: true });
        const messageContribution = this.editor.getContribution('editor.contrib.messageController');
        // due to https://github.com/microsoft/monaco-editor/issues/1873, editor.onDidAttemptReadOnlyEdit()
        // doesn't work, so we implement it manually
        this.lockDisposable = this.editor.onKeyDown((e) => {
            if (!e.ctrlKey && !e.altKey && !e.metaKey) {
                messageContribution.showMessage('You must log in to edit.', this.editor.getPosition());
            }
        });
    }

    async genConnect(network, genSave) {
        const storedVal = await network.genSavedValue(this.name);
        if (storedVal != null) {
            this.editor.getModel().setValue(storedVal, 1);
        }
        this.editor.updateOptions({ readOnly: false });
        if (this.lockDisposable) {
            this.lockDisposable.dispose();
            this.lockDisposable = null;
        }
        this.editor.onDidChangeModelContent(() => genSave(this.name, this.editor.getModel().getValue()));
    }
}

function activateEditor(template, language, id) {
    const domain = "https://web.archive.org/web/20240323154226/https://code.cs61a.org"

    const unescape = (string) => {
        const span = document.createElement("span");
        span.innerHTML = string;
        return span.innerText;
    };

    $(document.getElementById(`modal-link-${id}`)).click(() => {
        $(document.getElementById(`modal-${id}`)).modal();
    });

    require(["vs/editor/editor.main"], function () {
        const editor = monaco.editor.create(document.getElementById(id), {
            value: unescape(template),
            language,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: {
                enabled: false
            },
            theme: "vs-dark",
        });
        $(document.getElementById(id)).data("editor", editor);
        new MonacoStorable($(document.getElementById(id))).init();
        $(document.getElementById(`modal-${id}`)).on('shown.bs.modal', function () {
            const target = domain + "/embed?" + [
                "fileName=" + encodeURIComponent("Untitled"),
                "data=" + encodeURIComponent(editor.getModel().getValue().slice(0, 1024)),
                "srcOrigin=" + encodeURIComponent(window.origin),
            ].join("&");
            $(this).find('iframe').attr('src', target);
        });
        const iframeWindow = $(document.getElementById(`code-iframe-${id}`)).get(0).contentWindow;
        window.addEventListener("message", message => {
            if (message.source !== iframeWindow) {
                return;
            }
            if (message.data.requestData) {
                iframeWindow.postMessage(editor.getModel().getValue(), domain);
            } else {
                editor.getModel().setValue(message.data.data);
            }
        });
    });
}


}
/*
     FILE ARCHIVED ON 15:42:26 Mar 23, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:07 Jul 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.524
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.017
  esindex: 0.009
  cdx.remote: 7.126
  LoadShardBlock: 127.045 (3)
  PetaboxLoader3.datanode: 101.495 (4)
  PetaboxLoader3.resolve: 58.097 (2)
  load_resource: 46.502
*/