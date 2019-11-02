

define(function(require) {

    // GENERAL REQUIREMENTS

    var _ = require('underscore');
    var bb = require('backbone');
    var mn = require('marionette');
    //var t2v = require('./views/test2View');



    // // STYLEGUIDE LAYOUT VIEW
    var sty = require('./views/styleGuideView');
    //
    //
    // // MASTER LAYOUT VIEW
    // var blv = require('./views/notesLayoutView');
    //
    // // HEADER VIEWS
    // var hv = require('./views/headerView');
    //
    // // TOC VIEW
    // var tocv = require('./views/tocView');
    //
    // // REQUIRE ALL VIEWS
    //
    // var pov = require('./views/partOneView');
    // // var ch1v = require('./views/chapter1View');
    // // var wfk = require('./views/whatFermatKnew');
    // // var pn4 = require('./views/proofN4View');
    //
    // //var pn3 = require('./views/proofN3');
    //







    // RENDER ALL VIEWS

    // STYLEGUIDE PAGE



    var styleGuide_rendered = new sty.StyleGuideView().render();


    // var header_rendered = new hv.HeaderView().render();
    // var toc_rendered   = new tocv.TocView().render();
    //
    // // var book1_rendered = new bov.BookOneView().render();
    //
    // var part1_rendered = new pov.PartOneView().render();

    // var chapter1_rendered = new ch1v.Chapter1View().render();
    // var chapter2_rendered = new wfk.WhatFermatKnew().render();
    // var chapter3_rendered = new pn4.ProofN4View().render();

    //var chapter3_rendered = new pn3.ProofN3View().render();











    var NotesEngine = mn.Application.extend({


// ---------- MANUAL EDITS TO ORGANIZE BOOK ARE HERE ---------------- //

        //BOOK FUNCTIONS (Typeset, etc.)

        // BOOK STARTUP

        // for starting book without any saved 'bookmark' data
        bookBegin: function(){


            // OPTIONAL - fire up any intro loading sequence (buying time)
            console.log('buying time...');



            // Load in all the rendered views...

            console.log('heeeer');
            //load page layout and append to DOM
            this.booklayoutview = new blv.BookLayoutView().render();
            this.booklayoutview.append_layout();

            // show views in regions
            this.booklayoutview.header.show(header_rendered);
            this.booklayoutview.contents.show(toc_rendered);
            // this.booklayoutview.bookOne.show(book1_rendered);
            this.booklayoutview.partOne.show(part1_rendered);
            // this.booklayoutview.chapter1.show(chapter1_rendered);
            // this.booklayoutview.chapter2.show(chapter2_rendered);
            // this.booklayoutview.chapter3.show(chapter3_rendered);



            // create and append shares view to header...
            // this.sharesview = new shv.SharesView({model:new sm.SharesModel()});
            // $('#shares_container').append(sharesview.$el);



            // ToDo:  BUILD DYNAMIC TOC AND LINKS

            // use master contents map to build TOC view

            // build links

            // RENDER VIEWS

            // render views/place according to layout logic


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

            // render jax
            this.typeset();

        }

    });










    var book = new NotesEngine();


    // SET ACTION HERE...

    var single_view_mode = true;




    if (single_view_mode){


        // LOAD SINGLE PAGE VIEW

        console.log('loading single page view...');


        // SINGLE PAGE LOADING VIEWS

        // var spv_object = new hv.HeaderView().render();
        // var spv_object = new ch1v.Chapter1View().render();
        // var spv_object = new wfk.WhatFermatKnew().render();



        book.spv(styleGuide_rendered);

    }else{

        // CREATE BOOK

        console.log('loading book...');

        book.bookBegin();

    }







    return NotesEngine;


});