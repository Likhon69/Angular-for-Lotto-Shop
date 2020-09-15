import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ArticleImageVariantComponent } from '../article-image-variant/article-image-variant.component';
import { AddArticleImageComponent } from '../add-article-image/add-article-image.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';
import { EArticleDetails } from 'src/app/model/EArticleDetails';





@Component({
  selector: 'app-article-settings',
  templateUrl: './article-settings.component.html',
  styleUrls: ['./article-settings.component.css']
})

export class ArticleSettingsComponent implements OnInit {
  searchKey:string;
  EArticleDetails:{};
  EArticleDetailsList:EArticleDetails[];

  constructor( private dialog:MatDialog,private service:UserService,
    private toastr:ToastrService) { }
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.service.EGetAllArticleDetails().subscribe(res=>
      
       this.dataSource.data = res as EArticleDetails[]
        
      )
 
    
  
  }
  
  displayedColumns: string[] = ['Article Code', 'Article No', 'Article Name', 'Article Price','action'];
  dataSource = new MatTableDataSource<EArticleDetails>();

  AddOrEditImage(row:EArticleDetails){
     this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "55%";
    dialogConfig.maxHeight=500;
     
    this.dialog.open(AddArticleImageComponent,dialogConfig);
    
  }
  onClear(){
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  
}
