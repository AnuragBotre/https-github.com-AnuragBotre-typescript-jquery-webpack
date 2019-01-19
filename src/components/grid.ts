import jQuery from 'jquery';

export default class Grid{

    private data : any;

    private headers : any;

    constructor(){
    }

    public setHeaders(headers : any) {
        this.data = headers;
    }

    public value(data : string) {
        this.data = data;
    }

    private renderHeaders(){
        console.log("render Headers.");
    }

    render() {
        this.renderHeaders();   
        this.reloadGridData();
    }

    reloadGridData(){
        console.log("Reload Grid Data.");
    }
}

