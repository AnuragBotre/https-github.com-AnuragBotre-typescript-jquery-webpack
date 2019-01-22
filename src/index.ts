import jQuery from 'jquery';
import GoldenLayout from 'golden-layout';
import 'slickgrid-6pac';

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
            }
            
        ]
    }]
};


let layout = new GoldenLayout(configuration);

interface MyData extends Slick.SlickData {
    title: string;
    duration: string;
    percentComplete: number;
    start: string;
    finish: string;
    effortDriven: boolean;
}

layout.registerComponent('gridSection', function (container: any, state: any) {

    

    var grid: Slick.Grid<MyData>;
    var columns: Slick.Column<MyData>[] = [
        { id: "title", name: "Title", field: "title" },
        { id: "duration", name: "Duration", field: "duration" },
        { id: "%", name: "% Complete", field: "percentComplete" },
        { id: "start", name: "Start", field: "start" },
        { id: "finish", name: "Finish", field: "finish" },
        { id: "effort-driven", name: "Effort Driven", field: "effortDriven" }
    ];

    var options: Slick.GridOptions<MyData> = {
        enableCellNavigation: true,
        enableColumnReorder: false
    };


    var data: MyData[] = [];
    for (var i = 0; i < 500; i++) {
        data[i] = {
            title: "Task " + i,
            duration: "5 days",
            percentComplete: Math.round(Math.random() * 100),
            start: "01/01/2009",
            finish: "01/05/2009",
            effortDriven: (i % 5 == 0)
        };
    }

    
    

    container.on( 'open', function(){        
        grid = new Slick.Grid<MyData>(container.getElement(), data, columns, options);
        grid.render();
    });


});


layout.registerComponent('example', function (container: any, state: any) {
    container.getElement().html('<h2>' + state.text + '</h2>');
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