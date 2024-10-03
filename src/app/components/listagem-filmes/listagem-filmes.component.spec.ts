import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFilmesComponent } from './listagem-filmes.component';

describe('ListagemFilmesComponent', () => {
  let component: ListagemFilmesComponent;
  let fixture: ComponentFixture<ListagemFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemFilmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
