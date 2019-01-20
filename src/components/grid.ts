import jQuery from 'jquery';

var $ = jQuery;

interface Header {
    title: string;
}

export default class Grid {

    private container: string | HTMLDivElement | JQuery;

    private data: any;

    private headers: Header[];

    constructor(container: string) {
        this.container = container;
        this.headers = [];
    }

    public setHeaders(headers: Header[]) {
        this.headers = headers;
    }

    public value(data: string) {
        this.data = data;
    }

    private getMaxSupportedCssHeight(): number {
        var supportedHeight = 1000000;
        // FF reports the height back but still renders blank after ~6M px
        var testUpTo = navigator.userAgent.toLowerCase().match(/firefox/) ? 6000000 : 1000000000;
        var div = $("<div style='display:none' />").appendTo(document.body);

        while (true) {
            var test = supportedHeight * 2;
            div.css("height", test);
            if (test > testUpTo || div.height() !== test) {
                break;
            } else {
                supportedHeight = test;
            }
        }

        div.remove();
        return supportedHeight;
    }

    private measureScrollbar() {
        var $c = $("<div style='position:absolute; top:-10000px; left:-10000px; width:100px; height:100px; overflow:scroll;'></div>").appendTo("body");
        var dim = {
            width: $c.width() - $c[0].clientWidth,
            height: $c.height() - $c[0].clientHeight
        };
        $c.remove();
        return dim;
    }


    private renderHeaders() {

        // calculate these only once and share between grid instances
        let maxSupportedCssHeight = this.getMaxSupportedCssHeight();
        let scrollbarDimensions = this.measureScrollbar();


        

        
    }

    render() {
        let $container = jQuery(this.container);
        this.renderHeaders();
        this.reloadGridData();
    }

    reloadGridData() {
        console.log("Reload Grid Data.");
    }
}

