import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  //p1 = new FormControl();
  
  p1: String = '';

  v1: String = this.p1.length+"";
  v2 = this.v1.split("",2);
  
  longitud = "";
  resultado = '';

  calcular(){
    
    //this.resultado = this.v2+"";
    //this.resultado = this.p1.length+"";
    
    if(this.p1.length %2 == 0){
      
      this.resultado = "Par";
    }else {
      this.resultado = "Impar";
    }
      
    /*if(this.p1.length == 1){
      this.longitud = "uno";
    }else if (this.p1.length == 4){
      this.longitud = "cuatro";
    }else if(this.p1.length == 5){
      this.longitud = "cinco";
    }else if (this.p1.length > 9 ){
      
      this.longitud = this.v2[0]+"";
    }*/
    this.longitud = this.p1.length+"";
    
  }
}
