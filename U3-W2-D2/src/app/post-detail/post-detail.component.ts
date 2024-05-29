import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  postId: number = 0;
  post: iPost | undefined;
  postsArr: iPost[] = [];

  constructor(private PostSvc: PostsService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params: any) => {
      this.postId = params.id;
      this.post = await this.PostSvc.getPostById(Number(this.postId));
    });
  }
}
