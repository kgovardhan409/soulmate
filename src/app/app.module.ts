import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MustMatchDirective } from './must-match.directive';
import { RegistrationComponent } from './registration/registration.component';
import { HighlightDirective } from './highlight.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildloginComponent } from './login/childlogin/childlogin.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MainpageComponent,
    MustMatchDirective,
    RegistrationComponent,
    HighlightDirective,
    PageNotFoundComponent,
    ChildloginComponent,
    AdminComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
