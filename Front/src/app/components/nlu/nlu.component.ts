import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nlu',
  templateUrl: './nlu.component.html',
  styleUrls: ['./nlu.component.css']
})
export class NluComponent {
  data: any = [];
  dataKeys: any = [];
  dataValues: any = [];
  message: any;
  nRow: any;
  URL = "https://sura-watson.mybluemix.net/upload-text";
  ok: boolean = false;
  start: boolean = false;

  JSONhandler(res: any) {
    var data: any = [];
    data.push(res);
    var nres = data[0].reduce(function (r, a) {
      r[a.type] = r[a.type] || [];
      r[a.type].push(a.text);
      return r;
    }, Object.create(null));

    this.data = nres;
    this.dataKeys = Object.keys(nres);
    console.log(this.dataKeys);
    this.dataValues = Object.values(nres);
    this.nRow = Math.ceil(this.dataKeys.length / 4);   

    this.start = false;
    this.ok = true;
  }

  sendText() {
    this.ok = false;
    this.start = true;
    var text = (<HTMLInputElement>document.getElementById("descripcion")).value
    var myForm = {"text": text};
    
    this.httpClient.post<any>(this.URL, myForm)
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

  ngOnInit() { }

  constructor(private httpClient: HttpClient) { }

}
