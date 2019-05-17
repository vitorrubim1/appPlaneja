import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})

export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
 
  }
 
  
  salvar(form){
    const dados = JSON.stringify(form.value)

    const nome = form.value.nome;
    const faturamento = form.value.faturamento;
    const custo = form.value.custo;
    
    console.log(nome,faturamento,custo)
    localStorage.setItem(nome, dados);
    
    form.reset()
    
    this.nav.back()
  }

  

}