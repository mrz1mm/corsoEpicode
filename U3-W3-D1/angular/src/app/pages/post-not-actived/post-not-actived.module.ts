import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostNotActivedRoutingModule } from './post-not-actived-routing.module';
import { PostNotActivedComponent } from './post-not-actived.component';


@NgModule({
  declarations: [
    PostNotActivedComponent
  ],
  imports: [
    CommonModule,
    PostNotActivedRoutingModule
  ]
})
export class PostNotActivedModule { }
