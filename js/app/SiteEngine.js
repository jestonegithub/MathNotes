

define(function(require) {

    // GENERAL REQUIREMENTS

    var _ = require('underscore');
    var bb = require('backbone');
    var mn = require('marionette');

    // ----------------------------------------------------
    // ------------- LOADING AND RENDERING *ALL* VIEWS ---------------------------------
    // ----------------------------------------------------

    // Site LAYOUT VIEW

    var slv = require('./views/SiteLayoutView');
    var slv_rendered = new slv.SiteLayoutView().render();

    // HOME PAGE VIEW

    var hpv = require('./views/homePageview');
    var hpv_rendered = new hpv.HomePageView().render();


    // STYLEGUIDE VIEW
    var sty = require('./views/styleGuideView');
    var styleGuide_rendered = new sty.StyleGuideView().render();



    // NOTE VIEWS






    // PROOF VIEWS

   // var lagrange_thm = require('./views/proofs/lagrangeTheoremView');
    // var lagrangeThm_rendered = new lagrange_thm.LagrangeTheoremView().render();













    // SET SINGLE PAGE VIEW

    var single_page = slv_rendered;



    var SiteEngine = mn.Application.extend({


// ---------- MANUAL EDITS TO ORGANIZE BOOK ARE HERE ---------------- //

        //BOOK FUNCTIONS (Typeset, etc.)

        // BOOK STARTUP

        // for starting book without any saved 'bookmark' data
        siteBegin: function(){


            // OPTIONAL - fire up any intro loading sequence (buying time)
            console.log('buying time...');



            // Load in all the rendered views...

            console.log('heeeer');
            //load page layout and append to DOM
            this.pagelayoutview = slv_rendered;
            this.pagelayoutview.append_layout();

            // show views in regions

            this.pagelayoutview.site_body.show(hpv_rendered);


            // TYPESET MATHJAX for currently rendered views

            this.typeset();


            // GO TO NAVIGATION LOGIC


        },


        //for starting book with some 'bookmark' data
        bookMarked: function(){},






        // BOOK NAVIGATION

        scrollUp: function(){},


        scrollDown: function(){},

        //method to bring user straight to a selected chapter (i.e., from contents)
        goToChapter: function(){},









        // UTILITY FUNCTIONS (Typeset, etc.)

        typeset: function(){

            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            console.log('typesetting!');

        },


        // TESTING

        test1: function () {

            $('body').append('<div>When $a \\ne 0$, there are two solutions to \\(ax^2 + bx + c = 0\\) and they are\n' +
                '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$</div>');


            // this.typeset();
            //MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


        },


        test2: function(){

            // set-up a new marionette view with a handlebars template
            this.test2view = new t2v.Test2View().render();



            // append it
            $('body').append(this.test2view.$el);



            // render jax
            this.typeset();


        },

        spv: function(spv_o){

            // append it
            $('#main').append(spv_o.$el);

            //change background color to match .page_background
            console.log('changing color');
            var color = $('.page_background').css( "background-color" );
            $('body').css("background-color", color);


            // render jax
            this.typeset();

        }

    });




    var site = new SiteEngine();


    // SET ACTION HERE...

    var single_view_mode = false;




    if (single_view_mode){


        // LOAD SINGLE PAGE VIEW

        console.log('loading single page view...');


        // SINGLE PAGE LOADING VIEWS

        // var spv_object = new hv.HeaderView().render();
        // var spv_object = new ch1v.Chapter1View().render();
        // var spv_object = new wfk.WhatFermatKnew().render();



        site.spv(single_page);

    }else{

        // CREATE BOOK

        console.log('loading book...');

        site.siteBegin();

    }







    return SiteEngine;


});