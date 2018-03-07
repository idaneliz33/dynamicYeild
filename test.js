
//Dynamic Yield job interview exercise - Idan Elitzur

//node packages
const webdriver = require('selenium-webdriver');
const chrome = require('chromedriver');
const chai = require('chai');

//conf
let element_time = 5000;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(/* ... */)
    .build();

//classes
const By = webdriver.By;
const until = webdriver.until;
const expect = chai.expect;


//test cases
describe("Dynamic Yield - Job interview exricse", async function(){

	this.timeout(15000);

	before(function(){
		driver.manage().window().maximize();
	});


	it("Step 1 - Searching Dynamic Yield on Google", async function(){
		//locators
		const searchBox = driver.findElement(By.name('q'));
		const submit = driver.findElement(By.name('btnK'));
		const waitForLink = driver.wait(until.elementLocated(By.css('cite._Rm')));

		driver.get('https://www.google.com/en');
		searchBox.sendKeys('Dynamic Yield');
		try {
			await submit.click();
			return waitForLink;
  		} finally {
  		    return null;
  	    }
	});

	it("Step 2 - Counting as groups", async function(){
		//locators
		const link = driver.findElements(By.css('cite._Rm'));

		try {
			//increment - empty states
			let countA = 0;
			let countB = 0;
			let countC = 0;

			await link.then(function(elements){
		   		elements.forEach(function (element) {
    	  			element.getText().then(function(text){
    	  				let array = text.split(',');
        				// console.log(array);
        				for(let i = 0; i < array.length; i++){
				    		if(array[i].includes('www.dynamicyield.com')) {
				        		countA++;
				        		console.log("Company Website: " + countA);
							} else if(array[i].includes('twitter') || array[i].includes('facebook') || array[i].includes('linkedin')){
								countB++;
								console.log("Social Media: " + countB);
							} else {
								countC++;
								console.log("Other: " + countC);
							}
						}
   	 				})
				})
			});
		} finally {
  		    return null;
  	    }
	});
	
})