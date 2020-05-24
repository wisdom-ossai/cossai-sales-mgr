import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryViewerComponent } from './category-viewer/category-viewer.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryCreatorComponent } from './category-creator/category-creator.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { CategoryImportComponent } from './category-import/category-import.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './store';


@NgModule({
  declarations: [
    CategoryHomeComponent,
    CategoryCreatorComponent,
    CategoryEditorComponent,
    CategoryImportComponent,
    CategoryViewerComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    StoreModule.forFeature('categoryState', categoryReducer)
  ],
})
export class CategoryModule { }
