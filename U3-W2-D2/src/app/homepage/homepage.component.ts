import { Component, ViewChild } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { iPost } from '../models/post.interface';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  post!: iPost;
  postsArr: iPost[] = [];
  related: iPost[] = [];
  tags: Array<string> = [];

  @ViewChild('singlePost') singlePost!: SinglePostComponent;

  constructor(private PostSvc: PostsService) {}

  async ngOnInit() {
    this.postsArr = this.PostSvc.getAllPosts();
    this.post = this.PostSvc.getTopPosts();
    this.related = this.PostSvc.getRelatedPosts(4);
    this.tags = this.PostSvc.getAllTags();
  }
  editPost() {
    alert('Edit successful!');
  }

  async selectTag(tag: string) {
    this.postsArr = this.PostSvc.getPostsByTag(tag);
  }
}
