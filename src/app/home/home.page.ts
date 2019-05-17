import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router){
    this.planejamentos = []
  }

  planejamentos;

  ngOnInit() { }

  excluir (nome){
    localStorage.removeItem(nome)
    this.listar()
  }

  listar(){
    this.planejamentos = []

    const tamanhoDoBanco = localStorage.length

    for(let index = 0; index < tamanhoDoBanco; index++){
      const chave = localStorage.key(index)
      const planejamento = localStorage.getItem(chave)
      const planejamentoReal = JSON.parse(planejamento)
      this.planejamentos.push(planejamentoReal)  
    }

  }

  ionViewDidEnter(){
    this.listar()
  }

}
