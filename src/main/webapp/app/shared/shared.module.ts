import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmailapiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EmailapiSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EmailapiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmailapiSharedModule {
  static forRoot() {
    return {
      ngModule: EmailapiSharedModule
    };
  }
}
