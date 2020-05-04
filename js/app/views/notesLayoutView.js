/**
 * Created by jessebstone on 11/23/15.
 */


define(function (require) {
    var mn = require('marionette');
    var tmp = require('hbs!app/templates/notesLayoutView');


    //This is a LayoutView - and the root view of the game living in #main

    var NotesLayoutView = mn.LayoutView.extend({

        template: tmp,

        id: "book_wrapper",

        regions: {
            header: "#header_region",
            contents: '#toc_region',
            bookOne: '#bookOne_region',
            partOne: '#partOne_region',
            chapter1: '#chapter1_region',
            chapter2: '#chapter2_region',
            chapter3: '#chapter3_region'

        },

        append_layout: function(){

            $('#main').append(this.el);

        }







    });


    return {NotesLayoutView:NotesLayoutView}

});
