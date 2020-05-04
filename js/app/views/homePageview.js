define(function (require) {
    var mn = require('marionette');
    var bb = require('backbone');
    //var _ = require('underscore');
    var tmp = require('hbs!app/templates/homePageView');


    //This is a View - and the root view of the game living in #main

    var HomePageView = mn.ItemView.extend({

        template: tmp,

        id:'homepage',

        className:'home',

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


    return {HomePageView:HomePageView}

});