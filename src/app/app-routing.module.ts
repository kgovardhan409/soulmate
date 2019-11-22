import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ChildloginComponent } from './login/childlogin/childlogin.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateUserComponent } from './update-user/update-user.component'

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'login', component: LoginComponent,
  children: [
    { path: 'child', component: ChildloginComponent},
  ] 
  },
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin', component: AdminComponent},
  {path:'update-user/:sno',component: UpdateUserComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
