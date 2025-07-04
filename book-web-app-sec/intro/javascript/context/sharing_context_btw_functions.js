// create a new getAge() function clone with the context from ageData
// then call it with the param 'joe'
const getBoundAge = getAge.bind(ageData)('joe');

// call getAge() with ageData context and param joe
const boundAge = getAge.call(ageData, 'joe');

// call getAge() with ageData context and param joe
const boundAge  = getAge.apply(ageData, ['joe']);

/*
 * bind, call and apply allow developers to move context from one function to another.
 *
 * The only difference between call, and apply is that call takes a list of arguments,
 * and apply takes and array of arguments.
 */