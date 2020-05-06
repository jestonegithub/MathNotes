

define(function(require) {

    // GENERAL REQUIREMENTS

    var _ = require('underscore');
    var bb = require('backbone');
    var mn = require('marionette');

    // ----------------------------------------------------
    // ------------- LOADING *ALL* VIEWS ---------------------------------
    // ----------------------------------------------------

    // Site LAYOUT VIEW

    var slv = require('./views/SiteLayoutView');
    // var slv_rendered = new slv.SiteLayoutView().render();

    // title bar view
    var tbv = require('./views/titleBarView');


    // HOME PAGE VIEW

    var hpv = require('./views/homePageview');
    // var hpv_rendered = new hpv.HomePageView().render();


    // STYLEGUIDE VIEW
    var sty = require('./views/styleGuideView');
    var styleGuide_rendered = new sty.StyleGuideView().render();



    // NOTE VIEWS

    var de1notesMenu = require('./views/de1Notes/de1NotesMenuView');
    var de1notesCover = require('./views/de1Notes/de1NotesCoverView');



    // PROOF VIEWS

   // var lagrange_thm = require('./views/proofs/lagrangeTheoremView');
    // var lagrangeThm_rendered = new lagrange_thm.LagrangeTheoremView().render();






    // SET SINGLE PAGE VIEW

    // var single_page = slv_rendered;



    var SiteEngine = mn.Application.extend({


// ---------- MANUAL EDITS TO ORGANIZE BOOK ARE HERE ---------------- //

        //BOOK FUNCTIONS (Typeset, etc.)

        // BOOK STARTUP

        // for starting book without any saved 'bookmark' data
        siteBegin: function(){

            //var slv = require('./views/SiteLayoutView');
            this.pagelayoutview = new slv.SiteLayoutView().render();
            this.pagelayoutview.append_layout();
            this.loadHome();

        },



        loadHome: function(){

            // hide title and header regions (if they are already populated)

            this.pagelayoutview.site_title_bar.empty();
            this.pagelayoutview.site_header.empty();

            // show views in regions
            this.pagelayoutview.site_body.show(new hpv.HomePageView().render());

            // TYPESET MATHJAX for currently rendered views
            this.typeset();

        },

        loadNotes: function(currentNotesMenu, currentNotesCover){

            console.log('loading notes!');

            // show the "home bar" at top of page


            // load the title bar at top of page (which also serves as home button)

            this.pagelayoutview.site_title_bar.show(new tbv.TitleBarView().render());

            // load the TOC for the current notes into the header
            this.pagelayoutview.site_header.show(currentNotesMenu);

            // load the cover for the notes
            this.pagelayoutview.site_body.show(currentNotesCover);


            // load the cover for the current notes into the body



            // show views in regions
            //this.pagelayoutview.site_body.show(new de1notes.De1NotesView.render());
            // // TYPESET MATHJAX for currently rendered views
            // this.typeset();

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



    site.on('start',function(){

        if (single_view_mode){

            // LOAD SINGLE PAGE VIEW
            console.log('loading single page view...');
            site.spv(single_page);
        }else{
            // CREATE BOOK
            console.log('loading full site...');
            site.siteBegin();
        }

    });






    bb.on('home',_.bind(site.loadHome,site));

    bb.on('load_de1_notes',_.bind(function(){
            site.loadNotes(
                new de1notesMenu.De1NotesMenuView().render(),
                new de1notesCover.De1NotesCoverView().render()
            )},site));


    site.start();





    return SiteEngine;


});