// import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
// import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle: SafeHtml = "<></>";
  pageTitleArr: { text: string; link: string }[] = [];
  pageLinks: Map<string, string> = new Map([
    ['employee', 'employee/Empdashboard'],
    ['master', 'master/MasterHeader'],
    ['attendance', 'attendence/empatt'],
    ['leave', 'leave/apply'],
    ['asset', 'asset/category'],
  ]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    // private router: Router,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        // Assuming you have defined 'title' in your route's data
        if(data['title']){
          if(data['title'].includes('/')){
            let pageTitleArr = data['title'].split('/')
            let linkKey = pageTitleArr[0].toLowerCase()
            console.log(linkKey)
            let linkRoute = this.pageLinks.get(linkKey)
            this.pageTitleArr = [
              {
                text: pageTitleArr[0],
                link: linkRoute || '/'
              },
              {
                text: pageTitleArr[1],
                link: ""
              }
            ]
            let tempTitleStr = `<a routerLink="../"> ${pageTitleArr[0]} </a> / ${pageTitleArr[1]}`
            this.pageTitle = this.sanitizer.bypassSecurityTrustHtml(tempTitleStr);
          }else{
            // this.pageTitle = data['title']
            this.pageTitleArr = []
          }
        }else{
          this.pageTitle = 'Home';
        }
      });
  }
  // ngOnInit(): void { }
  // constructor(

  // ) { }
  logout() {
    this.auth.logout();
  }

  @Input() heading = 'Home'
  @Input() isLayoutLtr: boolean = true;
  @Input() isSettingsActive: boolean = false;
  @Output() toggleSettingsEvent = new EventEmitter<any>()
  isLowerNav = false;

  languages = [
    {
      name: 'English',
      flagClass: 'flag flag-united-states'
    },
    {
      name: 'Hindi',
      flagClass: 'flag flag-india'
    },
    {
      name: 'Arabic',
      flagClass: 'flag flag-saudi-arabia'
    },
    {
      name: 'Chinese',
      flagClass: 'flag flag-china'
    },
    {
      name: 'Japanese',
      flagClass: 'flag flag-japan'
    }
  ]

  alerts = [
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
  ]

  messages = [
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
  ]

  isLangDropOpen = false
  isAlertDropOpen = false
  isMsgDropOpen = false
  isProfileDropOpen = false
  isQuickLinkDropOpen = false

  onLangBtnClick() {
    this.isLangDropOpen = !this.isLangDropOpen
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
    this.isProfileDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onAlertBtnClick() {
    this.isAlertDropOpen = !this.isAlertDropOpen
    this.isLangDropOpen = false
    this.isMsgDropOpen = false
    this.isProfileDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onMsgBtnClick() {
    this.isMsgDropOpen = !this.isMsgDropOpen
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isProfileDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onProfileBtnClick() {
    this.isProfileDropOpen = !this.isProfileDropOpen
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
    this.isQuickLinkDropOpen = false
  }
  onQuickLinkBtnClick() {
    this.isQuickLinkDropOpen = !this.isQuickLinkDropOpen
    this.isProfileDropOpen = false
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
  }

  toggleLowerNavbar() {
    this.isLowerNav = !this.isLowerNav
  }

  onSettingsClick() {
    this.isSettingsActive = !this.isSettingsActive
    this.toggleSettingsEvent.emit(this.isSettingsActive)
 }
}