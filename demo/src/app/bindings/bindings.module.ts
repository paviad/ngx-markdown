import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MarkdownModule } from 'ngx-markdown';

import { ScrollspyNavLayoutModule } from '@shared/scrollspy-nav-layout/scrollspy-nav-layout.module';
import { SharedModule } from '@shared/shared.module';
import { BindingsRoutingModule } from './bindings-routing.module';
import { BindingsComponent } from './bindings.component';

@NgModule({
  imports: [
    BindingsRoutingModule,
    FormsModule,
    MarkdownModule.forChild(),
    MatInputModule,
    ScrollspyNavLayoutModule,
    SharedModule,
  ],
  declarations: [BindingsComponent],
})
export class BindingsModule { }
