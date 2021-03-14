export class SelectOption {
  constructor({ value, label = value, isSelected = false, isDisabled = false }) {
    this.value = value;
    this.label = label;
    this.isSelected = isSelected;
    this.isDisabled = isDisabled;
  }
}
