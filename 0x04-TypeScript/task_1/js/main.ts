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
  fullTimeEmployee : false,
  lastName: 'Beyene',
  location: 'Eritrea',
  contract: false,
  yearsOfExperience: 2
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
  contract: true
}


//function
function printTeacher 
  (firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
  }

  console.log(printTeacher("hagos", "Yacob"))