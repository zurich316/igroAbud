import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientHistoryIndexComponent } from './pages/client-history-index/client-history-index.component';
import { ClientHistoryNewComponent } from './pages/client-history-new/client-history-new.component';
import { ClientHistoryViewComponent } from './pages/client-history-view/client-history-view.component';
import { ClientNewComponent } from './pages/client-new/client-new.component';
import { ClientIndexComponent } from './pages/client-index/client-index.component';
import { ClientViewComponent } from './pages/client-view/client-view.component';


const routes: Routes = [
  { path: 'cliente', component: ClientIndexComponent },
  { path: 'cliente/:id-client', component: ClientNewComponent },
  { path: 'cliente/:id-client/vista', component: ClientViewComponent },
  { path: 'cliente/:id-client/vista/historial', component: ClientHistoryIndexComponent },
  { path: 'cliente/:id-client/vista/historial/:id-history', component: ClientHistoryNewComponent },
  { path: 'cliente/:id-client/vista/historial/:id-history/vista', component: ClientHistoryViewComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cliente' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
