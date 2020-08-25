import { Component, OnInit } from '@angular/core';
import { EArticleDetails } from 'src/app/model/EArticleDetails';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-add-article-image',
  templateUrl: './add-article-image.component.html',
  styleUrls: ['./add-article-image.component.css']
})
export class AddArticleImageComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit() {
  
  }

 

}
