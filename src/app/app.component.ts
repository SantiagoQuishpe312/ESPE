import { Component, Inject, LOCALE_ID, OnInit, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/config/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import { LayoutService } from '../@vex/services/layout.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { VexConfigName } from '../@vex/config/config-name.model';
import { ColorSchemeName } from '../@vex/config/colorSchemeName';
import {
  MatIconRegistry,
  SafeResourceUrlWithIconOptions
} from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  ColorVariable,
  colorVariables
} from '../@vex/components/config-panel/color-variables';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { GlobalUserService} from 'src/app/core/http/user/global-user.service'
@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn = false;
  constructor(
    private configService: ConfigService,
    private renderer: Renderer2,
    private platform: Platform,
    private globalUser :GlobalUserService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private authService: AuthService
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.matIconRegistry.addSvgIconResolver(
      (
        name: string,
        namespace: string
      ): SafeResourceUrl | SafeResourceUrlWithIconOptions | null => {
        switch (namespace) {
          case 'mat':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/material-design-icons/two-tone/${name}.svg`
            );

          case 'logo':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/logos/${name}.svg`
            );

          case 'flag':
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/img/icons/flags/${name}.svg`
            );
        }
      }
    );

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.light,
        colors: {
          primary: colorVariables.espe
        }
      },
      sidenav: {
        title: 'MENÚ',
        imageUrl: 'assets/img/espe/logo-espe.png',
        search: {
          visible: false
        },
        user: {
          visible: false
        }
      },
      footer: {
        visible: true,
        fixed: true
      },
      toolbar: {
        user: {
          visible: true
        }
      }
    });

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      if (queryParamMap.has('layout')) {
        this.configService.setConfig(
          queryParamMap.get('layout') as VexConfigName
        );
      }

      if (queryParamMap.has('style')) {
        this.configService.updateConfig({
          style: {
            colorScheme: queryParamMap.get('style') as ColorSchemeName
          }
        });
      }

      this.isLoggedIn = this.authService.isLoggedIn();
      if (!this.isLoggedIn) {
        this.authService.capture(window.location.href);
        this.login();
        return;
      }

      setTimeout(() => {
        this.isLoggedIn = this.authService.isLoggedIn();
        if (!this.isLoggedIn) {
          this.login();
        } else {
          if (this.existClaims()) {
          this.globalUser.getUserByUsername(this.authService.getUserName());
          }
    
        }
      }, 1000); 
    

      this.authService.redirection();

      if (queryParamMap.has('primaryColor')) {
        const color: ColorVariable =
          colorVariables[queryParamMap.get('primaryColor')];

        if (color) {
          this.configService.updateConfig({
            style: {
              colors: {
                primary: color
              }
            }
          });
        }
      }

      if (queryParamMap.has('rtl')) {
        this.configService.updateConfig({
          direction: coerceBooleanProperty(queryParamMap.get('rtl'))
            ? 'rtl'
            : 'ltr'
        });
      }
    });

    /**
     * Add your own routes here
     */
    this.navigationService.items = [
      {
        type: 'subheading',
        label: 'Menú 1',
        children: [
          {
            type: 'link',
            label: 'Submenú 1',
            route: 'administracion/periodos-seguimiento',
            icon: 'mat:people'
          }
        ]
      },
      // {
      //   type: 'subheading',
      //   label: 'Coordinador',
      //   children: [
      //     {
      //       type: 'link',
      //       label: 'Programas analíticos',
      //       route: 'coordinador/programas-analiticos',
      //       icon: 'mat:assignment'
      //     },
      //     {
      //       type: 'link',
      //       label: 'Aprobación sílabo',
      //       route: 'coordinador/aprobacion-silabo',
      //       icon: 'mat:people'
      //     }
      //   ]
      // },
      {
        type: 'subheading',
        label: 'Menú 2',
        children: [
          {
            type: 'link',
            label: 'Submenú 2',
            route: 'administracion/periodos-seguimientos',
            icon: 'mat:today'
          }
        ]
      }
    ];

    this.setInterval();


  }

  ngOnInit(): void {
    this.authService.login();
  }

  login(): void {
    this.authService.obtainAccessToken();
  }

  verifiedToken() {
    let timeExpired = sessionStorage.getItem('expires_at');

    let timeExpiredLess = Number(timeExpired) - (10 * 60 * 1000);

    let timeNow = new Date().getTime();
   
    if (timeExpiredLess <= timeNow) {
      this.authService.refreshToken();
    }
    // obtener la fecha actual  
  }


  setInterval() {
    setInterval(() => {
      this.verifiedToken();
    }, 600000);
  }

  existClaims(): boolean {
    let claims = sessionStorage.getItem('id_token_claims_obj');
    if (claims != null) {
      return true;
    }
    return false;
  }


}