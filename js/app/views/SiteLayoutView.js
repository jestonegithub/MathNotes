/**
 * Created by jessebstone on 11/23/15.
 */


define(function (require) {
    var mn = require('marionette');
    var tmp = require('hbs!app/templates/SiteLayoutView');


    //This is a LayoutView - and the root view of the game living in #main

    var SiteLayoutView = mn.LayoutView.extend({

        template: tmp,

        id: "site_wrapper",

        regions: {
            site_title_bar: "#title_region",
            site_header: "#header_region",
            site_body: "#body_region"

        },

        append_layout: function(){

            $('#main').append(this.el);

        }







    });


    return {SiteLayoutView:SiteLayoutView}

});
