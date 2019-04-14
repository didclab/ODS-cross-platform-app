import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {

  @ViewChild('source') sourceCompnent;
  @ViewChild('destination') destComponent;

  srcEndpointOpen : boolean = true;
  destEndpointOpen : boolean = true;
  transferSettingsOpen : boolean = true;

  srcSelection : string = null;
  destSelection : string = null;

  constructor(private toastController : ToastController) { }

  ngOnInit() {
  }

  public srcEndpointClick(){
    this.srcEndpointOpen = !(this.srcEndpointOpen);
    if(this.srcEndpointOpen === false)
      this.destEndpointOpen = this.transferSettingsOpen = true;
  
  }

  public destEndpointClick(){
    this.destEndpointOpen = !(this.destEndpointOpen);
    if(this.destEndpointOpen === false)
      this.srcEndpointOpen = this.transferSettingsOpen = true;
  }

  public transferSettingsClick(){
    this.transferSettingsOpen = !(this.transferSettingsOpen);
    if(this.transferSettingsOpen === false)
      this.srcEndpointOpen = this.destEndpointOpen = true;
  }

  public initiateTransfer(){
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Transfer Initiated!',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  public handleSrcSelection(selection : string){
    this.srcSelection = selection;
  }

  public handleDestSelection(selection : string){
    this.destSelection = selection;
  }

  public clearSrcSelection(){
    this.srcSelection = null;
    this.sourceCompnent.clearSelection();
  }

  public clearDestSelection(){
    this.destSelection = null;
    this.destComponent.clearSelection();
  }
}
