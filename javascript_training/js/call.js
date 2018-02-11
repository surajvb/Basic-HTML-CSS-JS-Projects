var profile1 = {
    name: 'arun',
    age: 32
};

var profile2 = {
    name: 'prabhu',
    age: 24
}

function getRetirementYear(retirementAge){
    console.log(this);
    console.log(`Retirement Age is ${retirementAge}`);
    var _currentYear = 2017;
    var _serviceLeftToRetire = retirementAge - this.age;
    var _retirementYear = _currentYear + _serviceLeftToRetire;
    console.log(`Person Name: ${this.name} will retire in ${_retirementYear}`);
}

getRetirementYear.call(profile1, 60);
getRetirementYear.call(profile2, 60);
