import { Component, OnInit } from '@angular/core';
import {Semestre} from '../../models/semestre';
import {SemestreService} from '../../services/semestre.service';
import {Global} from '../../services/global';

import {Router,ActivatedRoute,Params} from  '@angular/router';

@Component({
  selector: 'app-edit-semestre',
  templateUrl: '../semestre/semestre.component.html',
  styleUrls: ['./edit-semestre.component.css'],
  providers: [SemestreService]
})
export class EditSemestreComponent implements OnInit {
  public title:string;
  public semestre: Semestre;
  public semestres: Semestre[];

  displayedColumns: string[] = ['semestre_id', 'nombre','editar','estado'];


  constructor(
    private _semestreService:SemestreService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Modificar semestre";

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getSemestre(id);
    })
  }

  getSemestre(id){
    this._semestreService.getSemestre(id).subscribe(
      response =>{
        console.log(response.C_SEMESTRE[0]);
        this.semestre = response.C_SEMESTRE[0];
      },
      error =>{
        console.log(<any>error);
      }

    )
  }
  onSubmit(form){
    this._semestreService.updateSemestre(this.semestre).subscribe(
      response =>{
          console.log(response);
      },error =>{
        console.log(<any> error);
      }
    )
  }

}
