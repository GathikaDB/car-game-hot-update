import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ImageScreenLogic')
export class ImageScreenLogic extends Component {
    @property(Label)
    label: Label = null;

    start() {
        if (this.label) {
            this.label.string = "This text is set by remote logic!";
        }
    }
} 