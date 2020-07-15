import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomepageModule } from './home/homepage/homepage.module';
import { InternalModule } from './internal/internal.module';
import { LoginModule } from './login/login.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './homepage/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BusinesspackComponent } from './businesspack/businesspack.component';
import { PollspageComponent } from './createpollspage/pollspage.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EdupageComponent } from './home/edupage/edupage.component';
import { BusPageComponent } from './home/bus-page/bus-page.component';
import { PollsComponent } from './internal/polls/polls.component';


=======
import { HeaderComponent } from './homepage/header/header.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< Updated upstream
    BusinesspackComponent,
    PollspageComponent,
    EdupageComponent,
    BusPageComponent,
    
=======
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    InternalModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{path: '', component: HomepageComponent}, 
                          {path:'education', component: EdupageComponent},
                          {path: '***', component: HomepageComponent },
                          {path: 'business', component:BusinesspackComponent},
                          {path: 'pollspage', component:PollspageComponent},
                          {path:"polls", component: PollsComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
