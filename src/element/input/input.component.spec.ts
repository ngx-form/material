// external
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @ngx
import { FormElementModule } from '@ngx-form/element';

// internal
import { FormMaterialInputComponent } from './input.component';
import { elementsConfig } from './../../ngx-form-material.config'; // get config

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('FormMaterialInputComponent', () => {

  let comp: FormMaterialInputComponent;
  let fixture: ComponentFixture<FormMaterialInputComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormMaterialInputComponent
      ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FormElementModule.forRoot(elementsConfig)
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialInputComponent);
    nativeElement = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should create test component', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));

  it('should have div', async(() => {
    expect(nativeElement.querySelector('div')).toBeNull();
  }));
});
