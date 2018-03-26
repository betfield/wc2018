import React, { Component } from 'react';

export default class Header extends Component {
    
    componentDidMount() {

        $('body').attr('id',"page-top");
        $('body').attr('class',"index");
        
        //TODO - refactor to ES2016
        
        var cbpAnimatedHeader = (function() {
            var docElem = document.documentElement,
                header = document.querySelector( '.navbar-fixed-top' ),
                didScroll = false,
                changeHeaderOn = 300;
    
            function init() {
                window.addEventListener( 'scroll', function( event ) {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( scrollPage, 250 );
                    }
                }, false );
            }
    
            function scrollPage() {
                var sy = scrollY();
                if ( sy >= changeHeaderOn ) {
                    classie.add( header, 'navbar-shrink' );
                }
                else {
                    classie.remove( header, 'navbar-shrink' );
                }
                didScroll = false;
            }
    
            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }
    
            init();
    
        })();
        
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('body').on('click', '.page-scroll a', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });
    }
    
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="login" className="login">
                                <a href="https://bf.fctwister.ee/" className="btn btn-lg btn-outline">
                                    SISENE ENNUSTUSLEHELE
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                </a>
                            </div>
                            <img className="img-responsive" src="img/profile.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}