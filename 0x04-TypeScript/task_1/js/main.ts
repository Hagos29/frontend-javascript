interface Teacher {
  firstName: String;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: boolean;
}


const teacher3: Teacher = {
  firstName: 'Hagos',
  fullTimeEmployee: false,
  lastName: 'Beyene',
  location: 'Eritrea',
  contract: false,
  yearsOfExperience: 2,
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  },
  workTeacherTasks: function (): string {
    throw new Error("Function not implemented.");
  }
};

interface Directors extends Teacher{
  numberOfReports: number;
}

const director1: Directors={
  firstName: 'Yacob',
  lastName: 'nafie',
  location: 'Eritrea',
  fullTimeEmployee: true,
  numberOfReports: 17,
  yearsOfExperience: 40,
  contract: true,
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  },
  workDirectorTasks: function (): string {
    throw new Error("Function not implemented.");
  },
  workTeacherTasks: function (): string {
    throw new Error("Function not implemented.");
  }
}


//function
function printTeacher 
  (firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
  }

  console.log(printTeacher("hagos", "Yacob"))


  


interface StudentConstructor {
  firstName: string;
  lastName: string;
}


interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentInterface {
   firstName: string;
   lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass({ firstName: 'Hagos', lastName: 'Beyene' });


export default StudentClass;


// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teachers implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}



// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Directors implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create employee
function createEmployees(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute work
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}



// Define a string literal type
type Subjects = 'Math' | 'History';

// Define the function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}




