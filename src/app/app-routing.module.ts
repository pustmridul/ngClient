import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './admin/login/login.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch:'full' },
  { path: 'home',  component : HomeComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'blog', component: BlogComponent  },
  { path: 'login', component: LoginComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
