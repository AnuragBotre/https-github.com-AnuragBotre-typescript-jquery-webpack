import jQuery from 'jquery';
import GoldenLayout from 'golden-layout';
import {Slick} from '../types/slickgrid/SlickGrid';

var $ = jQuery;

jQuery.ajax("test.html", {
    method: "post",
    data: {
        param1: "",
        param2: ""
    }
}).then((data, status, jQxhr) => {
    alert("here");
}).fail((data, test1, test2) => {
    console.log(data);
    console.log(test1);
    console.log(test2);
});


let configuration: GoldenLayout.Config = {
    content: [{
        type: 'column',
        content: [
            {
                type: 'component',
                componentName: 'gridSection',
                componentState: { text: 'Component 1' }
            },
            {
                type: 'component',
                componentName: 'example',
                componentState: { text: 'Component 2' }
            },
            {
                type: 'component',
                componentName: 'example',
                componentState: { text: 'Component 3' }
            }
        ]
    }]
};


let layout = new GoldenLayout(configuration);

layout.registerComponent('gridSection',function(container : any,state : any){

    //TODO :- This needs to be fixed.
    let s : Slick.Grid<any> = new Slick.Grid('abc',[],[],{});
    s.render();
});


layout.registerComponent('example',function(container : any,state : any){
    container.getElement().html( '<h2>' + state.text + '</h2>');
});

layout.init();



//container

//in that container add 

/**
 * Three section layout
 *
 * section -> 1
 *  ui panel
 *
 * section -> 2
 *  main content
 *
 */