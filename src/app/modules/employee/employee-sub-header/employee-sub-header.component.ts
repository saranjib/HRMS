// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-employee-sub-header',
//   templateUrl: './employee-sub-header.component.html',
//   styleUrls: ['./employee-sub-header.component.scss']
// })
// export class EmployeeSubHeaderComponent {
//   showTabs = true;
//   activeTab: string = '';

//   // setActiveTab(tabName: string) {
//   //   this.activeTab = tabName;
//   // }

//   constructor(private router: Router) { }

//   toggleTabs() {
//     this.showTabs = !this.showTabs;
//   }

//   selectTab(event: any): void {
//     const selectedRoute = event.target.value;
//     this.router.navigateByUrl(selectedRoute);
//   }
//   // // constructor(private router: Router) { }


//   goBack() {
//     this.router.navigate(['/']); // Navigate back to the previous page
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';

@Component({
  selector: 'app-employee-sub-header',
  templateUrl: './employee-sub-header.component.html',
  styleUrls: ['./employee-sub-header.component.scss']
})
export class EmployeeSubHeaderComponent implements OnInit {
  showTabs = true;
  subheaders: any[] = [];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    
    // this.authService.getUserRoles().subscribe(
    //   roles => {
    //     debugger
    //     this.subheaders = roles.map(role => ({
    //       name: role,
    //       routerLink: `../${role.toLowerCase()}`,
    //       tooltip: `${role}`,
    //       iconClass: 'fas fa-user fa-fw me-2'
    //     }));
    //     this.showTabs = this.subheaders.length > 0;
    //   },
    //   error => {
    //     console.error('Error fetching user roles:', error);
    //   }
    // );
  }

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }

  selectTab(event: any): void {
    const selectedRoute = event.target.value;
    this.router.navigateByUrl(selectedRoute);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
