define(function (require) {
    var mn = require('marionette');
    var bb = require('backbone');
    //var _ = require('underscore');
    var tmp = require('hbs!app/templates/dirichletNotes/dirichletNotesMenuView');


    //This is a View - and the root view of the game living in #main

    var DirichletNotesMenuView = mn.ItemView.extend({

        template: tmp,

        id:'dirichletNotesMenu',

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

        onAttach: function() {
                var box = $('.box');
                var button = $('.open-menu, .header-menu');
                button.on('click', function(){
                    box.toggleClass('active');
                });
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


    return {DirichletNotesMenuView:DirichletNotesMenuView}

});