const { faker } = require("@faker-js/faker");
class ProductsService {

    constructor(){
        this.products = [];
        this.generate()
    }

    generate(){
      const limit = 100
      for (let index = 0; index < limit; index++) {
          this.products.push({
          id: faker.string.uuid(),
          name:  faker.person.firstName(),
          lastName:  faker.person.lastName(),
          sex: faker.person.sex()
        })
      }
    }

    create() {

    }
    find() {
      return this.products;
    }
    findOne(id){
      return this.products.find(item => item.id === id);
    }
    update(){

    }
    delete(){

    }
}

module.exports = ProductsService;
