import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {

  packages: string[] = ["Monthly", "Quarterly", "Yearly"];
  genders: string[] = ["Male", "Female"];
  importantList: string[] = [
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Building Lean Muscle",
    "Healthier Digestive System",
    "Sugar Craving Body",
    "Fitness"
  ];

  public registerForm!: FormGroup;
  public userIdToUpdate!: number;

  constructor(
    private fb: FormBuilder, 
    private api: ApiService, 
    private toastService: NgToastService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      bmiResult: [''],
      gender: [''],
      requireTrainer: [''],
      package: [''],
      important: [''],
      haveGymBefore: [''],
      enquiryDate: ['']
    });

    this.registerForm.controls['height'].valueChanges
      .subscribe(res => {
        this.calculateBmi(res)
      })

      this.activatedRoute.params.subscribe(val => {
        this.userIdToUpdate = val['id']
        this.api.getRegisteredUserId(this.userIdToUpdate)
        .subscribe(res => {
            this.fillFormToUpdate(res)
        })  
      })

  }

  submit() {
    console.log(this.registerForm.value);
    this.api.postRegistration(this.registerForm.value)
      .subscribe(res => {
        this.toastService.success({detail: "Sucess", summary:"Enquiry added", duration:3000});
        this.registerForm.reset();
      })
      console.log("Registrado com sucesso");
      //this.registerForm.reset();
  }

  calculateBmi(hightValue: number) {
    const weight = this.registerForm.value.weight;
    const height = hightValue;
    const bmi = Number((weight / (height * height)).toFixed(2))
    this.registerForm.controls['bmi'].patchValue(bmi);

    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls['bmiResult'].patchValue("Underweight")
        break;
      case bmi >= 18.5 && bmi < 25:
        this.registerForm.controls['bmiResult'].patchValue("Normal")
        break;
      case bmi >= 25 && bmi < 30:
        this.registerForm.controls['bmiResult'].patchValue("Overweight")
        break;

      default:
        this.registerForm.controls['bmiResult'].patchValue("Obese")
        break;
    }
  }

  fillFormToUpdate(user: User){
    this.registerForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
      weight: user.weight,
      height: user.height,
      bmi: user.bmi,
      bmiResult: user.bmiResult,
      gender: user.gender,
      requireTrainer: user.requireTrainer,
      package: user.package,
      important: user.important,
      haveGymBefore: user.haveGymBefore,
      enquiryDate: user.enquiryDate
    })
  }

}
