import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIventoryMaintenanceComponent } from './asset-iventory-maintenance.component';

describe('AssetIventoryMaintenanceComponent', () => {
  let component: AssetIventoryMaintenanceComponent;
  let fixture: ComponentFixture<AssetIventoryMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetIventoryMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetIventoryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
