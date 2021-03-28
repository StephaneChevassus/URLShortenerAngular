import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShorturlComponent } from './shorturl/shorturl.component';
import { ShorturlFormComponent } from './shorturl-form/shorturl-form.component';

const routes: Routes = [
  { path: 'shorturls', component: ShorturlComponent },
  { path: '', component: ShorturlFormComponent },
  { path: '**', component: ShorturlFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
