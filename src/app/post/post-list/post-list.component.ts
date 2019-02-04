import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../../models/posts';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: Post[] = [];
  postsSubscription: Subscription;

  loveIts = 0;

  constructor(private postsService: PostService, private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    // this.postsService.savePosts();
    this.postsService.emitPosts();
  }
  onNewPost(){
    this.router.navigate(['new'])
  }
  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
}