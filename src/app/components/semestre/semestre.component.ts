import { Component, OnInit } from '@angular/core';

import {Semestre} from '../../models/semestre';

import {SemestreService} from '../../services/semestre.service';

import {Global} from '../../services/global';



/*
export interface PeriodicElement {
   semestre_id:number;
   nombre:string;
   estado:string;
}*/
@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css'],
  providers: [SemestreService]
})
export class SemestreComponent implements OnInit {
  public title:string;
  public semestre: Semestre;
  public semestres: Semestre[];

  displayedColumns: string[] = ['semestre_id', 'nombre','editar','estado'];

  constructor(
    private _semestreService:SemestreService
  ) {
    this.title = "Agregar semestre";
    this.semestre = new Semestre(null,'','');

  }

  ngOnInit(): void {
   this.getSemestre();
  }
  onSubmit(form){
    console.log(this.semestre);
    this._semestreService.crearSemestre(this.semestre).subscribe(
      response => {
        console.log(response);
        window.location.reload();
      },
      error => {
        console.log(<any>error);
      }
    
    )
  }

  getSemestre(){
    this._semestreService.getSemestres().subscribe(
      /*(data) =>{
        this.semestre = data['CURSOR_SEMESTRE']
        console.log(this.semestre);
      }*/
      response =>{
        if(response.CURSOR_SEMESTRE)
              this.semestres = response.CURSOR_SEMESTRE;
              //console.log(response['CURSOR_SEMESTRE']);
              console.log(response.CURSOR_SEMESTRE);
      },
      
    );
  }
}
