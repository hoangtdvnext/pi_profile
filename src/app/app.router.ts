import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
/**
 * Created by hoangtd on 9/12/2017.
 */
const routes: Routes = [{
          path      : '',
          redirectTo: 'profile',
          pathMatch : 'full'
        },{
          path: 'profile',
          component: AppComponent,
        }
]

export const routing = RouterModule.forRoot(routes);
