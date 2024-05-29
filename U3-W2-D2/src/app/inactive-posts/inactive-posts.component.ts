import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { iPost } from '../models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  postsArr: iPost[] = [];

  constructor(private PostSvc: PostsService) {}

  async ngOnInit() {
    this.postsArr = this.PostSvc.getInactivePosts();
    console.log('PizzeSvc', this.PostSvc);
    console.log(this.postsArr);
  }
}
