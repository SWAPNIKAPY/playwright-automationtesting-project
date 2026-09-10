export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.address = page.locator('#Address');
    this.email = page.locator('#Email');
    this.phone = page.locator('#Phone');
    this.male = page.locator('input[value="Male"]');
    this.female = page.locator('input[value="FeMale"]');
    this.hobbiesCricket = page.locator('#checkbox1');
    this.hobbiesMovies = page.locator('#checkbox2');
    this.hobbiesHockey = page.locator('#checkbox3');
    this.languages = page.locator('#msdd');
    this.skills = page.locator('#Skills');
    this.country = page.locator('#countries');
    this.year = page.locator('#yearbox');
    this.month = page.locator('select[placeholder="Month"]');
    this.day = page.locator('#daybox');
    this.password = page.locator('#firstpassword');
    this.confirmPassword = page.locator('#secondpassword');
  }

  async open() {
    await this.page.goto('/Register.html');
  }

  async enterBasicDetails() {
    await this.firstName.fill('Swapnika');
    await this.lastName.fill('Pulipaty');
    await this.address.fill('Hyderabad');
    await this.email.fill('swapnika@example.com');
    await this.phone.fill('9885310559');
  }
}