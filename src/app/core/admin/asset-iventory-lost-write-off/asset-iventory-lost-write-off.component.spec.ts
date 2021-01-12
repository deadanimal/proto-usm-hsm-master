import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIventoryLostWriteOffComponent } from './asset-iventory-lost-write-off.component';

describe('AssetIventoryLostWriteOffComponent', () => {
  let component: AssetIventoryLostWriteOffComponent;
  let fixture: ComponentFixture<AssetIventoryLostWriteOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIventoryLostWriteOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIventoryLostWriteOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
