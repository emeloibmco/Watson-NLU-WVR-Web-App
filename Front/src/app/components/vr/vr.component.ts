import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.css']
})

export class VrComponent implements OnInit {
  @ViewChild('mymodal', { static: true }) modal: ElementRef;

  initialValue = 0;
  numberImg = 4;
  numberRow = 0;
  message: any;
  images: any;
  URL = "https://sura-watson.mybluemix.net/upload-photos";
  blank = `assets/img/blank.jpg`;
  VR: any;
  process: boolean[];

  no_image(card: any, i: number) {
    card.src = this.blank;
    card.parentElement.classList.add('border-0');
  }

  previewUrl: any = null;
  selectedFiles: File[] = [];

  preview(fileData: any, i: number) {
    // Show preview 
    var mimeType = fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = (_event) => {
      this.images[i] = reader.result;
    }
  }

  upload() {
    const formData = new FormData();

    if (this.selectedFiles.length) {
      for (let i = 0; i < this.selectedFiles.length; i++)
        formData.append('photos', this.selectedFiles[i], this.selectedFiles[i].name);
    }

    this.httpClient.post<any>(this.URL, formData)
      .subscribe(
        res => {
          console.log(res)
          this.JSONhandler(res);
        },
        error => {
          this.message = error.message;
        }
      );
  }

  brandName(brand: string) {
    if (brand == "vw")
      return "Volkswagen";
    else
      return brand;
  }

  arraySelector() {
    var nFiles: File[] = [];
    var k = true;

    this.selectedFiles.forEach(element => {
      for (let j = 0; j < this.kk; j++) {
        if (this.VR[j].name == element.name)
          k = false;
      }
      if (k)
        nFiles.push(element);
      else
        k = true;
    });

    return nFiles;
  }

  searchBrand(res: any, name: any) {
    var brand;

    for (let element of res) {
      if (element[name]) {
        brand = element[name];
        break;
      }
    }

    if (brand == "vw")
      return "Volkswagen";
    else
      return brand;
  }

  JSONhandler(res: any) {
    var l = res.length - 1;
    var ini = this.arraySelector();
    var t = l - ini.length;


    for (let i = 0; i < l; i++) {
      for (let j = 0; j < ini.length; j++) {
        if (ini[j].name == res[i].image) {
          var name = res[i].image;
          var brand = this.searchBrand(res[l], name);          
          
          this.cardInfo(t + j, Object.keys(res[i])[1], brand, name);
          this.process[t + j] = true;
        }
      }
    }
  }

  cardInitialize() {
    interface VR {
      damage: string;
      brand: string;
      name: string;
    }

    interface VRDetails {
      [key: number]: VR; //Or string instead of number
    }

    let VRDetails: VRDetails = {};
    this.VR = VRDetails;
  }

  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files: any) {
    this.prepareFilesList(files);
  }

  arrowVisibility() {
    var left = <HTMLInputElement>(document.getElementsByClassName("carousel-control-prev-icon"))[0];
    var right = <HTMLInputElement>(document.getElementsByClassName("carousel-control-next-icon"))[0];

    if (this.numberRow > 1) {
      left.style.opacity = "1";
      right.style.opacity = "1";
    }      
  }

  kk: number = 0;

  prepareFilesList(files: any) {
    var s1 = this.initialValue;
    if (s1 > 1)
      this.kk = s1;
    this.initialValue = this.initialValue + files.length;
    var s = this.initialValue;
    var blank = this.blank;
    this.numberImg = 4 * (Math.floor((s - 1) / 4) + 1);
    this.numberRow = Math.ceil(this.numberImg / 4);
    if (this.numberRow > 1)
      this.arrowVisibility;

    var temp: any = 0;
    var temp1: boolean[];

    if (this.images)
      var temp = this.images;

    if (this.process)
      var temp1 = this.process;

    this.images = [...Array(this.numberImg).keys()].map(function (x) {
      if (x < s1)
        return temp[x];
      else if (x < s)
        return blank;
    });

    this.process = [...Array(this.numberImg).keys()].map(function (x) {
      if (x < s1)
        return temp1[x];
      else if (x < s)
        return false;
    });
    
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(<File>files[i]);
      this.preview(<File>files[i], s1 + i);
      //this.cardInfo(s1 + i);  
    }

    this.arrowVisibility();

    if (this.selectedFiles.length < 2)
      this.openModal();
    else
      this.upload();
  }
  
  openModal() {
    this.modalService.open(this.modal, {ariaLabelledBy: 'modal-basic-title', centered: true})
  }
 
  cardInfo(index: number, damage: string, brand: string, name: string) {
    this.VR[index] = {
      damage: damage,
      brand: brand,
      name: name
    }
  }

  ngOnInit() {
    this.cardInitialize();
  }

  constructor(private httpClient: HttpClient, private modalService: NgbModal) { }

}
