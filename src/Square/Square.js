const COLORS = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
class Square {
  constructor(value = 2) {
    this.value = value;
  }

  color() {
    switch (this.value) {
      case 2:
        return "Red";
      case 4:
        return "Orange";
      case 8:
        return "Yellow";
      case 16:
        return "Green";
      case 32:
        return "Blue";
      case 64:
        return "Indigo";
      case 128:
        return "Violet";
    }
  }
}

export default Square;
