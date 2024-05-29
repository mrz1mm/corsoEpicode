import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { iPost } from '../models/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  postsArr: iPost[] = [];

  constructor(private PostSvc: PostsService) {}

  async ngOnInit() {
    this.postsArr = this.PostSvc.getActivePosts();
    console.log('PizzeSvc', this.PostSvc);
    console.log(this.postsArr);
  }
}
