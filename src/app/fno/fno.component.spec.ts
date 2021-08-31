/*
 * MIT License
 * 
 * Copyright (c) 2021 Uriel Rivas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * https://github.com/Garz4/venting/blob/main/LICENSE
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnoComponent } from './fno.component';

describe('FnoComponent', () => {
  let component: FnoComponent;
  let fixture: ComponentFixture<FnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
