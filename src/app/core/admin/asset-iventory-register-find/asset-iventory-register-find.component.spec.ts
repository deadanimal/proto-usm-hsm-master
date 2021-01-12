import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIventoryRegisterFindComponent } from './asset-iventory-register-find.component';

describe('AssetIventoryRegisterFindComponent', () => {
  let component: AssetIventoryRegisterFindComponent;
  let fixture: ComponentFixture<AssetIventoryRegisterFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIventoryRegisterFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIventoryRegisterFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
