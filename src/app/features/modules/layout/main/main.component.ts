import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'cossai-sls-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  user: IUser;
  isOpen: boolean;

  panelOpenState = false;
  avatar = 'http://i.pravatar.cc/300';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getLoggedInUserProfile().subscribe(val => {
      this.user = val.user;
    });
  }

  logout() {
    this.authService.logout().subscribe(isLoggedOUt => {
      if (isLoggedOUt) {
        this.router.navigate(['/']);
      }
    });
  }
  openChange($event) {
    this.isOpen = $event;
  }

  ngOnDestroy() {
  }
}
