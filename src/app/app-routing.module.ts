import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { GoldenComponent } from './golden/golden.component';
import { HomeComponent } from './home/home.component';
import { HuskieComponent } from './huskie/huskie.component';
import { TeamGeneraterComponent } from './team-generater/team-generater.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cat', component: CatComponent },
  { path: 'golden', component: GoldenComponent },
  { path: 'huskie', component: HuskieComponent },
  { path: 'team-generater', component: TeamGeneraterComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
