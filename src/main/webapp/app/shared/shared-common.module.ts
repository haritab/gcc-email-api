import { NgModule } from '@angular/core';

import { EmailapiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [EmailapiSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [EmailapiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EmailapiSharedCommonModule {}
