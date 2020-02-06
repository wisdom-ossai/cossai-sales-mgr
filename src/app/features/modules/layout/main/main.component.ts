import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
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
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  user: IUser;
  userSubscription: Subscription;

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
    this.userSubscription = this.authService.userResult$.subscribe((val: any) => {
      if (val.Result.length > 0) {
        console.log(val);
        this.user = val.Result[0];
      }
    });
    console.log('main component');
    console.log(this.user);
  }

  ngAfterViewInit() {
    console.log('user after init', this.user);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
