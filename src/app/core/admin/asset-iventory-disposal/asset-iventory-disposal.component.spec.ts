import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIventoryDisposalComponent } from './asset-iventory-disposal.component';

describe('AssetIventoryDisposalComponent', () => {
  let component: AssetIventoryDisposalComponent;
  let fixture: ComponentFixture<AssetIventoryDisposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIventoryDisposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIventoryDisposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
