/*
 *************EXAMPLE 1**************
 */

//Creating constructor for Laptop, simply called an Interface
const laptopInterface = function({ ram, hdd, disk }) {
  this.ram = ram;
  this.hdd = hdd;
  this.disk = disk;
};

//Creating constructor for Tablet, simply called an Interface
const tabletInterface = function({ ram, hdd, size, display, camera }) {
  this.ram = ram;
  this.hdd = hdd;
  this.size = size;
  this.display = display;
  this.camera = camera;
};

//Factory Builder to build factories using Interfaces
const factoryBuilder = (type, attributes) => {
  switch (type) {
    case "LAPTOP":
      return new laptopInterface(attributes);
    case "TABLET":
      return new tabletInterface(attributes);
  }
};

const thinkPad = factoryBuilder("LAPTOP", { ram: 4, hdd: 1024, disk: "SSD" });
console.log("thinkPad...", thinkPad);
const iPad = factoryBuilder("TABLET", {
  ram: 2,
  hdd: 128,
  size: 6,
  display: "Gorilla",
  camera: 20
});
console.log("iPad...", iPad);

/*
 *************EXAMPLE 1**************
 */
/**
 * Vendor A
 */
VendorA = {};

VendorA.title = function title() {
  return "Vendor A";
};

VendorA.pay = function pay(amount) {
  console.log(
    `setting up configuration using username: ${this.username} and password: ${this.password}`
  );
  return `Payment for service $${amount} is successful using ${this.title()}`;
};

/**
 *Vendor B
 */
VendorB = {};
VendorB.title = function title() {
  return "Vendor B";
};

VendorB.pay = function pay(amount) {
  console.log(
    `setting up configuration using username: ${this.username} 
        and password: ${this.password}`
  );
  return `Payment for service $${amount} is successful using ${this.title()}`;
};

/**
 *
 * @param {*} vendorOption
 * @param {*} config
 */

function VendorFactory(vendorOption, config = {}) {
  const vendor = Object.create(vendorOption);
  Object.assign(vendor, config);
  return vendor;
}

const vendorFactory = VendorFactory(VendorA, {
  username: "test",
  password: "1234"
});
console.log(vendorFactory.title());
console.log(vendorFactory.pay(12));

const vendorFactory2 = VendorFactory(VendorB, {
  username: "testTwo",
  password: "4321"
});
console.log(vendorFactory2.title());
console.log(vendorFactory2.pay(50));
