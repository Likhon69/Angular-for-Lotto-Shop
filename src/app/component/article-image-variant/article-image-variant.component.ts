import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { UserService } from 'src/app/Shared/user.service';
@Component({
  selector: 'app-article-image-variant',
  templateUrl: './article-image-variant.component.html',
  styleUrls: ['./article-image-variant.component.css']
})
export class ArticleImageVariantComponent implements OnInit {
  imageForm:FormGroup;
  constructor(private service:UserService) { }

  ngOnInit() {
    this.imageForm = new FormGroup({
      ImageName:new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    if(this.imageForm.valid){
      this.service.ArticleImageList.push(this.imageForm.value);
    }
    
  }
}
