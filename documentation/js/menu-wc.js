'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' : 'data-target="#xs-components-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' :
                                            'id="xs-components-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActorDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActorDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthenticationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScrollTopBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScrollTopBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmallPlansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmallPlansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SocialMediaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocialMediaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingActorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingActorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingMoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingMoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingTvShowDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingTvShowDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrendingTvShowsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrendingTvShowsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' : 'data-target="#xs-injectables-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' :
                                        'id="xs-injectables-links-module-AppModule-548a8e7e33f31ae58f108f39d8939aad"' }>
                                        <li class="link">
                                            <a href="injectables/NavbarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetailsService.html" data-type="entity-link" >DetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavbarService.html" data-type="entity-link" >NavbarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShowsService.html" data-type="entity-link" >ShowsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});