/**
 * A dropdown control with material design and angular 2 support.
 * Inspiration taken from : http://creativeit.github.io/getmdl-select/
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'material-select',
    templateUrl: 'material-select.component.html',
    styles: [`
        .mdl-textfield {
            margin-top: 4px;
            margin-bottom: -10px;
        }
        .mdl-menu__container {
	        width: 100% !important;
        }
        
        .mdl-menu__container .mdl-menu {
	        width: 100%;
	    }
        .mdl-textfield__input  {
            padding : 4px 0px 0px 0px
        }
        .arrow-icon {
            position: absolute;
            right: 0;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid;
            margin: -18px 4px 0px 4px;
            color: rgba(0,0,0,.38);
        }
    `]
})
export class MaterialSelect {
    @Input() name: string;
    @Input() items: any[];
    @Input() label: string;
    @Input() selectedValue: any;
    @Output() selectedValueChange: any = new EventEmitter();

    selectItem(oItem: any) {
        this.selectedValue = oItem;
        this.selectedValueChange.emit(oItem);
    }
}