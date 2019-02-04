import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/posts';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  loveIts = 0;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onLove(){
    this.post.loveIts++;
    this.postService.savePosts();
  }
  
  onDontLove(){
    this.post.loveIts--;
    this.postService.savePosts();
  }

  onDelete(post: Post){
    if(confirm('Êtes vous sûr de vouloir supprimer ce post ?')){
      // console.log('Suppression')
      this.postService.removePost(post);
      this.router.navigate(['posts']);
    }
  }

}
