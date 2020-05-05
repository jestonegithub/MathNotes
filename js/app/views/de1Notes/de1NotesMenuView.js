define(function (require) {
    var mn = require('marionette');
    var bb = require('backbone');
    //var _ = require('underscore');
    var tmp = require('hbs!app/templates/de1Notes/de1NotesMenuView');


    //This is a View - and the root view of the game living in #main

    var De1NotesMenuView = mn.ItemView.extend({

        template: tmp,

        id:'de1NotesMenu',

        className:'notes',

        // chapterNumber:0,
        //
        // chapterTitle:'',
        //
        // sectionList:[],
        //
        // ui:{
        //
        //     title:'#chapter_heading_title'
        //
        // },

        onRender: function(){

            //this.chapterTitle = this.ui.title.html();
            // NOW GET SECTIONS...

        },

        onAttach: function(){


            // $('#deI').click(function() {
            //     alert( "Handler for .click() called.");
            //
            // });


        }



        // addHandlers: function(){
        //
        //     $('#intro').append('<div id="intro_continue_btn" class="continue_center">Continue</div>');
        //     $('#intro_continue_btn').click(function(){
        //
        //         $('#intro_continue_btn').remove();
        //         bb.trigger('sectionend');
        //
        //     })
        //
        // }

    });


    return {De1NotesMenuView:De1NotesMenuView}

});